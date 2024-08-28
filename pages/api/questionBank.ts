import QuestionModel from "../../model/question";
import ResponseModel from "../../model/response";

const questions: QuestionModel[] = [
    new QuestionModel(1, 'Qual animal transmite a Doença de Chagas?', [
        ResponseModel.wrong('Abelha'),
        ResponseModel.wrong('Barata'),
        ResponseModel.wrong('Pulga'),
        ResponseModel.right('Barbeiro')
    ]),

    new QuestionModel(2, 'Qual fruto é conhecido no Norte como "jerimum"?', [
        ResponseModel.wrong('Caju'),
        ResponseModel.wrong('Côco'),
        ResponseModel.wrong('Chuchu'),
        ResponseModel.right('Abóbora')
    ]),

    new QuestionModel(3, 'Qual é o coletivo de cães?', [
        ResponseModel.wrong('Manada'),
        ResponseModel.wrong('Alcateia'),
        ResponseModel.wrong('Rebanho'),
        ResponseModel.right('Matilha')
    ]),

    new QuestionModel(4, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ResponseModel.wrong('Equilátero'),
        ResponseModel.wrong('Isósceles'),
        ResponseModel.wrong('Triângulo-retângulo'),
        ResponseModel.right('Escaleno')
    ]),

    // Matemática
    new QuestionModel(5, 'Quanto é 5 + 7?', [
        ResponseModel.wrong('10'),
        ResponseModel.wrong('11'),
        ResponseModel.wrong('13'),
        ResponseModel.right('12')
    ]),

    new QuestionModel(6, 'Qual é o valor da raiz quadrada de 81?', [
        ResponseModel.wrong('7'),
        ResponseModel.wrong('8'),
        ResponseModel.wrong('10'),
        ResponseModel.right('9')
    ]),

    new QuestionModel(7, 'Quantos lados tem um octógono?', [
        ResponseModel.wrong('6'),
        ResponseModel.wrong('7'),
        ResponseModel.wrong('9'),
        ResponseModel.right('8')
    ]),

    // Biologia
    new QuestionModel(8, 'Qual é a função da hemoglobina no sangue?', [
        ResponseModel.wrong('Regular a temperatura corporal'),
        ResponseModel.wrong('Coagular o sangue'),
        ResponseModel.wrong('Produzir glóbulos brancos'),
        ResponseModel.right('Transportar oxigênio')
    ]),

    new QuestionModel(9, 'Qual parte da célula é responsável pela produção de energia?', [
        ResponseModel.wrong('Núcleo'),
        ResponseModel.wrong('Ribossomos'),
        ResponseModel.wrong('Cloroplastos'),
        ResponseModel.right('Mitocôndrias')
    ]),

    // Química
    new QuestionModel(10, 'Qual elemento químico tem o símbolo "Fe"?', [
        ResponseModel.wrong('Ferro'),
        ResponseModel.wrong('Flúor'),
        ResponseModel.wrong('Fósforo'),
        ResponseModel.right('Ferro')
    ]),

    new QuestionModel(11, 'Qual é a fórmula química da água?', [
        ResponseModel.wrong('CO2'),
        ResponseModel.wrong('H2'),
        ResponseModel.wrong('O2'),
        ResponseModel.right('H2O')
    ]),

    // Física
    new QuestionModel(12, 'Qual é a unidade de medida de força no Sistema Internacional de Unidades (SI)?', [
        ResponseModel.wrong('Watt'),
        ResponseModel.wrong('Joule'),
        ResponseModel.wrong('Pascal'),
        ResponseModel.right('Newton')
    ]),

    new QuestionModel(13, 'Qual é a velocidade da luz no vácuo?', [
        ResponseModel.wrong('300.000 km/s'),
        ResponseModel.wrong('3.000 km/s'),
        ResponseModel.wrong('30.000 km/s'),
        ResponseModel.right('299.792 km/s')
    ]),

    // Ciências
    new QuestionModel(14, 'O que é um eclipse solar?', [
        ResponseModel.wrong('Quando a Terra passa entre o Sol e a Lua'),
        ResponseModel.wrong('Quando a Lua se move para fora da sombra da Terra'),
        ResponseModel.wrong('Quando o Sol é obscurecido por um meteoro'),
        ResponseModel.right('Quando a Lua passa entre a Terra e o Sol')
    ]),

    new QuestionModel(15, 'Qual é a camada mais externa da Terra?', [
        ResponseModel.wrong('Manto'),
        ResponseModel.wrong('Núcleo externo'),
        ResponseModel.wrong('Núcleo interno'),
        ResponseModel.right('Crosta')
    ]),

    // Astronomia
    new QuestionModel(16, 'Qual é o maior planeta do sistema solar?', [
        ResponseModel.wrong('Terra'),
        ResponseModel.wrong('Marte'),
        ResponseModel.wrong('Saturno'),
        ResponseModel.right('Júpiter')
    ]),

    new QuestionModel(17, 'Quantas fases a Lua tem durante um ciclo lunar?', [
        ResponseModel.wrong('4'),
        ResponseModel.wrong('6'),
        ResponseModel.wrong('8'),
        ResponseModel.right('8')
    ]),

    // Atualidades
    new QuestionModel(18, 'Qual país sediou as Olimpíadas de 2020?', [
        ResponseModel.wrong('Brasil'),
        ResponseModel.wrong('China'),
        ResponseModel.wrong('Austrália'),
        ResponseModel.right('Japão')
    ]),

    new QuestionModel(19, 'Qual é o atual secretário-geral da ONU (em 2024)?', [
        ResponseModel.wrong('Ban Ki-moon'),
        ResponseModel.wrong('Kofi Annan'),
        ResponseModel.wrong('Boutros Boutros-Ghali'),
        ResponseModel.right('António Guterres')
    ]),

    // História
    new QuestionModel(20, 'Quem foi o primeiro presidente dos Estados Unidos?', [
        ResponseModel.wrong('Abraham Lincoln'),
        ResponseModel.wrong('Thomas Jefferson'),
        ResponseModel.wrong('John Adams'),
        ResponseModel.right('George Washington')
    ]),

    new QuestionModel(21, 'Em que ano a Primeira Guerra Mundial começou?', [
        ResponseModel.wrong('1912'),
        ResponseModel.wrong('1916'),
        ResponseModel.wrong('1919'),
        ResponseModel.right('1914')
    ]),

    // Geografia
    new QuestionModel(22, 'Qual é o rio mais longo do mundo?', [
        ResponseModel.wrong('Rio Amazonas'),
        ResponseModel.wrong('Rio Mississippi'),
        ResponseModel.wrong('Rio Yangtzé'),
        ResponseModel.right('Rio Nilo')
    ]),

    new QuestionModel(23, 'Qual é a capital do Canadá?', [
        ResponseModel.wrong('Toronto'),
        ResponseModel.wrong('Vancouver'),
        ResponseModel.wrong('Montreal'),
        ResponseModel.right('Ottawa')
    ]),

    // Música
    new QuestionModel(24, 'Quem é o compositor da famosa obra "Für Elise"?', [
        ResponseModel.wrong('Wolfgang Amadeus Mozart'),
        ResponseModel.wrong('Johann Sebastian Bach'),
        ResponseModel.wrong('Frédéric Chopin'),
        ResponseModel.right('Ludwig van Beethoven')
    ]),

    new QuestionModel(25, 'Qual é o nome do álbum de estreia dos Beatles?', [
        ResponseModel.wrong('Help!'),
        ResponseModel.wrong('Abbey Road'),
        ResponseModel.wrong('Let It Be'),
        ResponseModel.right('Please Please Me')
    ]),

    // Inglês
    new QuestionModel(26, 'What is the past tense of the verb "to run"?', [
        ResponseModel.wrong('Runned'),
        ResponseModel.wrong('Running'),
        ResponseModel.wrong('Raned'),
        ResponseModel.right('Ran')
    ]),

    new QuestionModel(27, 'How do you say "amarelo" in English?', [
        ResponseModel.wrong('Green'),
        ResponseModel.wrong('Red'),
        ResponseModel.wrong('Blue'),
        ResponseModel.right('Yellow')
    ]),

    // Língua Portuguesa
    new QuestionModel(28, 'Qual é o plural de "cão"?', [
        ResponseModel.wrong('Cãos'),
        ResponseModel.wrong('Cães'),
        ResponseModel.wrong('Cãões'),
        ResponseModel.right('Cães')
    ]),

    new QuestionModel(29, 'Qual palavra está corretamente escrita?', [
        ResponseModel.wrong('Excessão'),
        ResponseModel.wrong('Intereço'),
        ResponseModel.wrong('Impreção'),
        ResponseModel.right('Exceção')
    ]),
    
    new QuestionModel(30, 'Qual é o próximo número na sequência: 2, 4, 8, 16?', [
        ResponseModel.wrong('24'),
        ResponseModel.wrong('32'),
        ResponseModel.wrong('20'),
        ResponseModel.right('32')
    ]),

    new QuestionModel(31, 'Quanto é 12 dividido por 3?', [
        ResponseModel.wrong('3'),
        ResponseModel.wrong('5'),
        ResponseModel.wrong('6'),
        ResponseModel.right('4')
    ]),

    new QuestionModel(32, 'Qual é o ângulo interno de um triângulo equilátero?', [
        ResponseModel.wrong('60°'),
        ResponseModel.wrong('90°'),
        ResponseModel.wrong('45°'),
        ResponseModel.right('60°')
    ]),

    // Biologia
    new QuestionModel(33, 'Qual é o principal órgão responsável pela respiração em humanos?', [
        ResponseModel.wrong('Fígado'),
        ResponseModel.wrong('Rins'),
        ResponseModel.wrong('Coração'),
        ResponseModel.right('Pulmões')
    ]),

    new QuestionModel(34, 'Como se chama o processo pelo qual as plantas produzem seu próprio alimento?', [
        ResponseModel.wrong('Respiração'),
        ResponseModel.wrong('Digestão'),
        ResponseModel.wrong('Excreção'),
        ResponseModel.right('Fotossíntese')
    ]),

    // Química
    new QuestionModel(35, 'Qual é o elemento químico com o símbolo "Na"?', [
        ResponseModel.wrong('Nitrogênio'),
        ResponseModel.wrong('Nítro'),
        ResponseModel.wrong('Níquel'),
        ResponseModel.right('Sódio')
    ]),

    new QuestionModel(36, 'O que é a tabela periódica?', [
        ResponseModel.wrong('Um livro de química'),
        ResponseModel.wrong('Uma tabela de elementos químicos'),
        ResponseModel.wrong('Uma tabela de reações químicas'),
        ResponseModel.right('Uma tabela que organiza os elementos químicos')
    ]),

    // Física
    new QuestionModel(37, 'O que é a força de gravidade?', [
        ResponseModel.wrong('Uma força que afasta os objetos'),
        ResponseModel.wrong('Uma força que gera calor'),
        ResponseModel.wrong('Uma força que acelera a luz'),
        ResponseModel.right('Uma força que atrai os objetos para o centro da Terra')
    ]),

    new QuestionModel(38, 'Qual é a unidade de medida da massa no Sistema Internacional de Unidades?', [
        ResponseModel.wrong('Liter'),
        ResponseModel.wrong('Metro'),
        ResponseModel.wrong('Joule'),
        ResponseModel.right('Kilograma')
    ]),

    // Ciências
    new QuestionModel(39, 'Qual é o processo pelo qual a água se transforma em vapor?', [
        ResponseModel.wrong('Condensação'),
        ResponseModel.wrong('Solidificação'),
        ResponseModel.wrong('Fusão'),
        ResponseModel.right('Evaporação')
    ]),

    new QuestionModel(40, 'O que é o ciclo da água?', [
        ResponseModel.wrong('O processo de fotossíntese'),
        ResponseModel.wrong('O processo de digestão'),
        ResponseModel.wrong('O processo de respiração'),
        ResponseModel.right('O movimento contínuo da água entre a superfície da Terra e a atmosfera')
    ]),

    // Astronomia
    new QuestionModel(41, 'Qual é o nome da galáxia onde está localizado o nosso sistema solar?', [
        ResponseModel.wrong('Andrômeda'),
        ResponseModel.wrong('Órion'),
        ResponseModel.wrong('Triângulo'),
        ResponseModel.right('Via Láctea')
    ]),

    new QuestionModel(42, 'Qual planeta é conhecido como o "planeta vermelho"?', [
        ResponseModel.wrong('Júpiter'),
        ResponseModel.wrong('Vênus'),
        ResponseModel.wrong('Saturno'),
        ResponseModel.right('Marte')
    ]),

    // Atualidades
    new QuestionModel(43, 'Quem é o presidente dos EUA em 2024?', [
        ResponseModel.wrong('Donald Trump'),
        ResponseModel.wrong('Barack Obama'),
        ResponseModel.wrong('Joe Biden'),
        ResponseModel.right('Joe Biden')
    ]),

    new QuestionModel(44, 'Qual foi o país anfitrião da Copa do Mundo FIFA de 2022?', [
        ResponseModel.wrong('Brasil'),
        ResponseModel.wrong('Alemanha'),
        ResponseModel.wrong('França'),
        ResponseModel.right('Catar')
    ]),

    // História
    new QuestionModel(45, 'Quem foi o imperador romano que adotou o cristianismo como religião oficial do império?', [
        ResponseModel.wrong('Júlio César'),
        ResponseModel.wrong('Augusto'),
        ResponseModel.wrong('Nero'),
        ResponseModel.right('Constantino')
    ]),

    new QuestionModel(46, 'Qual foi a primeira colônia inglesa estabelecida na América do Norte?', [
        ResponseModel.wrong('Nova York'),
        ResponseModel.wrong('Filadélfia'),
        ResponseModel.wrong('Jamestown'),
        ResponseModel.right('Jamestown')
    ]),

    // Geografia
    new QuestionModel(47, 'Qual é o maior deserto do mundo?', [
        ResponseModel.wrong('Deserto da Arábia'),
        ResponseModel.wrong('Deserto de Gobi'),
        ResponseModel.wrong('Deserto do Saara'),
        ResponseModel.right('Antártica')
    ]),

    new QuestionModel(48, 'Qual é a capital da Austrália?', [
        ResponseModel.wrong('Sydney'),
        ResponseModel.wrong('Melbourne'),
        ResponseModel.wrong('Brisbane'),
        ResponseModel.right('Canberra')
    ]),

    // Música
    new QuestionModel(49, 'Qual é o nome do cantor conhecido como o "Rei do Pop"?', [
        ResponseModel.wrong('Elvis Presley'),
        ResponseModel.wrong('Prince'),
        ResponseModel.wrong('David Bowie'),
        ResponseModel.right('Michael Jackson')
    ]),

    new QuestionModel(50, 'Qual banda lançou o álbum "Dark Side of the Moon"?', [
        ResponseModel.wrong('Led Zeppelin'),
        ResponseModel.wrong('The Rolling Stones'),
        ResponseModel.wrong('The Beatles'),
        ResponseModel.right('Pink Floyd')
    ]),

    // Inglês
    new QuestionModel(51, 'How do you say "livro" in English?', [
        ResponseModel.wrong('Notebook'),
        ResponseModel.wrong('Magazine'),
        ResponseModel.wrong('Newspaper'),
        ResponseModel.right('Book')
    ]),

    new QuestionModel(52, 'What is the opposite of "happy"?', [
        ResponseModel.wrong('Excited'),
        ResponseModel.wrong('Content'),
        ResponseModel.wrong('Joyful'),
        ResponseModel.right('Sad')
    ]),

    // Língua Portuguesa
    new QuestionModel(53, 'Qual é o sujeito da frase: "O aluno estuda para a prova"?', [
        ResponseModel.wrong('Estuda'),
        ResponseModel.wrong('Prova'),
        ResponseModel.wrong('Para a prova'),
        ResponseModel.right('O aluno')
    ]),

    new QuestionModel(54, 'Como se chama a figura de linguagem que compara dois elementos usando "como" ou "tal qual"?', [
        ResponseModel.wrong('Metáfora'),
        ResponseModel.wrong('Metonímia'),
        ResponseModel.wrong('Antítese'),
        ResponseModel.right('Símile')
    ]),

    // Matemática
    new QuestionModel(55, 'Qual é a área de um quadrado com lado de 5 cm?', [
        ResponseModel.wrong('10 cm²'),
        ResponseModel.wrong('15 cm²'),
        ResponseModel.wrong('20 cm²'),
        ResponseModel.right('25 cm²')
    ]),

    new QuestionModel(56, 'Quanto é 7 x 6?', [
        ResponseModel.wrong('36'),
        ResponseModel.wrong('42'),
        ResponseModel.wrong('48'),
        ResponseModel.right('42')
    ]),

    new QuestionModel(57, 'Qual é a fórmula para calcular a área de um triângulo?', [
        ResponseModel.wrong('Base x Altura'),
        ResponseModel.wrong('Base x Altura x 2'),
        ResponseModel.wrong('Base x Altura / 2'),
        ResponseModel.right('Base x Altura / 2')
    ]),

    // Biologia
    new QuestionModel(58, 'Qual é o processo pelo qual as células se dividem para formar duas células filhas?', [
        ResponseModel.wrong('Mitose'),
        ResponseModel.wrong('Meiose'),
        ResponseModel.wrong('Fissão'),
        ResponseModel.right('Mitose')
    ]),

    new QuestionModel(59, 'Qual é o nome da célula responsável pela defesa do organismo contra patógenos?', [
        ResponseModel.wrong('Eritrócito'),
        ResponseModel.wrong('Plaqueta'),
        ResponseModel.wrong('Neurônio'),
        ResponseModel.right('Leucócito')
    ]),

    // Química
    new QuestionModel(60, 'Qual é o composto químico formado pela reação de ácido clorídrico com hidróxido de sódio?', [
        ResponseModel.wrong('Água e cloreto de cálcio'),
        ResponseModel.wrong('Água e cloreto de potássio'),
        ResponseModel.wrong('Água e cloreto de magnésio'),
        ResponseModel.right('Água e cloreto de sódio')
    ]),

    new QuestionModel(61, 'Qual é o estado físico da água a 100°C e ao nível do mar?', [
        ResponseModel.wrong('Sólido'),
        ResponseModel.wrong('Gás'),
        ResponseModel.wrong('Plasma'),
        ResponseModel.right('Líquido')
    ]),

    // Física
    new QuestionModel(62, 'Qual é a fórmula da velocidade média?', [
        ResponseModel.wrong('Distância / Tempo'),
        ResponseModel.wrong('Distância x Tempo'),
        ResponseModel.wrong('Tempo / Distância'),
        ResponseModel.right('Distância / Tempo')
    ]),

    new QuestionModel(63, 'O que é a lei da inércia?', [
        ResponseModel.wrong('Um objeto em movimento tende a parar'),
        ResponseModel.wrong('Um objeto em repouso tende a se mover'),
        ResponseModel.wrong('A força é igual a massa vezes a aceleração'),
        ResponseModel.right('Um objeto em repouso tende a permanecer em repouso e um objeto em movimento tende a continuar em movimento')
    ]),

    // Ciências
    new QuestionModel(64, 'Qual é o principal gás responsável pelo efeito estufa?', [
        ResponseModel.wrong('Oxigênio'),
        ResponseModel.wrong('Hidrogênio'),
        ResponseModel.wrong('Nitrogênio'),
        ResponseModel.right('Dióxido de carbono')
    ]),

    new QuestionModel(65, 'O que é uma cadeia alimentar?', [
        ResponseModel.wrong('A troca de nutrientes entre plantas e animais'),
        ResponseModel.wrong('A sucessão de organismos que se alimentam uns dos outros'),
        ResponseModel.wrong('O processo de decomposição de organismos'),
        ResponseModel.right('A sucessão de organismos que se alimentam uns dos outros')
    ]),

    // Astronomia
    new QuestionModel(66, 'Qual é a estrela mais próxima da Terra?', [
        ResponseModel.wrong('Sirius'),
        ResponseModel.wrong('Betelgeuse'),
        ResponseModel.wrong('Proxima Centauri'),
        ResponseModel.right('Sol')
    ]),

    new QuestionModel(67, 'Qual é o nome da teoria que descreve a origem do universo?', [
        ResponseModel.wrong('Teoria da Relatividade'),
        ResponseModel.wrong('Teoria do Big Bang'),
        ResponseModel.wrong('Teoria da Evolução'),
        ResponseModel.right('Teoria do Big Bang')
    ]),

    // Atualidades
    new QuestionModel(68, 'Qual foi o nome do primeiro ser humano a caminhar na Lua?', [
        ResponseModel.wrong('Buzz Aldrin'),
        ResponseModel.wrong('Yuri Gagarin'),
        ResponseModel.wrong('Alan Shepard'),
        ResponseModel.right('Neil Armstrong')
    ]),

    new QuestionModel(69, 'Qual é o nome do tratado internacional que visa a redução de emissões de gases de efeito estufa?', [
        ResponseModel.wrong('Tratado de Versalhes'),
        ResponseModel.wrong('Tratado de Tóquio'),
        ResponseModel.wrong('Tratado de Paz de Paris'),
        ResponseModel.right('Acordo de Paris')
    ]),

    // História
    new QuestionModel(70, 'Qual foi a primeira civilização a desenvolver a escrita?', [
        ResponseModel.wrong('Egípcios'),
        ResponseModel.wrong('Gregos'),
        ResponseModel.wrong('Romanos'),
        ResponseModel.right('Sumérios')
    ]),

    new QuestionModel(71, 'Qual foi o evento que desencadeou a Segunda Guerra Mundial?', [
        ResponseModel.wrong('A Revolução Russa'),
        ResponseModel.wrong('A queda da Bolsa de Valores'),
        ResponseModel.wrong('A invasão da Polônia pela Alemanha'),
        ResponseModel.right('A invasão da Polônia pela Alemanha')
    ]),

    // Geografia
    new QuestionModel(72, 'Qual é o continente onde se encontra o deserto do Saara?', [
        ResponseModel.wrong('Ásia'),
        ResponseModel.wrong('América'),
        ResponseModel.wrong('América do Sul'),
        ResponseModel.right('África')
    ]),

    new QuestionModel(73, 'Qual é a maior ilha do mundo?', [
        ResponseModel.wrong('Groenlândia'),
        ResponseModel.wrong('Madagascar'),
        ResponseModel.wrong('Nova Guiné'),
        ResponseModel.right('Groenlândia')
    ]),

    // Música
    new QuestionModel(74, 'Qual banda britânica é famosa por seu álbum "Sgt. Pepper\'s Lonely Hearts Club Band"?', [
        ResponseModel.wrong('The Rolling Stones'),
        ResponseModel.wrong('Queen'),
        ResponseModel.wrong('The Who'),
        ResponseModel.right('The Beatles')
    ]),

    new QuestionModel(75, 'Quem é o compositor da música "Nessun Dorma"?', [
        ResponseModel.wrong('Puccini'),
        ResponseModel.wrong('Verdi'),
        ResponseModel.wrong('Mozart'),
        ResponseModel.right('Puccini')
    ]),

    // Inglês
    new QuestionModel(76, 'What is the opposite of "big"?', [
        ResponseModel.wrong('Huge'),
        ResponseModel.wrong('Large'),
        ResponseModel.wrong('Tall'),
        ResponseModel.right('Small')
    ]),

    new QuestionModel(77, 'How do you say "cadeira" in English?', [
        ResponseModel.wrong('Table'),
        ResponseModel.wrong('Sofa'),
        ResponseModel.wrong('Bed'),
        ResponseModel.right('Chair')
    ]),

    // Língua Portuguesa
    new QuestionModel(78, 'Qual é a função do artigo definido?', [
        ResponseModel.wrong('Indicar uma quantidade indefinida'),
        ResponseModel.wrong('Formar o plural dos substantivos'),
        ResponseModel.wrong('Indicar um objeto direto'),
        ResponseModel.right('Determinar o substantivo')
    ]),

    new QuestionModel(79, 'Como se chama a figura de linguagem que exagera a realidade?', [
        ResponseModel.wrong('Eufemismo'),
        ResponseModel.wrong('Ironia'),
        ResponseModel.wrong('Metáfora'),
        ResponseModel.right('Hipérbole')
    ]),

    // Matemática
    new QuestionModel(80, 'Qual é a soma dos ângulos internos de um quadrado?', [
        ResponseModel.wrong('180°'),
        ResponseModel.wrong('270°'),
        ResponseModel.wrong('360°'),
        ResponseModel.right('360°')
    ]),

    new QuestionModel(81, 'Qual é o próximo número na sequência: 3, 6, 9, 12?', [
        ResponseModel.wrong('14'),
        ResponseModel.wrong('15'),
        ResponseModel.wrong('18'),
        ResponseModel.right('15')
    ]),

    new QuestionModel(82, 'Quanto é 15 dividido por 5?', [
        ResponseModel.wrong('1'),
        ResponseModel.wrong('2'),
        ResponseModel.wrong('3'),
        ResponseModel.right('3')
    ]),

    // Biologia
    new QuestionModel(83, 'Qual órgão é responsável pela produção de insulina?', [
        ResponseModel.wrong('Fígado'),
        ResponseModel.wrong('Coração'),
        ResponseModel.wrong('Rins'),
        ResponseModel.right('Pâncreas')
    ]),

    new QuestionModel(84, 'Qual é o principal pigmento responsável pela cor verde das plantas?', [
        ResponseModel.wrong('Caroteno'),
        ResponseModel.wrong('Antocianina'),
        ResponseModel.wrong('Xantofila'),
        ResponseModel.right('Clorofila')
    ]),

    // Química
    new QuestionModel(85, 'Qual é o composto químico conhecido como água oxigenada?', [
        ResponseModel.wrong('H2O'),
        ResponseModel.wrong('CO2'),
        ResponseModel.wrong('NaCl'),
        ResponseModel.right('H2O2')
    ]),

    new QuestionModel(86, 'Qual é o nome da reação que ocorre quando o ferro se combina com o oxigênio?', [
        ResponseModel.wrong('Neutralização'),
        ResponseModel.wrong('Esterificação'),
        ResponseModel.wrong('Fusão'),
        ResponseModel.right('Oxidação')
    ]),

    // Física
    new QuestionModel(87, 'O que é a energia cinética?', [
        ResponseModel.wrong('Energia armazenada em um corpo'),
        ResponseModel.wrong('Energia transferida por calor'),
        ResponseModel.wrong('Energia associada à altura'),
        ResponseModel.right('Energia associada ao movimento de um corpo')
    ]),

    new QuestionModel(88, 'Qual é a fórmula para calcular a força?', [
        ResponseModel.wrong('Massa x Velocidade'),
        ResponseModel.wrong('Massa / Aceleração'),
        ResponseModel.wrong('Velocidade / Tempo'),
        ResponseModel.right('Massa x Aceleração')
    ]),

    // Ciências
    new QuestionModel(89, 'Qual é o principal gás responsável pela chuva ácida?', [
        ResponseModel.wrong('Oxigênio'),
        ResponseModel.wrong('Dióxido de carbono'),
        ResponseModel.wrong('Metano'),
        ResponseModel.right('Dióxido de enxofre')
    ]),

    new QuestionModel(90, 'O que é o ciclo da água?', [
        ResponseModel.wrong('A troca de nutrientes entre organismos'),
        ResponseModel.wrong('A sucessão de organismos que se alimentam uns dos outros'),
        ResponseModel.wrong('O processo de decomposição de organismos'),
        ResponseModel.right('O movimento contínuo da água entre a superfície da Terra e a atmosfera')
    ]),

    // Astronomia
    new QuestionModel(91, 'Qual é o planeta conhecido como "Planeta Vermelho"?', [
        ResponseModel.wrong('Júpiter'),
        ResponseModel.wrong('Saturno'),
        ResponseModel.wrong('Urano'),
        ResponseModel.right('Marte')
    ]),

    new QuestionModel(92, 'Qual é a maior lua do sistema solar?', [
        ResponseModel.wrong('Titan'),
        ResponseModel.wrong('Io'),
        ResponseModel.wrong('Europa'),
        ResponseModel.right('Ganimedes')
    ]),

    // Atualidades
    new QuestionModel(93, 'Qual é o nome da vacina contra o COVID-19 desenvolvida pela Pfizer?', [
        ResponseModel.wrong('Coronavac'),
        ResponseModel.wrong('Sputnik V'),
        ResponseModel.wrong('AstraZeneca'),
        ResponseModel.right('Comirnaty')
    ]),

    new QuestionModel(94, 'Qual é o nome do atual presidente dos Estados Unidos?', [
        ResponseModel.wrong('Donald Trump'),
        ResponseModel.wrong('Barack Obama'),
        ResponseModel.wrong('Joe Biden'),
        ResponseModel.right('Joe Biden')
    ]),

    // História
    new QuestionModel(95, 'Qual foi o principal autor da Teoria da Relatividade?', [
        ResponseModel.wrong('Isaac Newton'),
        ResponseModel.wrong('Galileu Galilei'),
        ResponseModel.wrong('Niels Bohr'),
        ResponseModel.right('Albert Einstein')
    ]),

    new QuestionModel(96, 'Em que ano ocorreu a queda do Muro de Berlim?', [
        ResponseModel.wrong('1987'),
        ResponseModel.wrong('1988'),
        ResponseModel.wrong('1989'),
        ResponseModel.right('1989')
    ]),

    // Geografia
    new QuestionModel(97, 'Qual é o rio mais longo do mundo?', [
        ResponseModel.wrong('Rio Amazonas'),
        ResponseModel.wrong('Rio Nilo'),
        ResponseModel.wrong('Rio Yangtze'),
        ResponseModel.right('Rio Amazonas')
    ]),

    new QuestionModel(98, 'Qual é o país com a maior população do mundo?', [
        ResponseModel.wrong('Estados Unidos'),
        ResponseModel.wrong('Índia'),
        ResponseModel.wrong('Brasil'),
        ResponseModel.right('China')
    ]),

    // Música
    new QuestionModel(99, 'Qual é o nome do cantor britânico que lançou o álbum "Let It Be"?', [
        ResponseModel.wrong('David Bowie'),
        ResponseModel.wrong('Elton John'),
        ResponseModel.wrong('Paul McCartney'),
        ResponseModel.right('Paul McCartney')
    ]),

    new QuestionModel(100, 'Qual é o nome do compositor da música "Bolero"?', [
        ResponseModel.wrong('Tchaikovsky'),
        ResponseModel.wrong('Beethoven'),
        ResponseModel.wrong('Stravinsky'),
        ResponseModel.right('Ravel')
    ]),

    new QuestionModel(101, 'Qual é a capital da Austrália?', [
        ResponseModel.wrong('Sydney'),
        ResponseModel.wrong('Melbourne'),
        ResponseModel.wrong('Brisbane'),
        ResponseModel.right('Canberra')
    ]),

    new QuestionModel(102, 'Qual é o nome do maior oceano do planeta?', [
        ResponseModel.wrong('Oceano Atlântico'),
        ResponseModel.wrong('Oceano Índico'),
        ResponseModel.wrong('Oceano Ártico'),
        ResponseModel.right('Oceano Pacífico')
    ]),

    // Matemática
    new QuestionModel(103, 'Qual é o resultado de 7 elevado ao quadrado?', [
        ResponseModel.wrong('49'),
        ResponseModel.wrong('42'),
        ResponseModel.wrong('56'),
        ResponseModel.right('49')
    ]),

    new QuestionModel(104, 'Qual é a fórmula para calcular a área de um triângulo?', [
        ResponseModel.wrong('Base x Altura'),
        ResponseModel.wrong('2 x Base x Altura'),
        ResponseModel.wrong('Base + Altura'),
        ResponseModel.right('Base x Altura / 2')
    ]),

    // Biologia
    new QuestionModel(105, 'Qual é o órgão responsável pela respiração em peixes?', [
        ResponseModel.wrong('Coração'),
        ResponseModel.wrong('Brânquias'),
        ResponseModel.wrong('Fígado'),
        ResponseModel.right('Brânquias')
    ]),

    new QuestionModel(106, 'O que são os gametas?', [
        ResponseModel.wrong('Células do sistema imunológico'),
        ResponseModel.wrong('Células do fígado'),
        ResponseModel.wrong('Células da pele'),
        ResponseModel.right('Células sexuais')
    ]),

    // Química
    new QuestionModel(107, 'Qual é o nome da reação química que libera calor?', [
        ResponseModel.wrong('Reação endotérmica'),
        ResponseModel.wrong('Reação de oxidação'),
        ResponseModel.wrong('Reação de neutralização'),
        ResponseModel.right('Reação exotérmica')
    ]),

    new QuestionModel(108, 'Qual é o principal componente do ar atmosférico?', [
        ResponseModel.wrong('Oxigênio'),
        ResponseModel.wrong('Hidrogênio'),
        ResponseModel.wrong('Argônio'),
        ResponseModel.right('Nitrogênio')
    ]),

    // Física
    new QuestionModel(109, 'Qual é a unidade de medida da força no Sistema Internacional?', [
        ResponseModel.wrong('Joule'),
        ResponseModel.wrong('Watt'),
        ResponseModel.wrong('Pascal'),
        ResponseModel.right('Newton')
    ]),

    new QuestionModel(110, 'O que é a lei da gravitação universal?', [
        ResponseModel.wrong('Todo corpo exerce uma força de atração sobre outros corpos'),
        ResponseModel.wrong('A força é inversamente proporcional à distância'),
        ResponseModel.wrong('A força é diretamente proporcional ao tempo'),
        ResponseModel.right('Todo corpo exerce uma força de atração sobre outros corpos, proporcional às suas massas e inversamente proporcional ao quadrado da distância entre eles')
    ]),

    // Ciências
    new QuestionModel(111, 'Qual é o maior órgão do corpo humano?', [
        ResponseModel.wrong('Coração'),
        ResponseModel.wrong('Pulmão'),
        ResponseModel.wrong('Fígado'),
        ResponseModel.right('Pele')
    ]),

    new QuestionModel(112, 'O que é um ecossistema?', [
        ResponseModel.wrong('Um grupo de organismos da mesma espécie'),
        ResponseModel.wrong('O conjunto de organismos em uma região'),
        ResponseModel.wrong('Uma comunidade de organismos em um ambiente qualquer'),
        ResponseModel.right('Uma comunidade de organismos em um ambiente específico, incluindo interações entre eles e o meio ambiente')
    ]),

    // Astronomia
    new QuestionModel(113, 'Qual planeta é conhecido por ter anéis visíveis?', [
        ResponseModel.wrong('Marte'),
        ResponseModel.wrong('Júpiter'),
        ResponseModel.wrong('Netuno'),
        ResponseModel.right('Saturno')
    ]),

    new QuestionModel(114, 'Qual é o maior planeta do sistema solar?', [
        ResponseModel.wrong('Saturno'),
        ResponseModel.wrong('Urano'),
        ResponseModel.wrong('Terra'),
        ResponseModel.right('Júpiter')
    ]),

    // Atualidades
    new QuestionModel(115, 'Quem foi o primeiro presidente do Brasil?', [
        ResponseModel.wrong('Getúlio Vargas'),
        ResponseModel.wrong('Juscelino Kubitschek'),
        ResponseModel.wrong('D. Pedro II'),
        ResponseModel.right('Marechal Deodoro da Fonseca')
    ]),

    new QuestionModel(116, 'Qual é o nome da plataforma de streaming adquirida pela Microsoft?', [
        ResponseModel.wrong('Netflix'),
        ResponseModel.wrong('Hulu'),
        ResponseModel.wrong('Disney+'),
        ResponseModel.right('GitHub')
    ]),

    // História
    new QuestionModel(117, 'Quem foi o responsável pela Unificação da Itália no século XIX?', [
        ResponseModel.wrong('Giuseppe Garibaldi'),
        ResponseModel.wrong('Vittorio Emanuele II'),
        ResponseModel.wrong('Luciano Pavarotti'),
        ResponseModel.right('Camillo di Cavour')
    ]),

    new QuestionModel(118, 'Qual foi a primeira nação a abolir a escravidão?', [
        ResponseModel.wrong('Estados Unidos'),
        ResponseModel.wrong('Brasil'),
        ResponseModel.wrong('França'),
        ResponseModel.right('Reino Unido')
    ]),

    // Geografia
    new QuestionModel(119, 'Qual é a capital da Noruega?', [
        ResponseModel.wrong('Estocolmo'),
        ResponseModel.wrong('Helsinque'),
        ResponseModel.wrong('Copenhague'),
        ResponseModel.right('Oslo')
    ]),

    new QuestionModel(120, 'Qual é o país que tem a maior extensão territorial?', [
        ResponseModel.wrong('China'),
        ResponseModel.wrong('Estados Unidos'),
        ResponseModel.wrong('Canadá'),
        ResponseModel.right('Rússia')
    ]),

    // Música
    new QuestionModel(121, 'Quem é o cantor da música "Shape of You"?', [
        ResponseModel.wrong('Justin Timberlake'),
        ResponseModel.wrong('Tiririca'),
        ResponseModel.wrong('Sam Smith'),
        ResponseModel.right('Ed Sheeran')
    ]),

    new QuestionModel(122, 'Qual banda lançou o álbum "Dark Side of the Moon"?', [
        ResponseModel.wrong('Led Zeppelin'),
        ResponseModel.wrong('The Rolling Stones'),
        ResponseModel.wrong('The Who'),
        ResponseModel.right('Pink Floyd')
    ]),

    // Inglês
    new QuestionModel(123, 'Qual é o passado tendo (past tense) de "eat"?', [
        ResponseModel.wrong('Eated'),
        ResponseModel.wrong('Eats'),
        ResponseModel.wrong('Eaten'),
        ResponseModel.right('Ate')
    ]),

    new QuestionModel(124, 'O que significa "weather" em inglês?', [
        ResponseModel.wrong('Tempo'),
        ResponseModel.wrong('Estação'),
        ResponseModel.wrong('Neblina'),
        ResponseModel.right('Clima')
    ]),

    // Língua Portuguesa
    new QuestionModel(125, 'Qual é o plural da palavra "avião"?', [
        ResponseModel.wrong('Aviãos'),
        ResponseModel.wrong('Aviões'),
        ResponseModel.wrong('Aviõeses'),
        ResponseModel.right('Aviões')
    ]),

    new QuestionModel(126, 'Qual é o termo usado para descrever uma palavra que tem o mesmo significado de outra?', [
        ResponseModel.wrong('Antônimo'),
        ResponseModel.wrong('Homônimo'),
        ResponseModel.wrong('Sinonímia'),
        ResponseModel.right('Sinônimo')
    ]),

    // Matemática
    new QuestionModel(127, 'Qual é o valor de π (pi) arredondado para duas casas decimais?', [
        ResponseModel.wrong('3.141'),
        ResponseModel.wrong('3.14'),
        ResponseModel.wrong('3.15'),
        ResponseModel.right('3.14')
    ]),

    new QuestionModel(128, 'O que é um ângulo agudo?', [
        ResponseModel.wrong('Um ângulo maior que 90 graus'),
        ResponseModel.wrong('Um ângulo de exatamente 90 graus'),
        ResponseModel.wrong('Um ângulo menor que 180 graus'),
        ResponseModel.right('Um ângulo menor que 90 graus')
    ]),

    // Biologia
    new QuestionModel(129, 'Qual é a função dos ribossomos na célula?', [
        ResponseModel.wrong('Produzir energia'),
        ResponseModel.wrong('Armazenar nutrientes'),
        ResponseModel.wrong('Controlar as atividades celulares'),
        ResponseModel.right('Sintetizar proteínas')
    ]),

    new QuestionModel(130, 'O que é a fotossíntese?', [
        ResponseModel.wrong('O processo pelo qual as plantas respiram'),
        ResponseModel.wrong('A produção de oxigênio pela respiração celular'),
        ResponseModel.wrong('A absorção de água pelas raízes'),
        ResponseModel.right('O processo pelo qual as plantas convertem luz solar em energia química')
    ]),

    // Química
    new QuestionModel(131, 'Qual é o nome do ácido encontrado no vinagre?', [
        ResponseModel.wrong('Ácido clorídrico'),
        ResponseModel.wrong('Ácido sulfúrico'),
        ResponseModel.wrong('Ácido cítrico'),
        ResponseModel.right('Ácido acético')
    ]),

    new QuestionModel(132, 'Qual é o elemento químico representado pelo símbolo Au?', [
        ResponseModel.wrong('Prata'),
        ResponseModel.wrong('Cobre'),
        ResponseModel.wrong('Mercúrio'),
        ResponseModel.right('Ouro')
    ]),

    // Física
    new QuestionModel(133, 'Qual é a unidade de medida da intensidade da corrente elétrica?', [
        ResponseModel.wrong('Volt'),
        ResponseModel.wrong('Ohm'),
        ResponseModel.wrong('Joule'),
        ResponseModel.right('Ampère')
    ]),

    new QuestionModel(134, 'O que é a inércia?', [
        ResponseModel.wrong('A tendência de um objeto mudar sua forma'),
        ResponseModel.wrong('A força que atua contra o movimento'),
        ResponseModel.wrong('A força que age sobre corpos em movimento'),
        ResponseModel.right('A tendência de um objeto manter seu estado de repouso ou movimento')
    ]),

    // Ciências
    new QuestionModel(135, 'Qual é o processo pelo qual as plantas liberam água para a atmosfera?', [
        ResponseModel.wrong('Absorção'),
        ResponseModel.wrong('Translocação'),
        ResponseModel.wrong('Condensação'),
        ResponseModel.right('Transpiração')
    ]),

    new QuestionModel(136, 'O que é um herbívoro?', [
        ResponseModel.wrong('Um animal que come carne'),
        ResponseModel.wrong('Um animal que come plantas e carne'),
        ResponseModel.wrong('Um animal que se alimenta de insetos'),
        ResponseModel.right('Um animal que come apenas plantas')
    ]),

    // Astronomia
    new QuestionModel(137, 'Qual estrela é a mais próxima da Terra após o Sol?', [
        ResponseModel.wrong('Betelgeuse'),
        ResponseModel.wrong('Sirius'),
        ResponseModel.wrong('Polaris'),
        ResponseModel.right('Proxima Centauri')
    ]),

    new QuestionModel(138, 'Qual é o fenômeno responsável pelas estações do ano?', [
        ResponseModel.wrong('A rotação da Terra'),
        ResponseModel.wrong('A órbita elíptica da Terra'),
        ResponseModel.wrong('A gravidade da Lua'),
        ResponseModel.right('A inclinação do eixo da Terra em relação ao plano da órbita')
    ]),

    // Atualidades
    new QuestionModel(139, 'Qual foi a primeira missão tripulada a pousar na Lua?', [
        ResponseModel.wrong('Apollo 12'),
        ResponseModel.wrong('Apollo 14'),
        ResponseModel.wrong('Apollo 11'),
        ResponseModel.right('Apollo 11')
    ]),

    new QuestionModel(140, 'Quem é o autor da série de livros "Harry Potter"?', [
        ResponseModel.wrong('J.R.R. Tolkien'),
        ResponseModel.wrong('C.S. Lewis'),
        ResponseModel.wrong('George R.R. Martin'),
        ResponseModel.right('J.K. Rowling')
    ]),

    // História
    new QuestionModel(141, 'Quem foi o imperador romano conhecido por dividir o Império em dois?', [
        ResponseModel.wrong('Nero'),
        ResponseModel.wrong('Augusto'),
        ResponseModel.wrong('Júlio César'),
        ResponseModel.right('Diocleciano')
    ]),

    new QuestionModel(142, 'Qual foi o evento que marcou o início da Revolução Francesa?', [
        ResponseModel.wrong('A Batalha de Waterloo'),
        ResponseModel.wrong('A execução de Luís XVI'),
        ResponseModel.wrong('A assinatura do Tratado de Versalhes'),
        ResponseModel.right('A Tomada da Bastilha')
    ]),

    // Geografia
    new QuestionModel(143, 'Qual é o deserto mais seco do mundo?', [
        ResponseModel.wrong('Deserto do Saara'),
        ResponseModel.wrong('Deserto de Gobi'),
        ResponseModel.wrong('Deserto de Kalahari'),
        ResponseModel.right('Deserto de Atacama')
    ]),

    new QuestionModel(144, 'Qual é a capital da Argentina?', [
        ResponseModel.wrong('São Paulo'),
        ResponseModel.wrong('Montevidéu'),
        ResponseModel.wrong('Lima'),
        ResponseModel.right('Buenos Aires')
    ]),

    // Música
    new QuestionModel(145, 'Quem é o autor da música "Imagine"?', [
        ResponseModel.wrong('Paul McCartney'),
        ResponseModel.wrong('Elton John'),
        ResponseModel.wrong('David Bowie'),
        ResponseModel.right('John Lennon')
    ]),

    new QuestionModel(146, 'Qual banda é conhecida pelo álbum "Abbey Road"?', [
        ResponseModel.wrong('The Rolling Stones'),
        ResponseModel.wrong('Led Zeppelin'),
        ResponseModel.wrong('The Who'),
        ResponseModel.right('The Beatles')
    ]),

    // Inglês
    new QuestionModel(147, 'Qual é o oposto de "difficult"?', [
        ResponseModel.wrong('Complex'),
        ResponseModel.wrong('Hard'),
        ResponseModel.wrong('Challenging'),
        ResponseModel.right('Easy')
    ]),

    new QuestionModel(148, 'Qual é o plural de "child"?', [
        ResponseModel.wrong('Childs'),
        ResponseModel.wrong('Childeren'),
        ResponseModel.wrong('Childes'),
        ResponseModel.right('Children')
    ]),

    // Língua Portuguesa
    new QuestionModel(149, 'Qual é a função do advérbio na frase?', [
        ResponseModel.wrong('Modificar um substantivo'),
        ResponseModel.wrong('Modificar um verbo'),
        ResponseModel.wrong('Modificar um adjetivo'),
        ResponseModel.right('Modificar um verbo, adjetivo ou outro advérbio')
    ]),

    new QuestionModel(150, 'Qual é o adjetivo na frase "O carro vermelho é rápido"?', [
        ResponseModel.wrong('Carro'),
        ResponseModel.wrong('Rápido'),
        ResponseModel.wrong('É'),
        ResponseModel.right('Vermelho')
    ]),

    // Conhecimentos Gerais
    new QuestionModel(151, 'Qual é a maior ilha do mundo?', [
        ResponseModel.wrong('Japão'),
        ResponseModel.wrong('Madagáscar'),
        ResponseModel.wrong('Borneu'),
        ResponseModel.right('Groenlândia')
    ]),

    new QuestionModel(152, 'Qual é o país com o maior número de vulcões ativos?', [
        ResponseModel.wrong('Estados Unidos'),
        ResponseModel.wrong('Japão'),
        ResponseModel.wrong('Chile'),
        ResponseModel.right('Indonésia')
    ]),

    // Matemática
    new QuestionModel(153, 'Qual é a fórmula para calcular o volume de um cubo?', [
        ResponseModel.wrong('Lado x Lado'),
        ResponseModel.wrong('2 x Lado x Lado'),
        ResponseModel.wrong('Base x Altura x Comprimento'),
        ResponseModel.right('Lado x Lado x Lado')
    ]),

    new QuestionModel(154, 'O que é um número primo?', [
        ResponseModel.wrong('Um número divisível por 2'),
        ResponseModel.wrong('Um número que pode ser dividido por 1 e ele mesmo'),
        ResponseModel.wrong('Um número que pode ser dividido por 3'),
        ResponseModel.right('Um número que só pode ser dividido por 1 e ele mesmo')
    ]),

    // Biologia
    new QuestionModel(155, 'O que é o DNA?', [
        ResponseModel.wrong('Uma proteína'),
        ResponseModel.wrong('Um tipo de célula'),
        ResponseModel.wrong('Uma organela'),
        ResponseModel.right('Material genético que contém as instruções para o desenvolvimento e funcionamento dos organismos')
    ]),

    new QuestionModel(156, 'Qual é a principal função dos glóbulos vermelhos?', [
        ResponseModel.wrong('Combater infecções'),
        ResponseModel.wrong('Coagulação do sangue'),
        ResponseModel.wrong('Transporte de hormônios'),
        ResponseModel.right('Transporte de oxigênio para os tecidos do corpo')
    ]),

    // Química
    new QuestionModel(157, 'Qual é o nome do processo pelo qual um líquido se transforma em vapor?', [
        ResponseModel.wrong('Condensação'),
        ResponseModel.wrong('Solidificação'),
        ResponseModel.wrong('Liquefação'),
        ResponseModel.right('Evaporação')
    ]),

    new QuestionModel(158, 'Qual é o símbolo químico para o elemento Oxigênio?', [
        ResponseModel.wrong('O'),
        ResponseModel.wrong('Ox'),
        ResponseModel.wrong('Og'),
        ResponseModel.right('O')
    ]),

    // Física
    new QuestionModel(159, 'Qual é a fórmula para a velocidade média?', [
        ResponseModel.wrong('Distância x Tempo'),
        ResponseModel.wrong('Tempo / Distância'),
        ResponseModel.wrong('Força x Tempo'),
        ResponseModel.right('Distância / Tempo')
    ]),

    new QuestionModel(160, 'O que é a lei de Ohm?', [
        ResponseModel.wrong('V = I / R'),
        ResponseModel.wrong('P = V x I'),
        ResponseModel.wrong('V = I x R'),
        ResponseModel.right('V = I x R')
    ]),

    // Ciências
    new QuestionModel(161, 'Qual é a função das mitocôndrias na célula?', [
        ResponseModel.wrong('Armazenar nutrientes'),
        ResponseModel.wrong('Sintetizar proteínas'),
        ResponseModel.wrong('Controlar as atividades celulares'),
        ResponseModel.right('Produzir energia através da respiração celular')
    ]),

    new QuestionModel(162, 'O que é a fotossíntese?', [
        ResponseModel.wrong('O processo pelo qual as plantas respiram'),
        ResponseModel.wrong('A absorção de água pelas raízes'),
        ResponseModel.wrong('A produção de oxigênio pela respiração celular'),
        ResponseModel.right('O processo pelo qual as plantas convertem luz solar em energia química')
    ]),

    // Astronomia
    new QuestionModel(163, 'Qual planeta é conhecido por ter a maior mancha vermelha?', [
        ResponseModel.wrong('Marte'),
        ResponseModel.wrong('Urano'),
        ResponseModel.wrong('Netuno'),
        ResponseModel.right('Júpiter')
    ]),

    new QuestionModel(164, 'Qual é o nome da galáxia onde o sistema solar está localizado?', [
        ResponseModel.wrong('Galáxia de Andrômeda'),
        ResponseModel.wrong('Galáxia Messier 87'),
        ResponseModel.wrong('Galáxia do Triângulo'),
        ResponseModel.right('Via Láctea')
    ]),

    // Atualidades
    new QuestionModel(165, 'Qual país sediou os Jogos Olímpicos de 2020?', [
        ResponseModel.wrong('China'),
        ResponseModel.wrong('Brasil'),
        ResponseModel.wrong('França'),
        ResponseModel.right('Japão')
    ]),

    new QuestionModel(166, 'Qual foi a primeira vacina desenvolvida para combater a COVID-19?', [
        ResponseModel.wrong('Vacina da Johnson & Jonhson'),
        ResponseModel.wrong('Vacina da Moderna'),
        ResponseModel.wrong('Vacina da AstraZeneca'),
        ResponseModel.right('Vacina da Pfizer')
    ]),

    // História
    new QuestionModel(167, 'Qual foi o nome do primeiro imperador do Brasil?', [
        ResponseModel.wrong('Dom Pedro II'),
        ResponseModel.wrong('Dom João VI'),
        ResponseModel.wrong('Marechal Deodoro da Fonseca'),
        ResponseModel.right('Dom Pedro I')
    ]),

    new QuestionModel(168, 'Qual foi a principal causa da Primeira Guerra Mundial?', [
        ResponseModel.wrong('A Revolução Francesa'),
        ResponseModel.wrong('A assinatura do Tratado de Versalhes'),
        ResponseModel.wrong('A descoberta da América'),
        ResponseModel.right('O assassinato do arquiduque Francisco Ferdinando')
    ]),

    // Geografia
    new QuestionModel(169, 'Qual é a capital da Nova Zelândia?', [
        ResponseModel.wrong('Sydney'),
        ResponseModel.wrong('Auckland'),
        ResponseModel.wrong('Melbourne'),
        ResponseModel.right('Wellington')
    ]),

        new QuestionModel(170, 'Qual é o ponto mais alto da Terra?', [
            ResponseModel.wrong('Monte Kilimanjaro'),
            ResponseModel.wrong('Monte Fuji'),
            ResponseModel.wrong('Monte McKinley'),
            ResponseModel.right('Monte Everest')
        ]),

    // Música
    new QuestionModel(171, 'Quem é o artista conhecido pelo álbum "Thriller"?', [
        ResponseModel.wrong('Prince'),
        ResponseModel.wrong('Madonna'),
        ResponseModel.wrong('Elvis Presley'),
        ResponseModel.right('Michael Jackson')
    ]),

    new QuestionModel(172, 'Qual banda britânica é conhecida pelo álbum "A Night at the Opera"?', [
        ResponseModel.wrong('The Rolling Stones'),
        ResponseModel.wrong('The Who'),
        ResponseModel.wrong('Led Zeppelin'),
        ResponseModel.right('Queen')
    ]),

    // Inglês
    new QuestionModel(173, 'Qual é o oposto de "happy" em inglês?', [
        ResponseModel.wrong('Joyful'),
        ResponseModel.wrong('Excited'),
        ResponseModel.wrong('Cheerful'),
        ResponseModel.right('Sad')
    ]),

    new QuestionModel(174, 'Qual é a tradução de "library" para o português?', [
        ResponseModel.wrong('Escola'),
        ResponseModel.wrong('Livraria'),
        ResponseModel.wrong('Laboratório'),
        ResponseModel.right('Biblioteca')
    ]),

    // Língua Portuguesa
    new QuestionModel(175, 'Qual é o adjetivo na frase "O livro interessante está na mesa"?', [
        ResponseModel.wrong('Livro'),
        ResponseModel.wrong('Está'),
        ResponseModel.wrong('Mesa'),
        ResponseModel.right('Interessante')
    ]),

    new QuestionModel(176, 'Qual é a função do pronome na frase?', [
        ResponseModel.wrong('Modificar um verbo'),
        ResponseModel.wrong('Modificadora de um adjetivo'),
        ResponseModel.wrong('Substituir um advérbio'),
        ResponseModel.right('Substituir um substantivo')
    ]),

    // Matemática
    new QuestionModel(177, 'Qual é a fórmula para calcular a área de um círculo?', [
        ResponseModel.wrong('2 x π x raio'),
        ResponseModel.wrong('π x raio'),
        ResponseModel.wrong('2 x π x raio²'),
        ResponseModel.right('π x raio²')
    ]),

    new QuestionModel(178, 'Qual é a raiz quadrada de 144?', [
        ResponseModel.wrong('14'),
        ResponseModel.wrong('12'),
        ResponseModel.wrong('16'),
        ResponseModel.right('12')
    ]),

    // Biologia
    new QuestionModel(179, 'Qual é a função dos cloroplastos nas plantas?', [
        ResponseModel.wrong('Absorver água'),
        ResponseModel.wrong('Armazenar nutrientes'),
        ResponseModel.wrong('Auxiliar na reprodução'),
        ResponseModel.right('Realizar a fotossíntese')
    ]),

    new QuestionModel(180, 'O que é um ecossistema?', [
        ResponseModel.wrong('Uma unidade de organização celular'),
        ResponseModel.wrong('Um grupo de organismos da mesma espécie'),
        ResponseModel.wrong('Um tipo de célula'),
        ResponseModel.right('Um sistema composto por organismos vivos e seu ambiente físico')
    ]),

    // Química
    new QuestionModel(181, 'Qual é o nome da reação química que ocorre quando um ácido reage com uma base?', [
        ResponseModel.wrong('Oxidação'),
        ResponseModel.wrong('Decomposição'),
        ResponseModel.wrong('Substituição'),
        ResponseModel.right('Neutralização')
    ]),

    new QuestionModel(182, 'Qual elemento químico tem o número atômico 1?', [
        ResponseModel.wrong('Hélio'),
        ResponseModel.wrong('Lítio'),
        ResponseModel.wrong('Oxigênio'),
        ResponseModel.right('Hidrogênio')
    ]),

    // Física
    new QuestionModel(183, 'Qual é a unidade de medida da força no Sistema Internacional?', [
        ResponseModel.wrong('Joule'),
        ResponseModel.wrong('Newton'),
        ResponseModel.wrong('Pascal'),
        ResponseModel.right('Newton')
    ]),

    new QuestionModel(184, 'Qual é a fórmula da força segundo a Segunda Lei de Newton?', [
        ResponseModel.wrong('F = m / a'),
        ResponseModel.wrong('F = m + a'),
        ResponseModel.wrong('F = m x v'),
        ResponseModel.right('F = m x a')
    ]),

    // Ciências
    new QuestionModel(185, 'Qual é o processo pelo qual as plantas obtêm nutrientes do solo?', [
        ResponseModel.wrong('Transpiração'),
        ResponseModel.wrong('Condensação'),
        ResponseModel.wrong('Evaporação'),
        ResponseModel.right('Absorção')
    ]),

    new QuestionModel(186, 'Qual é a função dos ribossomos na célula?', [
        ResponseModel.wrong('Produzir energia'),
        ResponseModel.wrong('Controlar as atividades celulares'),
        ResponseModel.wrong('Armazenar informações genéticas'),
        ResponseModel.right('Sintetizar proteínas')
    ]),

    // Astronomia
    new QuestionModel(187, 'Qual planeta é conhecido por seus anéis?', [
        ResponseModel.wrong('Marte'),
        ResponseModel.wrong('Júpiter'),
        ResponseModel.wrong('Netuno'),
        ResponseModel.right('Saturno')
    ]),

    new QuestionModel(188, 'Qual é o nome da órbita que a Terra faz ao redor do Sol?', [
        ResponseModel.wrong('Órbita elíptica'),
        ResponseModel.wrong('Órbita circular'),
        ResponseModel.wrong('Órbita triangular'),
        ResponseModel.right('Órbita elíptica')
    ]),

    // Atualidades
    new QuestionModel(189, 'Qual país ganhou a Copa do Mundo de Futebol de 2018?', [
        ResponseModel.wrong('Alemanha'),
        ResponseModel.wrong('Brasil'),
        ResponseModel.wrong('Argentina'),
        ResponseModel.right('França')
    ]),

    new QuestionModel(190, 'Qual foi o nome do primeiro-ministro do Reino Unido durante o Brexit?', [
        ResponseModel.wrong('David Cameron'),
        ResponseModel.wrong('Tony Blair'),
        ResponseModel.wrong('Gordon Brown'),
        ResponseModel.right('Theresa May')
    ]),

    // História
    new QuestionModel(191, 'Qual foi o nome do imperador romano conhecido por dividir o Império em duas partes?', [
        ResponseModel.wrong('Nero'),
        ResponseModel.wrong('Augusto'),
        ResponseModel.wrong('Júlio César'),
        ResponseModel.right('Diocleciano')
    ]),

    new QuestionModel(192, 'Quem foi o líder da Revolução Cubana?', [
        ResponseModel.wrong('Fidel Castro'),
        ResponseModel.wrong('Che Guevara'),
        ResponseModel.wrong('Simón Bolívar'),
        ResponseModel.right('Fidel Castro')
    ]),

    // Geografia
    new QuestionModel(193, 'Qual é o país mais populoso do mundo?', [
        ResponseModel.wrong('Estados Unidos'),
        ResponseModel.wrong('Índia'),
        ResponseModel.wrong('Brasil'),
        ResponseModel.right('China')
    ]),

    new QuestionModel(194, 'Qual é o maior continente em termos de área?', [
        ResponseModel.wrong('África'),
        ResponseModel.wrong('América do Sul'),
        ResponseModel.wrong('Oceania'),
        ResponseModel.right('Ásia')
    ]),

    // Música
    new QuestionModel(195, 'Qual artista é conhecido por seu álbum "Born to Run"?', [
        ResponseModel.wrong('Bob Dylan'),
        ResponseModel.wrong('Bruce Dickinson'),
        ResponseModel.wrong('Elvis Presley'),
        ResponseModel.right('Bruce Springsteen')
    ]),

    new QuestionModel(196, 'Qual banda é conhecida pela música "Hotel California"?', [
        ResponseModel.wrong('The Who'),
        ResponseModel.wrong('The Beatles'),
        ResponseModel.wrong('Led Zeppelin'),
        ResponseModel.right('Eagles')
    ]),

    // Inglês
    new QuestionModel(197, 'Qual é a tradução de "dog" para o português?', [
        ResponseModel.wrong('Gato'),
        ResponseModel.wrong('Rato'),
        ResponseModel.wrong('Pássaro'),
        ResponseModel.right('Cachorro')
    ]),

    new QuestionModel(198, 'Qual é o oposto de "large" em inglês?', [
        ResponseModel.wrong('Gigantic'),
        ResponseModel.wrong('Huge'),
        ResponseModel.wrong('Big'),
        ResponseModel.right('Small')
    ]),

    // Língua Portuguesa
    new QuestionModel(199, 'Qual é o papel do sujeito em uma frase?', [
        ResponseModel.wrong('Indicar o lugar'),
        ResponseModel.wrong('Indicar o tempo'),
        ResponseModel.wrong('Indicar a ação'),
        ResponseModel.right('Realizar a ação ou o estado descrito pelo predicado')
    ]),

    new QuestionModel(200, 'Qual é o verbo na frase "Ela não está feliz"?', [
        ResponseModel.wrong('Feliz'),
        ResponseModel.wrong('Ela'),
        ResponseModel.wrong('Não'),
        ResponseModel.right('Está')
    ]),
];


export default questions