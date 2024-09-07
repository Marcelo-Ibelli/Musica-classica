let dados = [
    {
        título: "Wolfgang Amadeus Mozart",
        descrição: "Wolfgang Amadeus Mozart: Um Gênio da Música Clássica Wolfgang Amadeus Mozart, nascido em Salzburg, Áustria, em 1756, é considerado um dos maiores compositores de todos os tempos. Menino prodígio, Mozart demonstrou um talento musical excepcional desde a infância, compondo suas primeiras peças com apenas cinco anos de idade. Sua obra, extensa e variada, abrange sinfonias, concertos, óperas, sonatas e música de câmara, e é marcada por uma elegância, melodia e complexidade que o tornaram um ícone da música clássica. A genialidade de Mozart reside em sua capacidade de combinar a beleza e a emoção da música com uma estrutura formal impecável, deixando um legado que continua a encantar e inspirar músicos e ouvintes ao redor do mundo até os dias de hoje",
        link: "https://pt.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
        tags:"pianista piano teclado música musica musico músico ocidental classicismo clássico erudito erudita austria"
    },
    {
        título: "Ludwig van Beethoven",
        descrição: "Ludwig van Beethoven: O Titã da Música Clássica Ludwig van Beethoven, nascido em Bonn, Alemanha, em 1778, é considerado um dos compositores mais influentes da história da música. Apesar de ter perdido a audição no auge de sua carreira, Beethoven continuou a compor obras-primas que transcendem os limites da música clássica. Suas sinfonias, sonatas para piano e quartetos de cordas são marcadas por uma força dramática e uma profundidade emocional que o tornaram um ícone da música romântica. A obra de Beethoven é um testemunho da capacidade do espírito humano de superar as adversidades e criar obras de arte atemporais.",
        link: "https://pt.wikipedia.org/wiki/Ludwig_van_compositores",
        tags: "pianista piano teclado musica ocidental classico clássico erudito erudita romântica classicismo romantica romantico romantismo musico músico"
    },
    {
        título: "Johann Sebastian Bach",
        descrição: "Johann Sebastian Bach: O Pal da Música Ocidental Johann Sebastian Bach, nascido em Eisenach, Alemanha, em 1685, é considerado um dos maiores compositores barrocos de todos os tempos. Sua prolífica obra abrange todos os géneros musicais da época, incluindo cantatas, missas, fugas e concertos. A música de Bach é caracterizada por uma complexidade contrapontística e uma profunda espiritualidade, influenciando gerações de compositores após sua morte. Bach é frequentemente chamado de \"Pal da Música Ocidental\" por sua contribuição fundamental para o desenvolvimento da harmonia e da forma musical.",
        link: "https://pt.wikipedia.org/wiki.org/wiki/Johann_Sebastian_Bach",
        tags: "pianista orgão organ musica piano ocidental clássico classico erudito barroco erudita músico musico contraponto contrapontismo"
    },
    {
            título: "Niccolò Paganini",
            descrição: "Niccolò Paganini: O Mágico do Violino Niccolò Paganini, nascido em Gênova, Itália, em 1782, foi um violinista virtuoso e compositor italiano. Considerado um dos maiores violinistas de todos os tempos, Paganini era conhecido por sua técnica excepcional, que incluía a capacidade de tocar em posições extremas do violino e de produzir sons quase sobrenaturais. Sua virtuosidade e originalidade musical influenciaram gerações de violinistas e compositores.",
            link: "https://pt.wikipedia.org/wiki/Niccolò_Paganini",
            tags: "violinista violino musica composição composicao itália italia clássico clássico erudito erudita romantismo romantica romântico romantico músico musico"
        },
        {
            título: "Frédéric Chopin",
            descrição: "Frédéric Chopin: O Poeta do Piano Frédéric Chopin, nascido em Żelazowa Wola, Polônia, em 1810, foi um compositor e pianista polonês. Considerado um dos maiores compositores para piano de todos os tempos, Chopin compôs obras de grande beleza e lirismo, explorando as sonoridades e as possibilidades técnicas do piano de forma inovadora. Suas polonesas, mazurcas e valsas são algumas de suas obras mais conhecidas.",
            link: "https://pt.wikipedia.org/wiki/Frédéric_Chopin",
            tags: "pianista piano nocturne teclado musica polonia polonês clássico classico erudito erudita romântico romantico romantismo romantica musico músico"
        },
        {
            título: "Franz Liszt",
            descrição: "Franz Liszt: O Virtuoso Romântico Franz Liszt, nascido em Raiding, Hungria, em 1811, foi um pianista virtuoso, compositor e maestro húngaro. Considerado um dos maiores virtuosos de piano de sua época, Liszt desenvolveu uma técnica pianística extraordinária e compôs obras de grande virtuosismo e originalidade. Liszt foi uma figura central no desenvolvimento da música romântica e teve uma grande influência em compositores posteriores.",
            link: "https://pt.wikipedia.org/wiki/Franz_Liszt",
            tags: "pianista piano teclado musica classico clássico erudito erudita romantismo comantico romantica romântico músico musico"
        },
        {
            título: "Johannes Brahms",
            descrição: "Johannes Brahms: O Sucessor de Beethoven Johannes Brahms, nascido em Hamburgo, Alemanha, em 1833, é considerado um dos maiores compositores do período romântico. Sua música, marcada por uma profunda melancolia e uma complexidade formal, é frequentemente comparada à de Beethoven. Brahms compôs sinfonias, concertos, sonatas e música de câmara, deixando um legado que o coloca entre os maiores compositores da história.",
            link: "https://pt.wikipedia.org/wiki/Johannes_Brahms",
            tags: "pianista piano teclado musica musico ocidental romantismo romantico romantica erudito erudita"
        },
        {
            título: "Franz Schubert",
            descrição: "Franz Schubert: O Mestre da Lied Franz Schubert, nascido em Viena, Áustria, em 1797, é considerado um dos maiores compositores de lieder da história da música. Seus lieder, canções para voz e piano, são caracterizados por melodias líricas e poéticas que exploram uma ampla gama de emoções. Além dos lieder, Schubert compôs sinfonias, sonatas, missas e óperas, deixando um legado que o coloca entre os maiores compositores do romantismo.",
            link: "https://pt.wikipedia.org/wiki/Franz_Schubert",
            tags: "compositor piano vocal musico musica romantica romantismo erudito erudita austria"
        },
        {
            título: "Piotr Ilitch Tchaikovsky",
            descrição: "Piotr Ilitch Tchaikovsky: O Poeta da Música Russa Piotr Ilitch Tchaikovsky, nascido em Vótkinsk, Rússia, em 1840, é um dos compositores russos mais famosos e influentes. Sua música, rica em melodias cativantes e harmonias vibrantes, evoca paisagens e emoções intensas. Tchaikovsky compôs balés como 'O Lago dos Cisnes' e 'O Quebra-Nozes', além de sinfonias, concertos e óperas, deixando um legado que o coloca entre os maiores compositores românticos.",
            link: "https://pt.wikipedia.org/wiki/Piotr_Ilitch_Tchaikovsky",
            tags: "compositor russo musico balé sinfonia concerto opera romantico piano romantismo melodia harmonia"
        },
        {
            título: "Sergei Rachmaninoff",
            descrição: "Sergei Rachmaninoff: O Último dos Românticos Sergei Rachmaninoff, nascido em Oneg, Rússia, em 1873, é considerado um dos últimos grandes compositores do período romântico. Sua música, marcada por uma sonoridade rica e virtuosística, é frequentemente associada a um romantismo tardio. Rachmaninoff era um pianista virtuose e compôs obras para piano que se tornaram clássicos do repertório, como os Concertos para Piano.",
            link: "https://pt.wikipedia.org/wiki/Sergei_Rachmaninoff",
            tags: "compositor russo pianista piano teclado musico virtuoso concerto romantismo romantico"
        },
        {
            título: "Gioachino Rossini",
            descrição: "Gioachino Rossini: O Mestre da Ópera Cômica Gioachino Rossini, nascido em Pesaro, Itália, em 1792, é um dos compositores de ópera mais importantes do século XIX. Suas óperas, como 'O Barbeiro de Sevilha' e 'A Cinderela', são conhecidas por suas melodias cativantes e humor. Rossini também compôs obras sacras e instrumentais, deixando um legado que o coloca entre os maiores compositores italianos.",
            link: "https://pt.wikipedia.org/wiki/Gioachino_Rossini",
            tags: "compositor italiano ópera melodia musico humor barroco classicismo romantismo italia canto microfone canto classico clássico"
        },
        {
            título: "Fábio Lima",
            descrição: "Fábio Lima: Um dos maiores violonistas brasileiros da atualidade, Fábio Lima se destaca por suas interpretações virtuosísticas e expressivas de obras clássicas e contemporâneas. Sua discografia abrange um amplo repertório, desde Bach até compositores brasileiros como Villa-Lobos. Além de sua carreira solo, Fábio Lima é um dedicado professor e realiza masterclasses em diversos países.",
            link: "https://pt.wikipedia.org/wiki/Fábio_Lima",
            tags: "violonista brasileiro brasil brazil clássico choro chorinho violão violao fabio contemporâneo brasil musico bach villa-lobos"
        },
        {
            título: "Heitor Villa-Lobos",
            descrição: "Heitor Villa-Lobos: O Nacionalista Brasileiro Heitor Villa-Lobos, um dos maiores compositores brasileiros de todos os tempos, revolucionou a música erudita brasileira ao incorporar elementos da música popular brasileira em suas obras. Suas composições para violão, como as 'Chôros' e as 'Bachianas Brasileiras', são mundialmente conhecidas e admiradas. Villa-Lobos também compôs óperas, sinfonias e outras obras de grande porte.",
            link: "https://pt.wikipedia.org/wiki/Heitor_Villa-Lobos",
            tags: "compositor brasileiro brasil brazil violão choro chorinho bachianas violao brasileiras brasil musico nacionalismo música popular brasileira"
        },
        {
            título: "Francisco Tárrega",
            descrição: "Francisco Tárrega: O Pai do Violão Clássico Francisco Tárrega, nascido na Espanha, é considerado um dos pais do violão clássico moderno. Suas composições e arranjos elevaram o status do violão como instrumento solo e influenciaram gerações de violonistas. Tárrega é conhecido por suas obras como 'Gran Vals', 'Recuerdos de la Alhambra' e 'Lágrima'.",
            link: "https://pt.wikipedia.org/wiki/Francisco_Tárrega",
            tags: "violonista espanhol clássico espanha españa gran vals violao violão recuerdos de la alhambra lágrima musico"
        },
        {
            título: "Robson Miguel",
            descrição: "Robson Miguel: Um dos principais violonistas brasileiros da atualidade, Robson Miguel é reconhecido por suas interpretações virtuosísticas e expressivas de obras clássicas e populares. Seus arranjos e composições originais, que mesclam elementos da música brasileira com influências de outros estilos, o tornaram um artista de destaque no cenário musical brasileiro.",
            link: "https://pt.wikipedia.org/wiki/Robson_Miguel",
            tags: "violonista brasileiro brasil brazil violão choro musico violao chorinho clássico popular arranjos composições"
        },
        {
            título: "Dilermando Reis",
            descrição: "Dilermando Reis: Lenda do Violão Brasileiro Dilermando Reis é considerado um dos maiores violonistas brasileiros de todos os tempos. Sua obra, marcada por um profundo lirismo e uma técnica impecável, influenciou gerações de músicos. Seus choros, valsas e polcas são verdadeiros clássicos da música brasileira.",
            link: "https://pt.wikipedia.org/wiki/Dilermando_Reis",
            tags: "violonista brasileiro brazil brasil choro chorinho musico violao violão valsa polca música brasileira"
        }
    ];