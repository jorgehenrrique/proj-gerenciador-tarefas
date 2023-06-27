# Projeto - Gerenciador de Tarefas

## Requisitos

**Breadcrumb**

- Deve exibir a rota atual na qual usuário está
- Deve ser exibido em todas as páginas

**Logo**

- Deve ir para página home
- Deve ser exibida em todas as páginas

**Home - Page**

- Deve exibir 3 colunas listando as tarefas por status listada,iniciada e finalizada
- Cada coluna deve exibir no máximo 3 cards de tarefas e o restante deve ser possível visualizar através de scroll. Cada coluna só pode listar os cards com status correto.
- Ao clicar no botão + no topo da coluna deve ir para página tarefas/cadastrar, na tela o campo status deve vir preenchido de acordo com a coluna na qual foi clicado. Clicando na 2 coluna deve vir com status preenchido como inicializada
- O campo de busca deve procurar todos cards listados e filtrá-los de acordo com o termo buscado, se o campo de busca estiver vazio deve exibir todos os cards.

**Cadastrar Tarefa - Page**

- Um formulário com seguintes campos deve ser preenchido nome, status e descrição
- O campo status deve ser um select com seguintes dados LISTADA, INICIALIZADA, FINALIZADA
  todos os campos são de preenchimento obrigatório.
- Ao finalizar o cadastro deve voltar para página /tarefas

**Editar Tarefa - Page**

- Um formulário com os seguintes campos deve ser exibido nome, status e descrição, eles devem vir preenchidos com as informações da tarefa e devem poder ser editados.
- Ao clicar em editar os dados deve ser salvos e deve voltar para página /tarefas

**Card resumo de tarefa**

- Deve exibir nome e descrição da tarefa
- Ao clicar no botão editar deve exibir 3 opções a lista de opções depende do status do card. Listado deve exibir: editar, iniciar e finalizar. Iniciado deve exibir: editar, listar e finalizar. Finalizado deve exibir: editar, listar e iniciar.
- Os botões: listar, iniciar e finalizar devem alterar o status da tarefa.
- O botão editar deve levar o usuário para a página de edição da tarefa. tarefas/editar/:id
- A descrição no card deve exibir um limite de 30 caracteres
