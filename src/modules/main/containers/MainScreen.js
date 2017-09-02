import React, {Component} from 'react'

import {
  View,
  Platform
} from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel'
import { getInfo, fetchNovels } from '../actions/index'
import { connect } from 'react-redux'
import SliderEntry from './../components/SlideEntry'
import ListNovels from './../components/ListNovels'

import navigatorStyle from './../../theme/navigationBarStyle'
import styles, { sliderWidth, itemWidth } from './../styles/style'

import SplashScreen from 'react-native-splash-screen'

class MainScrenn extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
      entries: [
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'http://lorempixel.com/600/400/'
        },
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum t',
          illustration: 'https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490558181/snzbs0u5eq73osxdxfat.jpg'
        },
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolo ',
          illustration: 'http://i.imgur.com/MABUbpDl.jpg'
        }],
      data: [{
        "_id": "58ed8ba7865f5600045be54d",
        "author": "Ergen",
        "translation_team": "Saikai Scan",
        "name": "A Will Eternal",
        "description": "Com um pensamento, a terra se torna um vasto mar. Com outro pensamento, transforma um vasto campo de morangos.\n\nCom um pensamento, mil inimigos são mortos. Com outro pensamento, dez mil imortais são mortos.\n\nSomente eu sozinho … serei eterno.\n\nA Will Eternal, ou, também conhecida como A Thought Through Eternity, é uma webnovel do estilo xianxia escrito pelo popular autor chinês Ergen.",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1491962791/v48diswa9d80orugtx3s.jpg"
    },
    {
        "_id": "58ed8a39865f5600045be54c",
        "name": "Ancient Godly Monarch",
        "description": "Dentro da Província dos Nove Céus, muito acima dos céus, existem nove galáxias de rios astrais. Cada um desses rios astrais é composto pela combinação de inúmeras constelações entrelaçadas. Essas nove galáxias também podem ser conhecidas coletivamente como as Nove Camadas do Céu.\n\nA lenda diz que os cultivadores mais fortes da Província dos Nove Céus eram seres que podiam abrir uma porta astral cada vez que avançavam para um novo reino. Seu talento no cultivo era tal que eles podiam até estabelecer ligações inatas com constelações que existiam em uma camada mais alta do que as Nove Camadas do Céu, transformando-se eventualmente em poderes desafiadores do céu e destruidores da Terra conhecidos como os Deuses da Guerra dentro das Nove Camadas de Céu.\n\nQin Wentian é o MC desta história. Como pode um cara, que tem seus meridianos aleijados, cultivar com sucesso? Existem inúmeros Cultivadores Marciais Estelares, do mesmo modo que existem inúmeras constelações dentro do vasto céu estrelado. No entanto, o que ele quer ser, é a constelação mais brilhante de todas, a que brilha mais deslumbrante dentro do vasto e estrelado céu.",
        "author": "Jing Wu Hen",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1491962425/yq6v4bumcyoiq81p0fbr.jpg"
    },
    {
        "_id": "58ed890c865f5600045be548",
        "name": "Ascensão de um Deus",
        "description": "Seu destino era ser para sempre um completo lixo, um ninguém, somente mais um, mas e se o seu futuro lhe reserva algo diferente? Um gênio nascido do nada, um poderoso guerreiro renascido das cinzas da tristeza, angustia, zombaria e desprezo.\n\nLe Chang trilhou seu caminho, pisando nos seus inimigos e transpondo milhares de obstáculos até chegar ao topo de tudo, venha conosco compreender as maravilhas do cultivo, vivenciar as incríveis lutas, conhecer tesouros e ver de perto o caminho que Le Chang trilhou até ser conhecido como Deus.",
        "author": "Calebe Piccoli Camargo",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1491962123/yfkscy9b37n8lbyklfuq.jpg"
    },
    {
        "_id": "58eed907020b6d0004fecb15",
        "name": "Battle Through the Heavens",
        "description": "Em uma terra onde nenhuma magia está presente. Uma terra onde os fortes fazem as regras e os fracos têm de obedecer. Uma terra cheia de atraentes tesouros e encantos, porém também cheia de perigos inesperados. Há três anos atrás, Xiao Yan, que apresentava talentos que não eram vistos em décadas, perdeu tudo em um piscar de olhos, seus poderes, sua reputação e a promessa feita a sua mãe. Que magia era essa que o fez perder todos os seus poderes? E por que sua noiva apareceu de repente?",
        "author": "Heavenly Silkworm Potato, Tian Can Tu Dou",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1492048135/kijancnrqw3szbyy3szp.jpg"
    },
    {
        "_id": "58eeda87020b6d0004fecb16",
        "name": "Cult of the Sacred Runes",
        "author": "Rampaging Snail/Mad Snail",
        "translation_team": "Saikai Scan",
        "description": "O mundo antigo era um local perigoso e estava infestado de abomináveis demônios. Eles caçavam e se banqueteavam com a humanidade, mantendo a civilização humana em um estado constantemente fraco e extinto.\n\nDurante o primeiro ano conhecido, uma montanha mágica do reino dos deuses desceu ao mundo. Uma mensagem estava esculpida nessa montanha enorme: “O céu prevalece”…\n\nApós a Grande Descida, nome que foi dado a descida da montanha, os Três Grandes Sábios percorreram o caminho da Montanha Mística, onde eles aprenderam a cultivar o que hoje chamamos de magia, isto deu a origem aos Cultos Místicos e aos oitenta e um Santuários Sagrados que tinham o dever de orientar a humanidade e com a ajuda dos cultos místicos enfrentar até a morte a luta eterna contra os demônios.",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1492048519/zvartt1kdwcjz6ujzohc.jpg"
    },
    {
        "_id": "58eedc2a020b6d0004fecb17",
        "name": "Heavenly Jewel Change",
        "author": "Tang Jia San Shao",
        "translation_team": "Saikai Scan",
        "description": "Em um mundo onde o poder significa tudo, onde o forte esmaga o fraco, há um garoto filho de um Mestre de Joias Celestiais. Nascido em um pequeno país onde se tem que lutar para sobreviver, do garoto se era esperado grandes feitos. Infelizmente seus meridianos estavam bloqueados o impossibilitando de cultivar, o fazendo se tornar um lixo da sociedade, manchando o orgulho de seu pai, e se tornando a grande desonra de sua noiva…\n\nSendo quase morto “acidentalmente”, os céus finalmente sorriram para ele e um milagre o abençoou, despertando seu potencial como um Mestre de Joia Celestial. Ou… será que isso é mesmo uma dádiva?\n\nJunte-se às aventuras do nosso protagonista malandro e sem vergonha, Zhou Weiqing, observando-o explorar o vasto mundo para chegar ao topo da cultivação, formar um exército, proteger aqueles que ama, e fortalecer seu país.\n\nUm mundo completamente novo, com um novo sistema de poder, armamento sem igual e, claro, um MC (main character) ainda mais único e carismático!!! Venha e junte-se a nós para rirmos e chorarmos juntos nessa mais nova obra-prima do Tang Jia San Shao!!",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1492048938/hoknk4mohg22kqiuxzc5.jpg"
    },
    {
        "_id": "58eedd03020b6d0004fecb18",
        "name": "King of Gods",
        "author": "Fast Food Resturant ( 快餐店)",
        "description": "Ele é persistente e não está disposto a ser normal. Entretanto, o caminho estava destinado a ser esse, nascido em um dos ramos de uma pequena seita.\n\nContudo, um dia, seu olho esquerdo se funde com o olho de um Antigo Deus. A partir daquele momento, ele se transformou de um peixe para um dragão.\n\nEle se levanta igual uma estrela, andando o caminho de um lendário cultivador.\n\nPor ser uma pequena formiga no mundo pequeno, passo a passo ele sobe, para um lugar cheio de poderosas seitas, fortes clãs antigos e inúmeros gênios.\n\nEssa é a era das lendas.",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1492049154/yjfr3a05iffezogcubis.jpg"
    },
    {
        "_id": "599c52c51d932f0004aa726a",
        "name": "Limitless Sword God",
        "author": "Fire God",
        "translation_team": "Saikai Scan",
        "description": "Su Yun era um prodígio, abençoado pelos deuses. No entanto, a vida nunca é tão fácil. Logo depois de seu cultivo atingir o 6° Nível do Reino Espiritual Principiante, seu progresso estagnou devido a uma doença rara.\n\nAlguns anos se passaram, e Su Yun gastou todo o seu tempo em jogatinas e bebedeiras, desperdiçando sua juventude, mas um dia tudo mudou. Qing’er, a única que estava ao seu lado, foi forçada por seu clã a ser uma noiva sacrificial para alguém que ela não amava, apenas para ser executada pelo seu noivo na noite de núpcias por tentar fugir. Ardendo pelas chamas da vingança, ele revirou o mundo em busca de uma cura para sua rara doença.\n\nInúmeros anos passaram e, finalmente, Su Yun não só encontrou uma maneira de curar sua doença, mas também ganhou um imenso conhecimento sobre uma miríade de técnicas marciais.\n\nMas antes que ele pudesse se curar completamente, ele recebeu notícias de que a pessoa que assassinara Qing’er sofreu um ataque que danificou seus órgãos internos. Ao invés de esperar por décadas para se tornar totalmente curado, Su Yun decidiu bolar um plano para o assassinato do ex-noivo de Qing’er. Infelizmente, ele subestimou a força da família do ex-noivo e foi ele quem acabou morto.\n\nMas então ele recupera a consciência e percebe que ele retornou 15 anos no passado. Desta vez, ele prometeu proteger Qing’er. Mas primeiro ele deve curar sua rara doença. Será que ele vai aprender com os erros de sua vida anterior ou se repetirá tudo de novo?",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503417029/qiojdmvgvxrskonqhdng.png"
    },
    {
        "_id": "599c54191d932f0004aa726b",
        "name": "Martial World",
        "description": "No reino dos deuses, inúmeras lendas lutaram por um cubo misterioso. Depois da batalha, todos desapareceram no vazio. Lin Ming tropeça neste misterioso objeto e começa sua jornada para se tornar um herói da terra.",
        "author": "Canjian Li De Niu / Cocooned Cow",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503417369/wyxlmiqqf5y41qlb7fhw.png"
    },
    {
        "_id": "599c558d1d932f0004aa726c",
        "name": "Mundo dos Titãs - Vol. 1",
        "author": "Edson Fernandes da Costa",
        "description": "Kyoran vivia uma vida de liberdade como alpinista, com vinte e um anos ele mal parava em casa. Em uma de suas aventuras numa escalada no Pico do Silêncio (uma montanha considerada muito perigosa), ele escuta estranhos barulhos metálicos de dentro da cabana de pano, ao sair armado ele constata não estar sozinho, várias luzes circulam as montanhas pela madrugada.\n\nEnquanto ainda está tentando entender o que ocorre, uma figura de armadura dourada do pé a cabeça aterrissa a alguns metros dele, logo após outra figura de azul, e aí espadas começam a se cruzar, pra piorar, um enorme dragão voa no céu. Um acidente dentro da troca de golpes entre os dois de armaduras brilhantes acabam atingindo Kyoran. Ao acordar do que pareceu um desmaio ele dá de cara com a linda princesa Aiya, a mulher que vestia a armadura de ouro, ela diz que o salvou e que agora a vida dele pertence a ela.",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503417740/chfgldpkiutuuwvdgez7.png"
    },
    {
        "_id": "599c55e21d932f0004aa726d",
        "name": "Mundo dos Titãs – Vol. 2",
        "author": "Edson Fernandes da Costa",
        "description": "Continuando a história, Kyoran enfrenta Lilithi para voltar e encarar seus medos no Mundo dos Titãs. Sua volta trará consequências ainda maiores e uma verdadeira reviravolta entre as forças do mal.\n\nNesse novo volume Kyoran passará por mais provações descobrindo que agora é o titã da profecia, o titã esperado a centenas de anos que teria o poder de decidir o destino do mundo. Kyoran chama atenção de outras raças, de outras criaturas, de monstros e muitas outras coisas.\n\nLilithi e Aiya começam um duelo pelo coração de Kyoran, qual será a escolha dele?",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503417826/aifpbl9dza85d4q2gtlp.png"
    },
    {
        "_id": "599c57d81d932f0004aa726e",
        "name": "O Último Herdeiro Da Luz",
        "author": "Rafael Batista",
        "description": "Há muito tempo… uma grande guerra ocorreu no mundo. Aqueles que se intitulavam como os deuses antigos e praticamente toda a raça humana foram exterminados. A história real dos eventos ocorridos foi esquecida há muitos anos.\n\nHoje, 2 Milhões de anos se passaram desde aquilo… a Humanidade se recuperou. Rumores dão conta de que até mesmo os deuses reconstruíram o seu império em algum lugar distante.\n\nAtualmente, o mundo está de repleto Vilarejos, Províncias, Cidades e Países que estão espalhados por todos os cantos. Nesse mundo, o forte domina o mais fraco e a luta é o melhor argumento. Lutar é um estilo de vida e se alguém não se encaixa nele… Essa pessoa não merece desfrutar da vida",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503418327/zo3pdyxeir5pskla60sq.png"
    },
    {
        "_id": "599c5ca11d932f0004aa726f",
        "name": "Panlong",
        "translation_team": "Saikai Scan",
        "description": "Impérios ascendem e caem no continente Yulan. Santos, seres imortais de poder inimaginável, batalham usando magias e espadas, deixando um rastro de destruição pelo caminho. Bestas mágicas governam as montanhas onde os bravos – ou os tolos – vão testar sua força. Até mesmo os de grande poder podem cair, se tornando banquete para aquele mais forte. Os fortes vivem como realeza e os fracos lutam pra sobreviver mais um dia.\n\nEste é o mundo em que Linley nasceu.  Vivendo na pequena cidade de Wushan, Linley é descendente do antigo Clã Baruch, o clã dos lendários Guerreiros Sangue de Dragão. Sua fama, uma vez, abalou o mundo, mas hoje o clã está tão decrépito ao ponto de sobreviver a base da venda de seus bens. Com o objetivo de recuperar a glória perdida de seu clã, Linley vai passar por inúmeras dificuldades e tribulações, fazendo poderosos amigos, mas também inimigos mortais.\n\nTestemunhe a nova lenda. A lenda de Linley Baruch.",
        "author": "Eat Tomatoes",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503419552/ywgblhzdaqm5ffugrrg2.png"
    },
    {
        "_id": "58d823ed8f3f0e0004f4d2a1",
        "name": "Rebirth of the Thief Who Roamed the World",
        "description": "Conviction, o maior VRMMO do mundo, era quase um segundo mundo para a humanidade. Já tinha se integrado a economia do mundo real, com empresas e pessoas em busca de fortuna dentro do jogo.\n\nNesse jogo, Nie Yan se orgulhava de seu personagem, um ladrão nível 180. Mas, essa era a única coisa de que ele podia se orgulhar. Estava sem dinheiro e não conseguia avançar na vida; uma situação causada pelo inimigo do seu pai. Se não fosse pelo dinheiro feito vendendo itens em Conviction, ele mal seria capaz de se alimentar. No final, ele decidiu acabar com esse problema de uma vez por todas. Ele assassinou o inimigo de seu pai. Porém, durante a perseguição, ele tomou um tiro e acabou morrendo.\n\nEntretanto, isso não foi o fim da história. Ao invés disso, ele acordou alguns momentos depois e descobriu que tinha reencarnado no seu “eu” de antigamente. Armado com experiência e conhecimento de futuros eventos, ele avança para viver uma nova vida.",
        "author": "Mad Snail",
        "translation_team": "Saikai Scan",
        "cover_url": "https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490559980/fufpcmc3e0cuq7vtvvpr.jpg"
    },
    {
        "_id": "599c5d781d932f0004aa7270",
        "name": "Shen Yin Wang Zuo",
        "author": "Tang Jia San Shao",
        "translation_team": "Saikai Scan",
        "description": "Enquanto os demônios estavam em ascensão, os humanos estavam prestes a serem extintos. Seis templos lutam para defender o que sobrou da humanidade. Um jovem garoto se junta a um templo para ajudar sua mãe. Durante sua jornada de maravilhas e travessuras no mundo dos templos e demônios, será que ele irá se tornar o cavaleiro mais poderoso e herdar o trono?",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503419767/gthnnsyj61mfoyrvjwla.png"
    },
    {
        "_id": "58d822dc8f3f0e0004f4d2a0",
        "name": "Star Martial God Technique",
        "description": "No mundo existem doze caminhos para subir a torre de Deus, e contam as lendas que estes doze caminhos levam à lendária estrada da imortalidade. No entanto, esses caminhos para a Torre de Deus, são extremamente longos, sem fim.\n\nNos tempos antigos haviam diversos tipos de artes marciais, mas, infelizmente, o mundo passou por mudanças horríveis e restaram apenas três: as Artes Marciais da Chama, do Dragão e da Estrela. As Gerações de especialistas dessas três artes marciais estão à procura da estrada da imortalidade.\n\nPraticantes das Artes Marciais da Estrela, juntamente com a geração jovem, tentam durante toda sua vida encontrá-la para se tornar o Deus mais forte.",
        "author": "Rampaging Snail/Mad Snail",
        "translation_team": "Saikai Scan",
        "cover_url": "https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490559707/ddcmhswhxbv0jch690iu.jpg"
    },
    {
        "_id": "58d81ce68f3f0e0004f4d29f",
        "translation_team": "Saikai Scan",
        "author": "Rampaging Snail/Mad Snail",
        "name": "Tales of Demons and Gods",
        "description": "Nie Li, o mais forte Espiritualista de Demônios em sua vida passada, estava de pé no pináculo do mundo marcial. No entanto, ele perdeu sua vida durante a batalha contra o Sábio Imperador e mais seis Bestas rank Divino. Sua alma, então voltou no tempo, para quando ele ainda tinha apenas 13 anos. Embora ele fosse o mais fraco em sua classe, com o pior talento, e tivesse apenas um Reino da Alma Vermelho, com o auxílio do vasto conhecimento que tinha acumulado em sua vida anterior, ele deve treinar mais rápido que qualquer um.\n\nDesta vez, ele vai tentar proteger a Cidade da Gloria, que no futuro próximo, será atacada por bestas e acabará sendo destruída, bem como proteger sua amada, amigos e familiares que morreram neste ataque. Além de destruir a Família Sagrada, que abandonou o seu dever e traiu a Cidade da Glória em sua vida passada.",
        "cover_url": "https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490558181/snzbs0u5eq73osxdxfat.jpg"
    },
    {
        "_id": "599c5e001d932f0004aa7271",
        "name": "The Beginning After The End",
        "author": "TurtleMe",
        "description": "Dizem que a solidão acompanha aqueles com grande poder. Permanecendo como um Rei com força incomparável, status, e fama… e muito mais. Eu, que uma vez lutei para viver, me afogava em meu raso trono sem nenhuma vontade ou propósito. Haviam muitos que tinham inveja de mim, mas eu diria de bom grado, “Tirem tudo de mim! Será meu presente!” Um dia, eu finalmente consegui meu presente – uma nova vida.\n\nCom uma segunda chance de corrigir meus erros e cumprir meus arrependimentos, permita-me mostrar a você o que um (ex-rei) pode fazer!",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503419903/k3x5j8qdrd787clyvbj9.png"
    },
    {
        "_id": "599c5e451d932f0004aa7272",
        "name": "World of Immortals",
        "description": "O Mundo dos Imortais, é o mundo que todos os mortais desejam. Para muitos, é uma glória eterna causar uma distorção espacial e entrar no Mundo dos Imortais. Mas as mudanças do tempo é simplesmente implacáveis, as lendas sobre a imortalidade foram esquecidas há muito tempo. No entanto, um milagre renascerá! Um imortal estava prestes a dividir o espaço com artes marciais e cortar todos os laços com o mundo mortal. O protagonista, Xiao Chen, foi apanhado neste evento e acidentalmente entrou no Mundo dos Imortais. O que eles encontrarão no vasto mundo além da fissura?",
        "author": "Chen Dong",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1503419972/pgdcahjrpgb7ixraymks.png"
    },
    {
        "_id": "58d8258d8f3f0e0004f4d2a2",
        "name": "Wu Dong Qian Kun",
        "description": "No Grande Império Yan existe em um mundo onde o respeito só pode ser obtido através da força. Dentro deste Grande Império Yan, os quatro grandes clãs sempre ficaram acima do resto. Entre eles, um incidente particular no Clã Lin resultou no afastamento de um certo indivíduo que passou a cuidar da sua própria família, na esperança de um dia ser reconhecido novamente pelo Clã Lin, e reunindo-os …\n\nAntes de sua família ser banida do Grande Clã Lin, quando Lin Dong era muito jovem, ele assistiu, impotente, como seu pai talentoso foi facilmente esmagado e aleijado pelo grande gênio do grande Clã Lin, Lin Langtian.\n\nCom um pai desesperado, um avô de coração partido, e uma família sofredora, desde esse dia fatídico, Lin Dong foi impulsionado por um intenso propósito. Se vingar do homem que tinha tirado tudo dele e de sua família.",
        "author": "Tian Can Tu Dou",
        "translation_team": "Saikai Scan",
        "cover_url": "https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490560397/rdwy2embov3vwdgv5fc2.jpg"
    },
    {
        "_id": "58e13b80bdf9eb0004ed7dba",
        "name": "Zhan Long",
        "description": "Li Xiao Yao deixou a SWAT para se tornar um segurança comum. Enquanto trabalhava, ele entrou em um camarim e viu Lin Wang Er enquanto se trocava. Como vingança, ela o levou em um passeio e o chutou para fora do carro.\n\nApós horas de caminhada, Li Xiao Yao finalmente conseguiu voltar para casa apenas para ser despejado de casa. Em seguida, ele recebeu uma oferta do seu ex-chefe para se tornar o guarda-costas da filha do CEO da Corporação Tian Xi, tanto no jogo como na realidade. Mas quando ele descobriu quem ela era…",
        "author": "Shi Luo Ye",
        "translation_team": "Saikai Scan",
        "cover_url": "http://res.cloudinary.com/dwvrdf3zg/image/upload/v1491155840/tuyo9pds7jrfnjtspnof.png"
    }],
      slider1ActiveSlide: 1
    }
    this.goToNovelScreen = this.goToNovelScreen.bind(this)
    this._renderItemWithParallax = this._renderItemWithParallax.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
  }

  goToNovelScreen (screen) {
    this.props.navigator.push({
      screen: 'novel',
      title: 'Novel Screen'
    })
  }

  async componentWillReceiveProps (nextProps) {
    if (nextProps !== this.props) {
      console.log('nextProps', nextProps)
      await this.setState({ data: nextProps.novels })
      console.log('data after nextProps', this.state.data)
    }
  }

  componentDidMount () {
    const { fetchNovels } = this.props
    fetchNovels()
    SplashScreen.hide()
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax
        parallaxProps={parallaxProps}
      />
    )
  }
  _renderHeader (){
    return (
      <View style={styles.container}>

          <Carousel
            data={this.state.entries}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages
            firstItem={1}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.6}
            enableMomentum={false}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
          />
          <Pagination
            dotsLength={this.state.entries.length}
            activeDotIndex={this.state.slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      </View>
    )
  }

  render () {
    const { data } = this.state
    return (
        <View style={{ flex: 1 }}>
          <ListNovels header={this._renderHeader()} data={data} changeScreen={this.goToNovelScreen} />
        </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.main.info,
    novels: state.main.novels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(getInfo()),
    fetchNovels: () => dispatch(fetchNovels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScrenn)
