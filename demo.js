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

const datasets = {
  trainings: [
    ['NR-35', 'Trabalho em Altura', '8 horas', '24 meses', 'Ativo'],
    ['NR-11', 'Transporte e Movimentacao de Cargas', '16 horas', '24 meses', 'Ativo'],
    ['NR-33', 'Espaco Confinado', '16 horas', '12 meses', 'Ativo'],
    ['NR-18', 'Condicoes e Meio Ambiente de Trabalho', '6 horas', '24 meses', 'Ativo']
  ],
  aso: [
    ['Carlos Henrique Oliveira', 'Admissional', '20/02/2026', '20/02/2027', 'Apto'],
    ['Renata Lima Ferreira', 'Periodico', '20/06/2025', '20/06/2026', 'Vencido'],
    ['Bianca Martins Rocha', 'Mudanca de risco', '15/04/2026', '15/04/2027', 'Apto']
  ],
  epi: [
    ['Marina Costa Almeida', 'Capacete classe B', 'CA 49821', '2', '22/11/2026'],
    ['Admilson Rodrigues Soares', 'Cinto paraquedista', 'CA 41520', '1', '13/08/2026'],
    ['Renata Lima Ferreira', 'Luva raspa soldador', 'CA 30511', '4', '15/09/2026']
  ],
  equipment: [
    ['Guindaste GT-44', 'Guindaste movel', 'GT44-2026', '45 t', 'Ativo'],
    ['Munck MK-12', 'Caminhao Munck', 'MK12-009', '12 t', 'Manutencao'],
    ['Talha Eletrica TE-08', 'Elevacao', 'TE08-772', '8 t', 'Ativo']
  ],
  cranes: [
    ['Guindaste GT-44', 'Laudo estrutural', '12/07/2026', 'Vencendo', 'Porto Sul'],
    ['Munck MK-12', 'Plano de rigging', '18/08/2026', 'Valido', 'Usina Vale Azul'],
    ['Ponte rolante PR-20', 'Inspecao anual', '01/06/2026', 'Vencido', 'Metal Norte']
  ],
  clients: [
    ['Usina Vale Azul', 'Industrial', 'Ribeirao Preto/SP', '18 funcionarios', 'Ativo'],
    ['Porto Industrial Sul', 'Logistica', 'Santos/SP', '32 funcionarios', 'Ativo'],
    ['Metal Norte', 'Metalurgia', 'Campinas/SP', '24 funcionarios', 'Ativo']
  ],
  projects: [
    ['Parada Industrial NR-13', 'Usina Vale Azul', 'Em andamento', '82%', '5 alertas'],
    ['Montagem Estrutural', 'Metal Norte', 'Finalizada', '100%', '0 alertas'],
    ['Operacao Guindaste', 'Porto Industrial Sul', 'Aguardando documentos', '60%', '2 alertas']
  ],
  documents: [
    ['APR-2026-019', 'Analise Preliminar de Risco', 'Parada Industrial NR-13', '15/07/2026', 'Valido'],
    ['ART-2026-044', 'Responsabilidade Tecnica', 'Montagem Estrutural', '02/08/2026', 'Valido'],
    ['RIG-2026-011', 'Plano de Rigging', 'Operacao Guindaste', '18/08/2026', 'Vencendo']
  ],
  matrix: [
    ['Operador de Munck', 'NR-11, NR-35, Rigging basico', '12 aptos', '2 pendentes', '85%'],
    ['Soldador', 'NR-18, EPI, APR', '9 aptos', '1 pendente', '90%'],
    ['Supervisor de Obra', 'NR-35, NR-33, Lideranca SSMA', '6 aptos', '0 pendentes', '100%']
  ]
};

const viewConfig = {
  dashboard: { title: 'Dashboard', render: renderDashboard },
  employees: { title: 'Funcionarios', render: renderEmployees },
  trainings: { title: 'NRs / Treinamentos', render: () => renderTableModule('NRs / Treinamentos', 'Catalogo de treinamentos obrigatorios e reciclagens.', ['Codigo', 'Treinamento', 'Carga horaria', 'Validade', 'Status'], datasets.trainings) },
  certificates: { title: 'Certificados', render: renderCertificates },
  idcards: { title: 'Carteirinhas', render: renderIdCards },
  aso: { title: 'ASO', render: () => renderTableModule('ASO', 'Controle de exames ocupacionais, aptidao e vencimentos.', ['Funcionario', 'Tipo', 'Emissao', 'Validade', 'Resultado'], datasets.aso) },
  epi: { title: 'EPI', render: () => renderTableModule('EPI', 'Entrega, CA, quantidade e troca prevista de equipamentos de protecao.', ['Funcionario', 'EPI', 'CA', 'Quantidade', 'Troca prevista'], datasets.epi) },
  equipment: { title: 'Equipamentos', render: () => renderTableModule('Equipamentos', 'Inventario tecnico de maquinas e equipamentos industriais.', ['Equipamento', 'Tipo', 'Patrimonio', 'Capacidade', 'Status'], datasets.equipment) },
  cranes: { title: 'Guindastes / Munck', render: () => renderTableModule('Guindastes / Munck', 'Controle especial de equipamentos de elevacao e movimentacao.', ['Equipamento', 'Documento', 'Validade', 'Status', 'Obra'], datasets.cranes) },
  clients: { title: 'Clientes', render: () => renderTableModule('Clientes', 'Base comercial e operacional dos clientes atendidos.', ['Cliente', 'Segmento', 'Local', 'Equipe', 'Status'], datasets.clients) },
  projects: { title: 'Obras', render: () => renderTableModule('Obras', 'Acompanhamento de obras, status e pendencias documentais.', ['Obra', 'Cliente', 'Status', 'Progresso', 'Alertas'], datasets.projects) },
  documents: { title: 'ART / APR / Rigging', render: () => renderTableModule('ART / APR / Rigging', 'Documentos tecnicos com validade, obra e rastreabilidade.', ['Codigo', 'Documento', 'Obra', 'Validade', 'Status'], datasets.documents) },
  matrix: { title: 'Matriz de Competencia', render: () => renderTableModule('Matriz de Competencia', 'Aptidao por funcao, treinamento obrigatorio e pendencias.', ['Funcao', 'Requisitos', 'Aptos', 'Pendentes', 'Cobertura'], datasets.matrix) },
  reports: { title: 'Relatorios', render: renderReports },
  settings: { title: 'Configuracoes', render: renderSettings }
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

document.getElementById('consultButton').addEventListener('click', () => showCertificate('CFX-NR35-2026-001'));

document.getElementById('globalSearch').addEventListener('input', (event) => {
  const term = event.target.value.trim().toLowerCase();
  document.querySelectorAll('[data-search]').forEach((card) => {
    card.style.display = card.dataset.search.includes(term) ? '' : 'none';
  });
});

function setView(viewName) {
  const view = viewConfig[viewName] || viewConfig.dashboard;
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
    <section class="panel">
      <h2>Visao comercial da demo</h2>
      <div class="module-grid">
        ${Object.entries(viewConfig).filter(([key]) => key !== 'dashboard').map(([key, item]) => `
          <button class="module-tile" onclick="setView('${key}')">
            <strong>${item.title}</strong>
            <span>Abrir modulo demonstrativo</span>
          </button>
        `).join('')}
      </div>
    </section>
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
        <div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap">
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
      <div class="table-heading">
        <div>
          <p class="eyebrow dark">Rastreabilidade</p>
          <h2>Certificados demonstrativos</h2>
        </div>
        <button class="primary-button" onclick="window.print()">Imprimir / PDF</button>
      </div>
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

function renderTableModule(name, description, headers, rows) {
  return `
    <section class="module-hero">
      <div>
        <p class="eyebrow dark">Modulo demonstrativo</p>
        <h2>${name}</h2>
        <p>${description}</p>
      </div>
      <button class="primary-button" onclick="openDemoForm('${name}')">Novo registro</button>
    </section>
    <section class="report-sheet">
      <table>
        <thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}<th>Acao</th></tr></thead>
        <tbody>
          ${rows.map((row) => `
            <tr data-search="${searchText(row)}">
              ${row.map((cell) => `<td>${decorateCell(cell)}</td>`).join('')}
              <td><button class="outline-button" onclick="openRecord('${name}', '${encodeURIComponent(row[0])}')">Detalhes</button></td>
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
    <section class="module-hero">
      <div>
        <p class="eyebrow dark">Carteirinha digital NR</p>
        <h2>Frente e verso prontos para impressao</h2>
        <p>Modelo demonstrativo com foto, QR Code, validade, treinamentos autorizados e assinatura.</p>
      </div>
      <button class="primary-button" onclick="window.print()">Imprimir / PDF</button>
    </section>
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
  `;
}

function renderReports() {
  return `
    <section class="report-sheet">
      <div class="table-heading">
        <div>
          <p class="eyebrow dark">Relatorio gerencial</p>
          <h2>Conformidade por status</h2>
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

function renderSettings() {
  return `
    <section class="module-hero">
      <div>
        <p class="eyebrow dark">Configuracoes</p>
        <h2>Parametros da empresa demo</h2>
        <p>Area demonstrativa para mostrar personalizacao de marca, prazos de alerta e dados tecnicos.</p>
      </div>
      <button class="primary-button" onclick="openDemoForm('Configuracoes')">Salvar alteracoes</button>
    </section>
    <div class="data-grid">
      <article class="data-card"><h3>Empresa</h3><p>Conformix Demonstracao Industrial LTDA</p></article>
      <article class="data-card"><h3>Prazo de alerta</h3><p>30 dias antes do vencimento</p></article>
      <article class="data-card"><h3>Responsavel tecnico</h3><p>Eng. Vitor Augusto - CREA 5070256410</p></article>
    </div>
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
  const cert = certificates.find((item) => item.code === code) || certificates[0];
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

function openRecord(moduleName, encodedTitle) {
  openModal(`
    <p class="eyebrow dark">${moduleName}</p>
    <h2 style="margin:0 0 12px;font-size:30px">${decodeURIComponent(encodedTitle)}</h2>
    <p style="color:var(--muted);line-height:1.7">Tela demonstrativa de detalhes. Na versao contratada, aqui entram anexos, historico, edicao, auditoria e impressao.</p>
    <div class="report-sheet" style="margin-top:18px">
      <table>
        <tr><th>Status</th><td><span class="badge blue">Demo</span></td></tr>
        <tr><th>Rastreabilidade</th><td>Registro ficticio para apresentacao comercial</td></tr>
        <tr><th>Proxima acao</th><td>Personalizar modulo conforme necessidade do cliente</td></tr>
      </table>
    </div>
  `);
}

function openDemoForm(moduleName) {
  openModal(`
    <p class="eyebrow dark">${moduleName}</p>
    <h2 style="margin:0 0 12px;font-size:30px">Formulario demonstrativo</h2>
    <p style="color:var(--muted);line-height:1.7">Esta demo e somente visual. Na implantacao real, este formulario salva no banco de dados do cliente.</p>
    <div class="data-grid" style="grid-template-columns:1fr 1fr;margin-top:18px">
      <label class="form-field">Nome<input value="Registro de exemplo"></label>
      <label class="form-field">Status<input value="Ativo"></label>
      <label class="form-field full">Observacao<input value="Dados ficticios para apresentacao"></label>
    </div>
  `);
}

function decorateCell(value) {
  const text = String(value);
  if (['Ativo', 'Valido', 'Apto', 'Finalizada', '100%'].includes(text)) return `<span class="badge green">${text}</span>`;
  if (['Vencendo', 'Aguardando documentos', 'Manutencao'].includes(text) || text.includes('pendente')) return `<span class="badge orange">${text}</span>`;
  if (['Vencido', 'Critico'].includes(text)) return `<span class="badge red">${text}</span>`;
  return text;
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
