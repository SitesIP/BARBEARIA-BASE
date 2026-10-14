// ===== Generic barbershop home page (Aba Início) =====
import store from '../data/store.js';
import { renderHeader, initHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { formatCurrency, initScrollReveal, getServiceSvg } from '../utils/helpers.js';

const HUB_ICONS = {
  servicos: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="8.5" y1="8.5" x2="20" y2="20"/><line x1="8.5" y1="15.5" x2="20" y2="4"/></svg>`,
  profissionais: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  agendamentos: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 14v4M10 16h4"/></svg>`,
  contato: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  arrowRight: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
};

const BARBER_AVATAR_ICON = `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

export function renderHome() {
  const services = store.getServices().slice(0, 4); // 4 principais serviços em linha única
  const barbers = store.getBarbers();

  return `
    ${renderHeader()}

    <!-- Hero Section (Mobile-First & Dark Theme) -->
    <section class="hero hero-modern" id="hero">
      <div class="hero-bg-media" aria-hidden="true">
        <div class="hero-bg-overlay"></div>
      </div>

      <div class="container hero-container-modern">
        <!-- Lado Esquerdo: Textos, Badges e CTA -->
        <div class="hero-col-left">
          <div class="hero-badge-pill green-badge">
            <span class="hero-badge-dot"></span>
            <span>BEM-VINDO(A)</span>
          </div>

          <div class="hero-sub-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
              <line x1="8.5" y1="8.5" x2="20" y2="20"/><line x1="8.5" y1="15.5" x2="20" y2="4"/>
            </svg>
            <span>BARBEARIA AGENDAMENTOS</span>
          </div>

          <h1 class="hero-title-modern">
            BARBEARIA<br>AGENDAMENTOS
          </h1>

          <p class="hero-desc-modern">
            Estilo clássico, corte moderno e atendimento de excelência. Agende seu horário sem complicações.
          </p>

          <div class="hero-actions-modern">
            <a href="#/agendar" class="hero-btn-cta" id="hero-cta">
              <span>Clique no botão para agendar</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <!-- Lado Direito: Composição de ferramentas premium desvanecida e suave -->
        <div class="hero-col-right" aria-hidden="true">
          <div class="hero-feathered-showcase">
            <img src="/images/hero-tools.jpg" alt="Equipamentos Premium de Barbearia" class="hero-feathered-img" />
            <div class="hero-feather-mask"></div>
          </div>
        </div>
      </div>

      <!-- Faixas Diagonais Inferiores com Rolagem Contínua (Marquee Grosso) -->
      <div class="hero-marquee-wrapper" aria-hidden="true">
        <!-- Faixa 1 (Inclinada suavemente) -->
        <div class="hero-marquee-strip strip-1">
          <div class="marquee-track track-left">
            <span>BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; BARBEARIA AGENDAMENTOS &nbsp;&bull;&nbsp; EXPERIÊNCIA EXCLUSIVA &nbsp;&bull;&nbsp; BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; </span>
            <span>BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; BARBEARIA AGENDAMENTOS &nbsp;&bull;&nbsp; EXPERIÊNCIA EXCLUSIVA &nbsp;&bull;&nbsp; BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; </span>
          </div>
        </div>

        <!-- Faixa 2 (Inclinada na direção oposta - Cruzando) -->
        <div class="hero-marquee-strip strip-2">
          <div class="marquee-track track-right">
            <span>BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; BARBEARIA AGENDAMENTOS &nbsp;&bull;&nbsp; EXPERIÊNCIA EXCLUSIVA &nbsp;&bull;&nbsp; BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; </span>
            <span>BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; BARBEARIA AGENDAMENTOS &nbsp;&bull;&nbsp; EXPERIÊNCIA EXCLUSIVA &nbsp;&bull;&nbsp; BARBA, CABELO E BIGODE &nbsp;&bull;&nbsp; PLANOS DE ASSINATURA &nbsp;&bull;&nbsp; </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Navigation Action Cards (Blocos de Destaque Estilo Cards) -->
    <section class="section-action-blocks" id="action-blocks">
      <div class="container">
        <div class="action-blocks-grid">
          <!-- Card 1: Agende seu horário -->
          <a href="#/agendar" class="action-block-card card-booking">
            <div class="action-block-watermark" aria-hidden="true">AGENDE</div>
            <div class="action-block-content">
              <span class="action-block-pill">Horário Online</span>
              <h3 class="action-block-title">Agende<br>seu horário</h3>
              <p class="action-block-sub">na Barbearia Agendamentos</p>
              <div class="action-block-btn">
                <span>Clique para agendar</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
            <div class="action-block-visual" aria-hidden="true">
              <div class="visual-clipper-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="3"></rect>
                  <line x1="9" y1="6" x2="15" y2="6"></line>
                  <line x1="9" y1="10" x2="15" y2="10"></line>
                  <circle cx="12" cy="16" r="1.5"></circle>
                </svg>
              </div>
            </div>
          </a>

          <!-- Card 2: Falar no WhatsApp -->
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" class="action-block-card card-whatsapp">
            <div class="action-block-watermark" aria-hidden="true">WHATS</div>
            <div class="action-block-content">
              <span class="action-block-pill whatsapp-pill">Atendimento Direto</span>
              <h3 class="action-block-title">Falar<br>no Whats</h3>
              <p class="action-block-sub">da Barbearia Agendamentos</p>
              <div class="action-block-btn">
                <span>Clique para falar</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
            <div class="action-block-visual" aria-hidden="true">
              <div class="visual-whatsapp-badge">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.181-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
                </svg>
              </div>
            </div>
          </a>

          <!-- Card 3: Nossos Serviços -->
          <a href="#/servicos" class="action-block-card card-services">
            <div class="action-block-watermark" aria-hidden="true">SERVIÇOS</div>
            <div class="action-block-content">
              <span class="action-block-pill">Catálogo Completo</span>
              <h3 class="action-block-title">Nossos<br>Serviços</h3>
              <p class="action-block-sub">da Barbearia Agendamentos</p>
              <div class="action-block-btn">
                <span>Ver tabela de preços</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
            <div class="action-block-visual" aria-hidden="true">
              <div class="visual-scissors-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                  <line x1="8.5" y1="8.5" x2="20" y2="20"/><line x1="8.5" y1="15.5" x2="20" y2="4"/>
                </svg>
              </div>
            </div>
          </a>

          <!-- Card 4: Localização / Navegar até a barbearia -->
          <a href="#/contato" class="action-block-card card-location">
            <div class="action-block-watermark" aria-hidden="true">MAPA</div>
            <div class="action-block-content">
              <span class="action-block-pill">Como Chegar</span>
              <h3 class="action-block-title">Nossa<br>Localização</h3>
              <p class="action-block-sub">Navegar até a barbearia via GPS</p>
              <div class="action-block-btn">
                <span>Navegar no GPS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
            <div class="action-block-visual" aria-hidden="true">
              <div class="visual-map-badge">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3" fill="#FF4D4D"></circle>
                </svg>
              </div>
            </div>
          </a>

          <!-- Card 5: Avalie no Google ou Instagram -->
          <a href="#/contato" class="action-block-card card-social">
            <div class="action-block-watermark" aria-hidden="true">INSTA</div>
            <div class="action-block-content">
              <span class="action-block-pill">Redes Sociais</span>
              <h3 class="action-block-title">Instagram &<br>Avaliações</h3>
              <p class="action-block-sub">Siga e confira nosso trabalho</p>
              <div class="action-block-btn">
                <span>Clique para acessar</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
            <div class="action-block-visual" aria-hidden="true">
              <div class="visual-insta-badge">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Services Preview (Alta densidade em linha única) -->
    <section class="section services-preview-section" id="services-preview-section">
      <div class="container">
        <div class="section-header section-header-compact reveal">
          <h2>Nossos Serviços</h2>
          <p>Conheça alguns dos nossos principais serviços.</p>
        </div>
        <div class="services-compact-list">
          ${services.map((svc, i) => `
            <div class="service-row-card reveal" style="transition-delay: ${i * 0.05}s">
              <div class="service-row-icon">
                ${getServiceSvg(svc.name, svc.icon)}
              </div>
              <div class="service-row-info">
                <h4 class="service-row-title">${svc.name}</h4>
                <p class="service-row-desc">${svc.description}</p>
              </div>
              <div class="service-row-price">
                <span>${formatCurrency(svc.price)}</span>
              </div>
              <div class="service-row-action">
                <a href="#/agendar" class="btn btn-primary btn-xs btn-service-select">Selecionar</a>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: var(--space-md);" class="reveal">
          <a href="#/servicos" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
            Ver Todos os Serviços ${HUB_ICONS.arrowRight}
          </a>
        </div>
      </div>
    </section>

    <!-- Barbers Preview (Side-by-side 50%/50% no Mobile) -->
    <section class="section barbers-preview-section" id="barbers-section">
      <div class="container">
        <div class="section-header section-header-compact reveal">
          <h2>Nossos Profissionais</h2>
          <p>Equipe qualificada para cuidar do seu estilo.</p>
        </div>
        <div class="barbers-grid-side-by-side reveal">
          ${barbers.map((barber, i) => `
            <div class="barber-compact-card" style="transition-delay: ${i * 0.1}s">
              <div class="barber-avatar-wrapper">
                <div class="barber-avatar-placeholder" aria-hidden="true">
                  ${BARBER_AVATAR_ICON}
                </div>
              </div>
              <div class="barber-compact-info">
                <h4 class="barber-compact-name">${barber.name}</h4>
                <p class="barber-compact-specialty">${barber.specialty}</p>
                <a href="#/agendar" class="btn btn-primary btn-xs btn-choose-barber">Escolher</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section" id="cta-section">
      <div class="container reveal">
        <h2>Pronto para transformar seu visual?</h2>
        <p>Agende seu horário com antecedência e garanta seu atendimento.</p>
        <a href="#/agendar" class="btn btn-primary btn-lg">Agendar Meu Horário</a>
      </div>
    </section>

    ${renderFooter()}
  `;
}

export function initHome() {
  initHeader();
  initScrollReveal();
}
