@extends('admin.layouts.app')

@section('title', 'Contact')

@section('content')
    <div class="w-full max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div class="mb-8">
            <h1 class="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-950">Contact Submissions</h1>
            <p class="mt-1 text-sm text-slate-500">Review contact form submissions with live search and server pagination.</p>
        </div>

        <div class="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div class="relative w-full md:max-w-md">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input type="text"
                       id="contact-search"
                       class="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                       placeholder="Search name, company, email, phone, or services">
            </div>
            <div class="text-sm text-slate-500" id="contact-result-summary">Loading contacts...</div>
        </div>

        <div class="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div class="overflow-x-auto">
                <table class="w-full min-w-[860px] text-left">
                    <thead class="border-b border-slate-100 bg-slate-50">
                        <tr>
                            <th class="px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</th>
                            <th class="px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Company</th>
                            <th class="px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</th>
                            <th class="px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone</th>
                            <th class="px-5 py-4 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100" id="contacts-table-body">
                        <tr>
                            <td colspan="5" class="px-5 py-10 text-center text-sm text-slate-500">Loading contacts...</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm text-slate-500" id="contact-pagination-summary"></p>
                <div class="flex flex-wrap gap-2" id="contact-pagination"></div>
            </div>
        </div>
    </div>

    <div class="contact-modal-overlay" id="contact-view-modal">
        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeContactModal('contact-view-modal')"></div>
        <div class="contact-modal-panel">
            <div class="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-8 sm:py-6">
                <div>
                    <p class="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary">Read Only</p>
                    <h2 class="font-['Space_Grotesk'] text-xl font-bold text-slate-950 sm:text-2xl">Contact Details</h2>
                </div>
                <button type="button" class="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" onclick="closeContactModal('contact-view-modal')">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <div class="contact-modal-scroll flex-1 space-y-5 px-5 py-5 sm:px-8" id="contact-view-content"></div>
        </div>
    </div>

    <style>
        .contact-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 100;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .contact-modal-overlay.is-open {
            display: flex;
        }

        .contact-modal-panel {
            position: relative;
            z-index: 10;
            display: flex;
            width: min(920px, calc(100vw - 2rem));
            max-height: calc(100vh - 2rem);
            flex-direction: column;
            overflow: hidden;
            border-radius: 1rem;
            background: white;
            box-shadow: 0 25px 80px -35px rgba(15, 23, 42, 0.7);
        }

        .contact-modal-scroll {
            min-height: 0;
            overflow-y: auto;
        }

        @media (min-width: 640px) {
            .contact-modal-overlay {
                padding: 1.5rem;
            }

            .contact-modal-panel {
                width: min(920px, calc(100vw - 3rem));
                max-height: calc(100vh - 3rem);
            }
        }
    </style>

    @php
        $contactRoutes = [
            'data' => route('admin.contact.data'),
            'show' => route('admin.contact.show', ['contact' => '__ID__']),
            'file' => route('admin.contact.file', ['contact' => '__ID__']),
            'destroy' => route('admin.contact.destroy', ['contact' => '__ID__']),
        ];
    @endphp

    <script>
        (() => {
            const routes = @json($contactRoutes);
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            const tableBody = document.getElementById('contacts-table-body');
            const searchInput = document.getElementById('contact-search');
            const pagination = document.getElementById('contact-pagination');
            const paginationSummary = document.getElementById('contact-pagination-summary');
            const resultSummary = document.getElementById('contact-result-summary');
            document.body.appendChild(document.getElementById('contact-view-modal'));

            let currentPage = 1;
            let currentSearch = '';
            let searchTimer = null;

            const routeFor = (name, id) => routes[name].replace('__ID__', id);
            const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;',
            }[char]));

            const requestJson = async (url, options = {}) => {
                const response = await fetch(url, {
                    headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                        ...(options.headers || {}),
                    },
                    ...options,
                });

                const json = await response.json();

                if (!response.ok || json.status === 'error') {
                    throw json;
                }

                return json;
            };

            const renderRows = (contacts) => {
                if (!contacts.length) {
                    tableBody.innerHTML = '<tr><td colspan="5" class="px-5 py-10 text-center text-sm text-slate-500">No contact submissions found.</td></tr>';
                    return;
                }

                tableBody.innerHTML = contacts.map((contact) => `
                    <tr class="transition hover:bg-slate-50/80">
                        <td class="px-5 py-4 font-semibold text-slate-900">${escapeHtml(contact.name || '-')}</td>
                        <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(contact.company || '-')}</td>
                        <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(contact.email || '-')}</td>
                        <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(contact.phone || '-')}</td>
                        <td class="px-5 py-4">
                            <div class="flex justify-end gap-2">
                                <button type="button" class="contact-action-button" title="View" onclick="viewContact(${contact.id})"><span class="material-symbols-outlined !text-[20px]">visibility</span></button>
                                <button type="button" class="contact-action-button text-red-500 hover:bg-red-50 hover:text-red-600" title="Delete" onclick="deleteContact(${contact.id})"><span class="material-symbols-outlined !text-[20px]">delete</span></button>
                            </div>
                        </td>
                    </tr>
                `).join('');
            };

            const renderPagination = (meta) => {
                paginationSummary.textContent = meta.total
                    ? `Showing ${meta.from} to ${meta.to} of ${meta.total} contacts`
                    : 'No contacts to show';

                resultSummary.textContent = `${meta.total} contact${meta.total === 1 ? '' : 's'} found`;
                pagination.innerHTML = '';

                if (meta.last_page <= 1) return;

                const addButton = (label, page, disabled = false, active = false) => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.textContent = label;
                    button.disabled = disabled;
                    button.className = `min-w-10 rounded-lg border px-3 py-2 text-sm font-semibold transition ${active ? 'border-primary bg-primary text-white' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'} ${disabled ? 'cursor-not-allowed opacity-40' : ''}`;
                    button.addEventListener('click', () => loadContacts(page));
                    pagination.appendChild(button);
                };

                addButton('Prev', meta.current_page - 1, meta.current_page === 1);
                const start = Math.max(1, meta.current_page - 2);
                const end = Math.min(meta.last_page, meta.current_page + 2);
                for (let page = start; page <= end; page += 1) addButton(String(page), page, false, page === meta.current_page);
                addButton('Next', meta.current_page + 1, meta.current_page === meta.last_page);
            };

            window.loadContacts = async (page = 1) => {
                currentPage = page;
                tableBody.innerHTML = '<tr><td colspan="5" class="px-5 py-10 text-center text-sm text-slate-500">Loading contacts...</td></tr>';

                try {
                    const url = new URL(routes.data, window.location.origin);
                    url.searchParams.set('page', page);
                    if (currentSearch) url.searchParams.set('search', currentSearch);
                    const json = await requestJson(url);
                    renderRows(json.data);
                    renderPagination(json.meta);
                } catch (error) {
                    tableBody.innerHTML = `<tr><td colspan="5" class="px-5 py-10 text-center text-sm text-red-600">${escapeHtml(error.message || 'Unable to load contacts.')}</td></tr>`;
                }
            };

            window.openContactModal = (id) => {
                document.getElementById(id).classList.add('is-open');
                document.body.style.overflow = 'hidden';
            };

            window.closeContactModal = (id) => {
                document.getElementById(id).classList.remove('is-open');
                document.body.style.overflow = '';
            };

            window.viewContact = async (id) => {
                const content = document.getElementById('contact-view-content');
                content.innerHTML = '<p class="py-10 text-center text-sm text-slate-500">Loading contact details...</p>';
                openContactModal('contact-view-modal');

                try {
                    const { data: contact } = await requestJson(routeFor('show', id));
                    const formEntries = Object.entries(contact.form_data || {});
                    const messageEntry = formEntries.find(([key]) => key.toLowerCase() === 'message');
                    const fields = formEntries
                        .filter(([key]) => key.toLowerCase() !== 'message')
                        .map(([key, value]) => detailBlock(key.replaceAll('_', ' '), Array.isArray(value) ? value.join(', ') : value))
                        .join('');
                    const messageBlock = messageEntry
                        ? detailBlock('message', Array.isArray(messageEntry[1]) ? messageEntry[1].join(', ') : messageEntry[1])
                        : '';
                    content.innerHTML = `
                        <div class="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                            <p class="text-[10px] font-bold uppercase tracking-widest text-primary">#${contact.id}</p>
                            <h3 class="mt-1 font-['Space_Grotesk'] text-2xl font-bold text-slate-950">${escapeHtml(contact.name || '-')}</h3>
                            <p class="mt-2 text-sm font-semibold text-slate-600">${escapeHtml(contact.submitted_at || '-')}</p>
                        </div>
                        
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">${fields}</div>
                        ${messageBlock}
                        <div class="rounded-2xl border border-slate-100 bg-white p-5">
                            <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Uploaded File</p>
                            ${contact.has_file ? `
                                <div class="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p class="text-sm font-semibold text-slate-800">${escapeHtml(contact.file_original_name || '-')}</p>
                                        <p class="mt-1 text-xs text-slate-400">${escapeHtml(contact.file_mime_type || '-')} ${contact.file_size ? `- ${Math.round(contact.file_size / 1024)} KB` : ''}</p>
                                    </div>
                                    <a class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-primary/90" href="${escapeHtml(contact.file_url)}"><span class="material-symbols-outlined !text-[18px]">download</span> Download</a>
                                </div>
                            ` : '<p class="mt-3 text-sm text-slate-500">No file uploaded.</p>'}
                        </div>
                    `;
                } catch (error) {
                    content.innerHTML = `<p class="py-10 text-center text-sm text-red-600">${escapeHtml(error.message || 'Unable to load contact.')}</p>`;
                }
            };

            window.deleteContact = async (id) => {
                if (!confirm('Delete this contact submission? This will also delete the uploaded file if one exists.')) return;
                try {
                    await requestJson(routeFor('destroy', id), { method: 'DELETE' });
                    await loadContacts(currentPage);
                } catch (error) {
                    alert(error.message || 'Unable to delete contact.');
                }
            };

            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimer);
                searchTimer = setTimeout(() => {
                    currentSearch = searchInput.value.trim();
                    loadContacts(1);
                }, 250);
            });

            const detailCard = (label, value) => `
                <div class="rounded-2xl border border-slate-100 bg-white p-4">
                    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">${escapeHtml(label)}</p>
                    <p class="mt-2 break-words text-sm font-semibold leading-6 text-slate-800">${escapeHtml(value || '-')}</p>
                </div>
            `;

            const detailBlock = (label, value) => `
                <div class="rounded-2xl border border-slate-100 bg-white p-5">
                    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 capitalize">${escapeHtml(label)}</p>
                    <p class="mt-3 whitespace-pre-line break-words text-sm leading-6 text-slate-600">${escapeHtml(value || '-')}</p>
                </div>
            `;

            const style = document.createElement('style');
            style.textContent = '.contact-action-button{display:inline-flex;height:2.25rem;width:2.25rem;align-items:center;justify-content:center;border-radius:.75rem;color:rgb(100 116 139);transition:all 150ms ease}.contact-action-button:hover{background:rgba(93,92,255,.08);color:#5D5CFF}';
            document.head.appendChild(style);

            loadContacts();
        })();
    </script>
@endsection
