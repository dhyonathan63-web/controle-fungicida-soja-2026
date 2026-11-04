# Controle e Gestão de Pulverização - Safra Soja 2026/2027

Sistema completo para planejamento operacional, acompanhamento de campo, cálculo de calda/tanques e gestão de janelas de **Fungicidas, Inseticidas e Herbicidas** para os **4.391,81 hectares** (49 talhões e pivôs) em ordem oficial de plantio.

---

## 🚀 Como Abrir o Aplicativo

1. Basta dar **duplo clique no arquivo**:
   👉 **`Abrir_Painel_Soja_2026.bat`**
2. Ou abrir diretamente o arquivo **`index.html`** em qualquer navegador (Google Chrome, Edge, Safari, Firefox).
3. Também funciona perfeitamente no celular (basta copiar a pasta ou abrir o arquivo HTML).

---

## 📋 Funcionalidades Principais

### 1. Manejo de Fungicidas & Retornos Automáticos (+14 dias)
- Ao registrar a **data em que a aplicação foi feita**, o sistema calcula automaticamente a **data exata da próxima entrada** (+14 dias).
- Alertas visuais automáticos:
  - 🟢 **No prazo** (com contagem regressiva de dias)
  - 🟡 **Atenção** (&le; 3 dias para a aplicação)
  - 🔴 **Vencido** (prazo ultrapassado)

### 2. Visão Geral Completa (Ordem 1 a 48 + Gleba G-06)
- Tabela com todas as 49 áreas conferidas:
  - **Pivôs 002 a 010** (8 áreas)
  - **Glebas G-01 a G-40** (incluindo G-06 entre 44 e 45, G-22, G-23, G-24, G-30, G-31, G-32, etc.)
  - Soma matemática exata: **4.391,81 ha**.

### 3. Tolerâncias de Herbicidas por Variedade (Segurança Total)
- **IPRO / RR2 PRO** (GUEPARDO e OLIMPO): Tolerante apenas a **Glifosato**. Proibido Dicamba ou 2,4-D em pós-emergência.
- **XTEND / I2X** (72 I X 74, 78 IX 80 e NEO-700): Tolerante a **Glifosato + Dicamba**.
- **CONKESTA ENLIST** (74 K 75 e NEO-801): Tolerante a **Glifosato + Glufosinato de Amônio + 2,4-D Colina**.

### 4. Calculadora Integrada de Calda & Tanques
- Escolha uma gleba individual ou calcule para toda a área filtrada.
- Informando a **Vazão (L/ha)**, a **Capacidade do Tanque (Litros)** e a **Dose (L ou kg/ha)**, o sistema calcula:
  - Volume total de calda
  - Número de tanques cheios + volume do último tanque
  - Quantidade total de defensivo para a área
  - Quantidade de defensivo por tanque abastecido

### 5. Fichas de Campo Prontas para Impressão (PDF)
- **No próprio App**: Botão "Imprimir / PDF" formata o relatório limpo para gerar PDF ou imprimir.
- **Arquivo Dedicado**: `ficha_de_campo_impressao.html` já configurado em 2 páginas A4 formato paisagem, com espaço amplo para preenchimento a caneta e assinatura do operador.

### 6. Salvamento e Backup
- **100% Automático**: Tudo o que você digita é salvo no seu dispositivo (LocalStorage). Não precisa de internet no campo.
- **Exportar Excel (CSV)**: Gere relatórios para planilhas a qualquer momento.
- **Backup JSON**: Baixe e restaure seus dados em outro computador ou celular com 1 clique.
