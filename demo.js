const employees = [
  { id: 1, name: 'Carlos Henrique Oliveira', role: 'Operador de Munck', cpf: '234.567.890-12', company: 'Metalurgica Horizonte', badge: '000148', dept: 'Operacao', status: 'Ativo', initials: 'CH' },
  { id: 2, name: 'Marina Costa Almeida', role: 'Tecnica de Seguranca', cpf: '129.455.780-00', company: 'Engenharia Apex', badge: '000221', dept: 'SSMA', status: 'Ativo', initials: 'MA' },
  { id: 3, name: 'Admilson Rodrigues Soares', role: 'Operador de Guindaste', cpf: '032.490.476-27', company: 'Porto Industrial Sul', badge: '000008', dept: 'Movimentacao', status: 'Ativo', initials: 'AR' },
  { id: 4, name: 'Renata Lima Ferreira', role: 'Soldadora TIG', cpf: '476.812.900-41', company: 'Caldeiraria Norte', badge: '000312', dept: 'Producao', status: 'Ativo', initials: 'RL' },
  { id: 5, name: 'Vitor Augusto Santos', role: 'Instrutor NR', cpf: '787.100.562-90', company: 'Treinamentos ProSafe', badge: '000041', dept: 'Instrucao', status: 'Ativo', initials: 'VA' },
  { id: 6, name: 'Bianca Martins Rocha', role: 'Supervisora de Obra', cpf: '601.222.987-10', company: 'Construtora Delta', badge: '000177', dept: 'Obras', status: 'Ativo', initials: 'BR' }
];

const certificates = [
  { code: 'CFX-NR35-2026-001', employee: 'Admilson Rodrigues Soares', training: 'NR-35 - Trabalho em Altura', status: 'Valido', date: '13/08/2026', tone: 'green' },
  { code: 'CFX-NR11-2026-014', employee: 'Carlos Henrique Oliveira', training: 'NR-11 - Movimentacao de Cargas', status: 'Vencendo', date: '05/07/2026', tone: 'orange' },
  { code: 'CFX-ASO-2026-087', employee: 'Renata Lima Ferreira', training: 'ASO Periodico', status: 'Vencido', date: '20/06/2026', tone: 'red' },
  { code: 'CFX-EPI-2026-203', employee: 'Marina Costa Almeida', training: 'Entrega de EPI', status: 'Valido', date: '22/11/2026', tone: 'green' }
];

const views = {
  dashboard: {
    title: 'Dashboard',
    render: renderDashboard
  },
  employees: {
    title: 'Funcionarios',
    render: renderEmployees
  },
  certificates: {
    title: 'Certificados',
    render: renderCertificates
  },
  idcards: {
    title: 'Carteirinhas',
    render: renderIdCards
  },
  reports: {
    title: 'Relatorios',
    render: renderReports
  }
};

const root = document.getElementById('viewRoot');
const title = document.getElementById('pageTitle');
const label = document.getElementById('viewLabel');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.menu-item').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.getElementById('consultButton').addEventListener('click', () => {
  openModal(`
    <p class="eyebrow dark">Consulta publica</p>
    <h2 style="margin:0 0 12px;font-size:32px">Certificado autentico</h2>
    <p style="color:var(--muted);line-height:1.7">Codigo <strong>CFX-NR35-2026-001</strong> validado na base demonstrativa do Conformix Pro.</p>
    <div class="report-sheet" style="margin-top:18px">
      <table>
        <tr><th>Funcionario</th><td>Admilson Rodrigues Soares</td></tr>
        <tr><th>Treinamento</th><td>NR-35 - Trabalho em Altura</td></tr>
        <tr><th>Validade</th><td>13/08/2026</td></tr>
        <tr><th>Status</th><td><span class="badge green">Valido</span></td></tr>
      </table>
    </div>
  `);
});

document.getElementById('globalSearch').addEventListener('input', (event) => {
  const term = event.target.value.trim().toLowerCase();
  document.querySelectorAll('[data-search]').forEach((card) => {
    card.style.display = card.dataset.search.includes(term) ? '' : 'none';
  });
});

function setView(viewName) {
  const view = views[viewName] || views.dashboard;
  title.textContent = view.title;
  label.textContent = view.title;
  document.querySelectorAll('.menu-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });
  root.innerHTML = view.render();
}

function renderDashboard() {
  const kpis = [
    ['Funcionarios ativos', '142', '#1268e3'],
    ['NRs validas', '87', '#16a34a'],
    ['NRs vencendo', '14', '#f59e0b'],
    ['NRs vencidas', '5', '#e52329'],
    ['ASOs vencidos', '7', '#e52329'],
    ['Equipamentos', '68', '#1268e3'],
    ['Obras ativas', '18', '#16a34a'],
    ['Certificados', '256', '#0ea5e9']
  ];
  return `
    <div class="kpi-grid">
      ${kpis.map(([name, value, tone]) => `<article class="kpi-card" style="--tone:${tone}"><small>${name}</small><strong>${value}</strong></article>`).join('')}
    </div>
    <div class="dashboard-grid">
      <section class="panel">
        <h2>Painel de alertas</h2>
        <div class="stack">
          <div class="alert-row"><div><strong>NR-11 vencendo</strong><p>5 colaboradores nos proximos 30 dias.</p></div><span class="badge orange">Atencao</span></div>
          <div class="alert-row"><div><strong>ASO vencido</strong><p>Renata Lima Ferreira precisa regularizar exame.</p></div><span class="badge red">Critico</span></div>
          <div class="alert-row"><div><strong>Laudo tecnico</strong><p>Guindaste GT-44 vence em 12 dias.</p></div><span class="badge orange">Atencao</span></div>
        </div>
      </section>
      <section class="panel">
        <h2>Obras em andamento</h2>
        <div class="stack">
          <div class="work-row"><div><strong>Parada Industrial NR-13</strong><p>Cliente: Usina Vale Azul</p></div><span class="badge blue">82%</span></div>
          <div class="work-row"><div><strong>Montagem Estrutural</strong><p>Cliente: Metal Norte</p></div><span class="badge green">Final</span></div>
          <div class="work-row"><div><strong>Operacao Guindaste</strong><p>Cliente: Porto Sul</p></div><span class="badge orange">Docs.</span></div>
        </div>
      </section>
      <section class="panel">
        <h2>Acoes rapidas</h2>
        <div class="stack">
          <button class="quick-action" onclick="setView('employees')"><strong>Novo funcionario</strong><span>></span></button>
          <button class="quick-action" onclick="setView('certificates')"><strong>Novo certificado</strong><span>></span></button>
          <button class="quick-action" onclick="setView('idcards')"><strong>Gerar carteirinha</strong><span>></span></button>
          <button class="quick-action" onclick="setView('reports')"><strong>Relatorios</strong><span>></span></button>
        </div>
      </section>
    </div>
  `;
}

function renderEmployees() {
  return `<div class="data-grid">
    ${employees.map((employee) => `
      <article class="data-card" data-search="${searchText(employee)}">
        <div class="person-line">
          <div class="photo">${employee.initials}</div>
          <div>
            <h3>${employee.name}</h3>
            <p>${employee.role} | ${employee.dept}</p>
          </div>
        </div>
        <div style="margin-top:18px;display:grid;gap:8px;color:var(--muted);font-size:14px">
          <span>CPF: <strong style="color:var(--ink)">${employee.cpf}</strong></span>
          <span>Empresa: <strong style="color:var(--ink)">${employee.company}</strong></span>
          <span>Matricula: <strong style="color:var(--ink)">${employee.badge}</strong></span>
        </div>
        <div style="margin-top:18px;display:flex;gap:8px">
          <span class="badge green">${employee.status}</span>
          <button class="outline-button" onclick="openProfile(${employee.id})">Perfil</button>
        </div>
      </article>
    `).join('')}
  </div>`;
}

function renderCertificates() {
  return `
    <section class="report-sheet">
      <h2 style="margin-top:0">Certificados demonstrativos</h2>
      <table>
        <thead><tr><th>Codigo</th><th>Funcionario</th><th>Treinamento</th><th>Validade</th><th>Status</th><th>Acao</th></tr></thead>
        <tbody>
          ${certificates.map((cert) => `
            <tr data-search="${searchText(cert)}">
              <td><strong>${cert.code}</strong></td>
              <td>${cert.employee}</td>
              <td>${cert.training}</td>
              <td>${cert.date}</td>
              <td><span class="badge ${cert.tone}">${cert.status}</span></td>
              <td><button class="outline-button" onclick="showCertificate('${cert.code}')">Verificar</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </section>
  `;
}

function renderIdCards() {
  const emp = employees[2];
  const verifyUrl = encodeURIComponent('https://conformix-pro.demo/verificar/CFX-NR35-2026-001');
  return `
    <div class="card-stage">
      <article class="id-card">
        <div class="id-header">
          <div class="demo-logo">CFX<span>CONFORMIX PRO</span></div>
          <div class="card-title"><strong>CARTEIRINHA NR-35</strong><span>${emp.role}</span></div>
        </div>
        <div class="id-body">
          <div>
            <div class="portrait">${emp.initials}</div>
            <div class="qr"><img alt="QR Code" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${verifyUrl}"></div>
          </div>
          <div>
            <div class="info-lines">
              <div><span>Nome</span><b>${emp.name}</b></div>
              <div><span>CPF</span><b>${emp.cpf}</b></div>
              <div><span>Funcao</span><b>${emp.role}</b></div>
              <div><span>Empresa</span><b>${emp.company}</b></div>
              <div><span>Matricula</span><b>${emp.badge}</b></div>
              <div><span>Emissao</span><b>13/08/2024</b></div>
              <div><span>Validade</span><b>13/08/2026</b></div>
            </div>
            <div class="apt">APTO</div>
          </div>
        </div>
        <div class="id-footer">
          <strong>Treinamentos autorizados:</strong>
          <span>INTEG | MUNCK | NR-35 | NR-11 | NR-33</span>
        </div>
      </article>
      <article class="id-back">
        <div class="back-header"><h2>INFORMACOES DO TREINAMENTO</h2></div>
        <div class="back-body">
          <div class="back-row"><span>Curso</span><b>NR-35 - Trabalho em Altura</b></div>
          <div class="back-row"><span>Carga horaria</span><b>8 horas</b></div>
          <div class="back-row"><span>Competencias</span><b>Procedimentos seguros, riscos preventivos, uso correto de EPIs e emergencia.</b></div>
          <div class="back-row"><span>Instrutor</span><b>Vitor Augusto dos Santos</b></div>
          <div class="back-row"><span>CREA</span><b>5070256410</b></div>
          <div style="margin-top:22px;padding:16px;border-radius:16px;background:#eaf2fb;color:var(--navy);font-weight:800">Este cartao deve ser apresentado junto ao certificado de treinamento quando solicitado.</div>
          <div class="signature-row"><div>Assinatura do responsavel</div><div>Assinatura do colaborador</div></div>
        </div>
      </article>
    </div>
    <div style="text-align:center;margin-top:20px"><button class="primary-button" onclick="window.print()">Imprimir / PDF</button></div>
  `;
}

function renderReports() {
  return `
    <section class="report-sheet">
      <div style="display:flex;justify-content:space-between;gap:16px;align-items:center;margin-bottom:18px">
        <div>
          <p class="eyebrow dark">Relatorio gerencial</p>
          <h2 style="margin:0">Conformidade por status</h2>
        </div>
        <button class="primary-button" onclick="window.print()">Imprimir / PDF</button>
      </div>
      <table>
        <thead><tr><th>Indicador</th><th>Quantidade</th><th>Observacao</th></tr></thead>
        <tbody>
          <tr><td>Funcionarios ativos</td><td>142</td><td>Base operacional da demonstracao</td></tr>
          <tr><td>NRs validas</td><td>87</td><td>Colaboradores em conformidade</td></tr>
          <tr><td>NRs vencendo</td><td>14</td><td>Acao preventiva recomendada</td></tr>
          <tr><td>NRs vencidas</td><td>5</td><td>Critico para auditoria</td></tr>
          <tr><td>ASOs vencidos</td><td>7</td><td>Regularizacao medica pendente</td></tr>
          <tr><td>Equipamentos ativos</td><td>68</td><td>Inventario tecnico demonstrativo</td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function openProfile(id) {
  const emp = employees.find((item) => item.id === id);
  openModal(`
    <p class="eyebrow dark">Dossie do colaborador</p>
    <div class="person-line">
      <div class="photo">${emp.initials}</div>
      <div>
        <h2 style="margin:0;font-size:30px">${emp.name}</h2>
        <p style="margin:6px 0 0;color:var(--muted)">${emp.role} | ${emp.dept}</p>
      </div>
    </div>
    <div class="data-grid" style="grid-template-columns:repeat(3,1fr);margin-top:22px">
      <div class="kpi-card" style="--tone:#16a34a"><small>NRs validas</small><strong>5</strong></div>
      <div class="kpi-card" style="--tone:#f59e0b"><small>Vencendo</small><strong>1</strong></div>
      <div class="kpi-card" style="--tone:#1268e3"><small>EPI entregues</small><strong>8</strong></div>
    </div>
    <div class="report-sheet" style="margin-top:18px">
      <table>
        <tr><th>CPF</th><td>${emp.cpf}</td></tr>
        <tr><th>Empresa</th><td>${emp.company}</td></tr>
        <tr><th>Matricula</th><td>${emp.badge}</td></tr>
        <tr><th>Status</th><td><span class="badge green">${emp.status}</span></td></tr>
      </table>
    </div>
  `);
}

function showCertificate(code) {
  const cert = certificates.find((item) => item.code === code);
  openModal(`
    <p class="eyebrow dark">Validacao digital</p>
    <h2 style="margin:0 0 12px;font-size:32px">${cert.status === 'Valido' ? 'Certificado valido' : 'Certificado em atencao'}</h2>
    <p style="color:var(--muted);line-height:1.7">Consulta demonstrativa com rastreabilidade por codigo e QR Code.</p>
    <div style="display:grid;grid-template-columns:170px 1fr;gap:20px;margin-top:18px;align-items:start">
      <div class="qr" style="margin:0"><img alt="QR Code" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(code)}"></div>
      <table>
        <tr><th>Codigo</th><td>${cert.code}</td></tr>
        <tr><th>Funcionario</th><td>${cert.employee}</td></tr>
        <tr><th>Treinamento</th><td>${cert.training}</td></tr>
        <tr><th>Validade</th><td>${cert.date}</td></tr>
        <tr><th>Status</th><td><span class="badge ${cert.tone}">${cert.status}</span></td></tr>
      </table>
    </div>
  `);
}

function openModal(html) {
  modalContent.innerHTML = html;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

function searchText(value) {
  return JSON.stringify(value).toLowerCase();
}

setView('dashboard');
