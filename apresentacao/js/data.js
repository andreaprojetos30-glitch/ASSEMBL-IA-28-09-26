/**
 * Fatos, números e fontes desta apresentação.
 * Narrativa fixa das telas fica no HTML.
 * Novas etapas acrescentam objetos aqui sem reescrever a navegação.
 *
 * Origem interna:
 * - vizinhos.xlsx (planilha da assembleia)
 * - Logo.docx
 * - foto no empreendimento1/2 - grupo bloco.jpeg
 */
window.PDS = {
  screens: [
    { id: "visao", label: "Visão" },
    { id: "entorno", label: "Entorno" }
  ],

  place: {
    name: "Condomínio Residencial Porta do Sol",
    short: "Porta do Sol",
    line: "Avenida Hilton Souto Maior · Portal do Sol · João Pessoa",
    here: "Você está aqui",
    detail:
      "O ponto correspondente no OpenStreetMap está nomeado como Porta do Sol Residence Privê — o mesmo condomínio indicado na planilha de vizinhos da assembleia.",
    anchor: {
      label: "Ponta do Seixas",
      note: "cerca de 1,7 km a nordeste, em linha reta",
      x: 86,
      y: 11
    }
  },

  neighbors: [
    {
      id: "cabo-branco",
      name: "Cabo Branco Residence Privê",
      short: "Cabo Branco Privê",
      x: 60,
      y: 30,
      distance: "cerca de 240 m",
      fact: "Condomínio horizontal de casas.",
      sale: {
        price: "R$ 1.950.000",
        detail: "Casa anunciada com 4 suítes e 400 m².",
        publisher: "MGF Imóveis · anúncio Imoveis JP",
        url: "https://pb.mgfimoveis.com.br/casa-no-condominio-cabo-branco-prive-4-suites-400m-venda-pb-joao-pessoa-290275493",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-cabo"]
    },
    {
      id: "extremo",
      name: "Residencial Extremo Oriental",
      short: "Extremo Oriental",
      x: 74,
      y: 46,
      distance: "cerca de 530 m",
      fact: "Condomínio de casas.",
      sale: {
        price: "R$ 2.550.000",
        detail: "Casa anunciada com 5 suítes e 410 m².",
        publisher: "Deztop",
        url: "https://deztop.com/br/imovel/295816010/casa-condominio-5-dormitorios-joao-pessoa-condominio-extremo",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-extremo"]
    },
    {
      id: "americas",
      name: "Condomínio das Américas",
      short: "Das Américas",
      x: 66,
      y: 28,
      distance: "eixo da orla",
      fact: "Condomínio de casas de alto padrão.",
      sale: {
        price: "R$ 5.800.000",
        detail: "Casa anunciada com 6 suítes e cerca de 394 m².",
        publisher: "Luxo Capital Imobiliário",
        url: "https://www.luxocapitalimobiliario.com.br/imovel/casa-no-condominio-das-americas-joao-pessoa-portal-do-sol-6-quartos-4-garagens-venda-ref-116/",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-americas"]
    },
    {
      id: "greenhouse",
      name: "Green House Alliance",
      short: "Green House",
      x: 28,
      y: 62,
      distance: "lançamento",
      fact: "Condomínio de casas da Alliance, em construção.",
      sale: {
        price: "A partir de R$ 2.269.733",
        detail: "Casa de 182 m². Preço anunciado de lançamento.",
        publisher: "Apto",
        url: "https://apto.vc/br/pb/joao-pessoa/portal-do-sol/alliance-green-house",
        note: "Preço de anúncio, consultado em 27 de setembro de 2026. Valor inicial, não é média do condomínio."
      },
      photos: [],
      sourceIds: ["venda-greenhouse"]
    },
    {
      id: "bloco",
      name: "Empreendimento Grupo Bloco",
      short: "Grupo Bloco",
      x: 38,
      y: 70,
      distance: "Em frente",
      fact: "Empreendimento em frente ao condomínio. Imagens do material da assembleia.",
      sale: {
        price: "Sem preço publicado",
        detail: "Não há anúncio de venda com valor localizado para este empreendimento.",
        publisher: "",
        url: "",
        note: "Busca em 27 de setembro de 2026. A planilha da assembleia identifica o Grupo Bloco, sem valor de venda."
      },
      photos: [
        { src: "assets/grupo-bloco-1.jpg", alt: "Imagem do empreendimento Grupo Bloco, vista aérea, constante no material da assembleia." },
        { src: "assets/grupo-bloco-2.jpg", alt: "Imagem do empreendimento Grupo Bloco, fachada, constante no material da assembleia." }
      ],
      sourceIds: ["vizinhos", "fotos-bloco"]
    }
  ],

  stats: [
    {
      id: "altiplano-m2",
      value: 10550,
      format: "currency",
      label: "Altiplano Cabo Branco",
      note: "Preço médio anunciado por m²",
      sourceId: "myside"
    },
    {
      id: "altiplano-12m",
      value: 14.3,
      format: "percent",
      decimals: 1,
      label: "Altiplano Cabo Branco",
      note: "Variação em 12 meses · anúncios",
      sourceId: "myside"
    },
    {
      id: "jp-12m",
      value: 8.12,
      format: "percent",
      decimals: 2,
      label: "João Pessoa",
      note: "Variação em 12 meses · FipeZAP",
      sourceId: "fipe"
    }
  ],

  sources: [
    {
      id: "vizinhos",
      title: "Planilha de vizinhos da assembleia",
      publisher: "Material interno — vizinhos.xlsx",
      date: "Arquivo da pasta da assembleia",
      accessed: "27 de setembro de 2026",
      url: "",
      supports:
        "Nomes e endereços do Cabo Branco Residence Privê, Green House Alliance, Residencial Extremo Oriental, Condomínio das Américas e Empreendimento Grupo Bloco. Também a indicação de 1,5 km entre o Green House e a Praia do Seixas, e de que o Grupo Bloco fica em frente ao condomínio."
    },
    {
      id: "fotos-bloco",
      title: "Imagens do Grupo Bloco",
      publisher: "Material interno — fotos do empreendimento",
      date: "Arquivos da pasta da assembleia",
      accessed: "27 de setembro de 2026",
      url: "",
      supports: "Fotografias ou imagens de divulgação usadas apenas no card do empreendimento em frente."
    },
    {
      id: "osm",
      title: "OpenStreetMap — pontos nomeados",
      publisher: "OpenStreetMap",
      date: "Consulta ao Nominatim em 27 de setembro de 2026",
      accessed: "27 de setembro de 2026",
      url: "https://www.openstreetmap.org/?mlat=-7.15883&mlon=-34.80834#map=16/-7.1588/-34.8050",
      supports:
        "Coordenadas de Porta do Sol Residence Privê (−7,15883, −34,80834), Condomínio Residence Cabo Branco Privê e Condomínio Extremo Oriental. Distâncias em linha reta: cerca de 240 m e cerca de 530 m. Ponta do Seixas a cerca de 1,7 km a nordeste. Não é distância por rua."
    },
    {
      id: "scielo",
      title: "O solo urbano e a apropriação da natureza na cidade",
      publisher: "Revista Sociedade & Natureza — SciELO",
      date: "Artigo acadêmico",
      accessed: "27 de setembro de 2026",
      url: "https://www.scielo.br/j/sn/a/4H4hNqPtJBrxrkqmtYQcYMt/?format=html&lang=pt",
      supports:
        "O Cabo Branco Residence Privê é citado como loteamento de condomínio fechado horizontal, aprovado em 1998, no litoral sul de João Pessoa."
    },
    {
      id: "venda-cabo",
      title: "Casa no Condomínio Cabo Branco Privê, 4 suítes e 400 m²",
      publisher: "MGF Imóveis · anúncio de Imoveis JP",
      date: "Anúncio imobiliário",
      accessed: "27 de setembro de 2026",
      url: "https://pb.mgfimoveis.com.br/casa-no-condominio-cabo-branco-prive-4-suites-400m-venda-pb-joao-pessoa-290275493",
      supports: "Preço anunciado de R$ 1.950.000 para uma casa de 400 m² no Cabo Branco Residence Privê. É um anúncio, não a média do condomínio."
    },
    {
      id: "venda-extremo",
      title: "Casa de alto padrão no Condomínio Extremo Oriental",
      publisher: "Deztop",
      date: "Anúncio imobiliário",
      accessed: "27 de setembro de 2026",
      url: "https://deztop.com/br/imovel/295816010/casa-condominio-5-dormitorios-joao-pessoa-condominio-extremo",
      supports: "Preço anunciado de R$ 2.550.000 para uma casa de 410 m² com 5 suítes no Residencial Extremo Oriental."
    },
    {
      id: "venda-americas",
      title: "Casa no Condomínio das Américas",
      publisher: "Luxo Capital Imobiliário",
      date: "Anúncio imobiliário",
      accessed: "27 de setembro de 2026",
      url: "https://www.luxocapitalimobiliario.com.br/imovel/casa-no-condominio-das-americas-joao-pessoa-portal-do-sol-6-quartos-4-garagens-venda-ref-116/",
      supports: "Preço anunciado de R$ 5.800.000 para uma casa de cerca de 394 m² com 6 suítes no Condomínio das Américas."
    },
    {
      id: "venda-greenhouse",
      title: "Alliance Green House",
      publisher: "Apto",
      date: "Página do lançamento",
      accessed: "27 de setembro de 2026",
      url: "https://apto.vc/br/pb/joao-pessoa/portal-do-sol/alliance-green-house",
      supports: "Preço anunciado a partir de R$ 2.269.733 para a planta de 182 m². Empreendimento em construção, da Alliance."
    },
    {
      id: "americas",
      title: "Condomínio das Américas",
      publisher: "Site do empreendimento",
      date: "Página consultada em 2026",
      accessed: "27 de setembro de 2026",
      url: "https://condominiodasamericas.com.br/",
      supports:
        "Condomínio de alto padrão na Av. Panorâmica, com parque informado em cerca de 66 mil m². O número 500 do endereço é o da planilha da assembleia; o material comercial do empreendimento também usa a Av. Panorâmica, sem o mesmo número em todas as páginas."
    },
    {
      id: "fipe",
      title: "Índice FipeZAP — informe de venda residencial de agosto de 2026",
      publisher: "Fundação Instituto de Pesquisas Econômicas (FIPE)",
      date: "Agosto de 2026",
      accessed: "27 de setembro de 2026",
      url: "https://downloads.fipe.org.br/indices/fipezap/fipezap-202608-residencial-venda.pdf",
      supports:
        "João Pessoa: preço médio de R$ 8.387/m² e alta de 8,12% em 12 meses. No mesmo informe, o Índice FipeZAP nacional acumulou 5,49% em 12 meses. O índice acompanha preços de anúncios de apartamentos prontos, não avaliação de casas do Porta do Sol."
    },
    {
      id: "myside",
      title: "10 bairros mais caros de João Pessoa (PB) em 2026",
      publisher: "MySide",
      date: "Atualizado em 4 de setembro de 2026; valores atribuídos ao FipeZAP de agosto de 2026",
      accessed: "27 de setembro de 2026",
      url: "https://myside.com.br/guia-imoveis/bairros-mais-caros-joao-pessoa-pb",
      supports:
        "Altiplano Cabo Branco: R$ 10.550/m² e +14,30% em 12 meses. Portal do Sol, no mesmo recorte e fora dos números principais da tela: R$ 5.722/m² e +6,50% em 12 meses. O preço médio da cidade citado na página (R$ 8.387/m²) coincide com o informe oficial de agosto de 2026. São preços de anúncio."
    },
    {
      id: "logo",
      title: "Marca do condomínio",
      publisher: "Material interno — Logo.docx",
      date: "Arquivo da pasta da assembleia",
      accessed: "27 de setembro de 2026",
      url: "",
      supports: "Logotipo e cor grafite da identidade visual."
    }
  ]
};
