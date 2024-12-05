document.getElementById('toggleTopics').addEventListener('click', function() {
    const topics = document.getElementById('topics');
    const content = document.getElementById('content');
    const informacoes = document.getElementById('informacoes');
    const jogos = document.getElementById('jogos');

    // Alterna a visibilidade da lista de tópicos
    if (topics.classList.contains('hidden')) {
        topics.classList.remove('hidden'); // Mostra os tópicos
        informacoes.style.display = 'none'; // Esconde as informações pessoais
        jogos.style.display = 'none'; // Esconde a seção de jogos
    } else {
        topics.classList.add('hidden'); // Esconde os tópicos
        informacoes.style.display = 'block'; // Mostra as informações pessoais
        jogos.style.display = 'block'; // Mostra a seção de jogos
        content.innerHTML = ''; // Limpa o conteúdo ao esconder os tópicos
    }
});

const topicContent = {
    resumo: `
        <h3>Resumo Executivo</h3>
        <p>A Trihex é uma empresa dedicada ao desenvolvimento de jogos indies, focada em criar experiências inovadoras e envolventes para os jogadores.</p>
        <p><strong>Público-alvo:</strong> Jogadores de todas as idades que buscam jogos independentes com narrativas criativas e jogabilidade única.</p>
        <p><strong>Objetivos principais:</strong> Alcançar a publicação de pelo menos dois jogos no primeiro ano e estabelecer uma base de fãs leal que dê feedbacks construtivos para melhorar a empresa.</p>
    `,
    
    analise: `
        <h3>Análise de Mercado</h3>
        <p><strong>Público-alvo:</strong> Nosso público-alvo são jovens adultos e gamers que apreciam jogos independentes e estão em busca de novas experiências.</p>
        <p><strong>Concorrentes:</strong> Não se tem um concorrente conhecido nessa área.</p>
        <p><strong>Diferenciais:</strong> Foco em narrativas profundas e jogabilidade inovadora, além de um forte engajamento com a comunidade através de feedback contínuo.</p>
    `,
    
    estrutura: `
        <h3>Estrutura do Negócio</h3>
        <p><strong>Nome do Negócio:</strong> Trihex</p>
        <p><strong>Localização:</strong> Virtual, com possibilidade de eventos presenciais para lançamento de jogos.</p>
        <p><strong>Serviços/Produtos:</strong> Desenvolvimento de jogos digitais, consultoria em game design e workshops para aspirantes a desenvolvedores.</p>
    `,
    
    operacional: `
        <h3>Plano Operacional</h3>
        <p><strong>Funcionamento:</strong> Funcionaremos de segunda a sexta, das 9h às 17h.</p>
        <p><strong>Etapas do serviço:</strong> Ideação, Desenvolvimento do protótipo, Testes com usuários e Lançamento do jogo.</p>
        <p><strong>Equipe:</strong> Composta por desenvolvedores, designers gráficos e um gerente de comunidade.</p>
    `,
    
    financeiro: `
        <h3>Plano Financeiro</h3>
        <p><strong>Investimentos iniciais:</strong> R$ 10.000 para software, hardware e marketing.</p>
        <p><strong>Preços dos serviços/produtos:</strong> Jogos vendidos a partir de R$ 30 cada.</p>
        <p><strong>Projeção de lucros:</strong> Estimamos um lucro de R$ 5.000 no primeiro mês após o lançamento do primeiro jogo.</p>
    `,
    
    marketing: `
        <h3>Estratégia de Marketing</h3>
        <p><strong>Dilulgação:</strong> Utilizaremos redes sociais como Instagram e Twitter, além de plataformas como Steam para promover nossos jogos.</p>
        <p><strong>Promoções:</strong> Ofereceremos um desconto de lançamento de 20% no primeiro mês após o lançamento.</p>
    `,
    
    metas: `
        <h3>Metas e Avaliação</h3>
        <p><strong>Metas a curto prazo (6 meses):</strong> Desenvolver um protótipo jogável e realizar testes beta com usuários.</p>
        <p><strong>Metas a longo prazo (1 ano):</strong> Lançar dois jogos completos e alcançar uma base de usuários ativa.</p>
        <p><strong>Monitoramento:</strong> Revisar mensalmente o progresso em relação às metas estabelecidas e ajustar estratégias conforme necessário.</p>
    `,
};

document.querySelectorAll('.topic').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        const topic = this.getAttribute('data-topic');
        
        // Exibe as informações do tópico na seção 'content'
        document.getElementById('content').innerHTML = topicContent[topic];
        
        // Scroll to content
        document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        
        // Esconde as informações pessoais e a seção de jogos
        document.getElementById('informacoes').style.display = 'none';
        document.getElementById('jogos').style.display = 'none';
    });
});