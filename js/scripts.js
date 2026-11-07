const i18n = {
    pt: {
        s1Title: "Geoprocessamento",
        s1Subtitle: "Da órbita terrestre à precisão milimétrica em campo",
        s1Team: "Integrantes da Equipe:",
        s1Hint: "Pressione <kbd>→</kbd> para iniciar",
        
        s2Title: "Geoprocessamento e Sensoriamento",
        s2C1Title: "Geoprocessamento",
        s2C1Desc: "Processamento de dados georreferenciados. Envolve modelagem de banco de dados espaciais, cruzamento de informações (ex: focos de incêndio vs. desmatamento) e muita estatística.",
        s2C2Title: "Sensoriamento Remoto",
        s2C2Desc: "Captação de informações de objetos sem contato físico através de sensores instalados em satélites, aviões ou drones, que medem a radiação eletromagnética refletida.",
        
        s3Title: "Programa de Satélites 3D (NASA)",
        s3Desc: "Interaja com os satélites em tempo real. Gire o globo, dê zoom e clique sobre eles para ver informações orbitais e instrumentos a bordo.",
        
        s4Title: "Topografia e Geodésia",
        s4C1Title: "Geodésia (A Forma da Terra)",
        s4C1Desc: "A Terra não é uma esfera perfeita, mas um Geoide ou Elipsoide matemático. A Geodésia define o datum (ex: SIRGAS 2000) necessário para o GPS funcionar.",
        s4C2Title: "Topografia",
        s4C2Desc: "Atua em porções locais (até ~30 km) onde a superfície é considerada plana. Essencial para projetos precisos de engenharia civil, estradas e loteamentos.",
        s4C3Title: "Ajustamento de Observações",
        s4C3Desc: "Toda medição contém erros inerentes. O Método dos Mínimos Quadrados (MMQ) distribui matematicamente esses erros para encontrar a coordenada mais provável.",
        
        s5Title: "Instrumentos de Medição em Campo",
        s5I1Title: "Estação Total",
        s5I1Desc: "Une teodolito eletrônico (ângulos) e distanciômetro a laser. Exige 'visada' direta para o ponto com um prisma. Precisão de poucos milímetros.",
        s5I2Title: "Receptor GNSS (RTK)",
        s5I2Desc: "O sistema Base-Rover usa satélites (GPS, GLONASS) com correções de rádio/internet (NTRIP) para atingir precisão de centímetros instantaneamente.",
        s5I3Title: "Drone / VANT",
        s5I3Desc: "Fotogrametria: Captura milhares de fotos sobrepostas do alto. O software processa tudo para criar Modelos 3D do terreno e ortomosaicos atualizados.",

        sSoftTitle: "Principais Softwares",
        sSoft1Title: "QGIS",
        sSoft1Desc: "Software livre (Open Source), acessível e extremamente poderoso. Padrão na academia e empresas para manipulação de vetores e imagens de satélite.",
        sSoft2Title: "ArcGIS Pro",
        sSoft2Desc: "Solução comercial robusta da Esri. Considerado o padrão da indústria global para grandes volumes de dados, análises complexas e inteligência espacial (GIS).",
        sSoft3Title: "AutoCAD Civil 3D",
        sSoft3Desc: "Focado no lado da engenharia, infraestrutura e topografia. Fundamental para cálculo de volume de terraplenagem, traçado de rodovias e loteamentos.",
        sSoft4Title: "Métrica TOPO",
        sSoft4Desc: "Sistema brasileiro especializado no fluxo de trabalho de topografia, processamento de memoriais descritivos, georreferenciamento de imóveis e CAR.",

        sDevTitle: "Tecnologia e Análise Avançada",
        sDev1Title: "Banco de Dados Geográficos",
        sDev1Desc: "Armazenamento eficiente de geometrias complexas usando SQL avançado. O ecossistema PostgreSQL integrado à extensão PostGIS é o padrão para consultas espaciais.",
        sDev2Title: "Análise Espacial",
        sDev2Desc: "Cruzamento e interpretação de matrizes de dados para resolver problemas complexos em planejamento urbano, gestão ambiental, rotas logísticas e agricultura.",
        sDev3Title: "Automação e Programação",
        sDev3Desc: "Criação de scripts (frequentemente em Python) para otimizar fluxos de processamento de imagens de satélite e manipulação de Big Data de campo.",

        sEmpTitle: "Instituições e Aplicações Reais",
        sEmp1Title: "CENSIPAM",
        sEmp1Desc: "Centro Gestor e Operacional do Sistema de Proteção da Amazônia. Monitora inteligência territorial na selva usando radares e constelações de satélites.",
        sEmp2Title: "EMBRAPA",
        sEmp2Desc: "Aplica intensamente o geoprocessamento no zoneamento agrícola, monitoramento de qualidade do solo e agricultura de precisão para aumentar safras.",
        sEmp3Title: "CPRM (Serviço Geológico)",
        sEmp3Desc: "Responsável pelo mapeamento geológico nacional, fundamental para identificar áreas de risco geológico, inundações e gerir recursos hídricos e minerais.",
        sEmp4Title: "IBGE",
        sEmp4Desc: "O IBGE gerencia a malha geodésica oficial (SIRGAS 2000 / RBMC) e toda a base cartográfica e territorial do Brasil.",
        sEmp5Title: "INPE",
        sEmp5Desc: "O INPE é referência global no desenvolvimento de satélites e no monitoramento contínuo de desmatamento e queimadas, com projetos como PRODES e DETER.",

        s6Title: "Mapa Interativo",
        s6Desc: "Explore camadas vetoriais, imagens de satélite, lugares de referência em Belém/UFPA e ferramentas práticas de SIG em tempo real.",
        
        s7Title: "Análise de Imóvel Rural",
        s7C1Title: "Georreferenciamento",
        s7C1Desc: "Levantamento preciso dos limites da propriedade, certificando no SIGEF/INCRA para garantir que não há sobreposição com áreas de vizinhos ou terras indígenas.",
        s7C2Title: "CAR (Cadastro Ambiental)",
        s7C2Desc: "Registro eletrônico obrigatório. Usa imagens de satélite para mapear Áreas de Preservação Permanente (APP) e Reserva Legal de cada fazenda.",
        s7C3Title: "Agricultura de Precisão",
        s7C3Desc: "Uso de drones e satélites para gerar índices vegetativos (NDVI). Mapeia a saúde da lavoura para que o trator aplique insumos de forma econômica.",
        
        s8Title: "OBRIGADO!",
        s8Subtitle: "Universidade Federal do Pará - UFPA",
        btnRestart: "Reiniciar Apresentação",
        auto_1: "EN",
        auto_2: "Leandro Haick",
        auto_3: "Amanda Caldas",
        auto_4: "Sthefany Vitória",
        auto_5: "Karla Eduarda",
        auto_6: "Maria Reis",
        auto_7: "Lucas Cruz",
        auto_8: "Geoprocessamento",
        auto_9: "O <strong>Geoprocessamento</strong> engloba um conjunto poderoso de tecnologias para coleta, armazenamento, tratamento e análise de dados com referência espacial (localização geográfica).",
        auto_10: "É através dele que transformamos o mundo real em modelos digitais, permitindo o cruzamento de informações para gestão ambiental, planejamento urbano e agricultura de precisão.",
        auto_117: "O fluxo de trabalho começa com a <strong>coleta</strong> de dados em campo, imagens de satélite ou drones. Depois, essas informações são organizadas em camadas, analisadas em conjunto e transformadas em mapas que apoiam decisões mais rápidas e seguras.",
        auto_118: "Assim, o geoprocessamento conecta tecnologia e território: revela padrões, identifica mudanças e ajuda a planejar cidades, proteger o meio ambiente e produzir alimentos com mais eficiência.",
        auto_11: "Sensoriamento Remoto",
        auto_12: "O <strong>Sensoriamento Remoto</strong> é a ciência de obter informações sobre um alvo ou área na Terra sem contato físico direto.",
        auto_13: "Ele funciona através de sensores acoplados em <strong>satélites, aviões ou drones</strong>, que captam e medem a radiação eletromagnética (luz, calor, radar) refletida pela superfície terrestre.",
        auto_14: "<i class=\"ph ph-hand-pointing\"></i> Interaja com o modelo 3D do satélite GOES-R (NASA)",
        auto_15: "<i class=\"ph ph-planet icon-spin\"></i> <span data-i18n=\"s3Title\">Programa de Satélites 3D (NASA)</span>",
        auto_16: "Plataformas Globais",
        auto_17: "Acesse em tempo real painéis de monitoramento de satélites e sensores espalhados pelo globo clicando nas ferramentas abaixo.",
        auto_18: "Orbital Radar",
        auto_19: "Monitoramento e acompanhamento de trajetórias de satélites e estações espaciais.",
        auto_20: "Abrir Navegador <i class=\"ph ph-arrow-up-right\"></i>",
        auto_21: "Osiris AI Live",
        auto_22: "Camadas marítimas, clima, incidentes, sismologia e câmeras globais ao vivo.",
        auto_23: "Abrir Navegador <i class=\"ph ph-arrow-up-right\"></i>",
        auto_24: "<i class=\"ph ph-globe-hemisphere-east icon-pulse\"></i> Geodésia",
        auto_25: "A <strong>geodésia</strong> é a ciência que estuda a <strong>forma</strong>, as <strong>dimensões</strong> e o <strong>campo de gravidade</strong> da Terra, considerando a curvatura do planeta em grandes extensões.",
        auto_26: "<i class=\"ph ph-books\"></i> Resumo",
        auto_27: "Forma da Terra",
        auto_28: "Estuda o formato real (<strong>Geoide</strong>) e matemático (<strong>Elipsoide</strong>).",
        auto_29: "Gravidade e Rotação",
        auto_30: "Mede a gravidade e o movimento da Terra no espaço.",
        auto_31: "Base para o GPS",
        auto_32: "Sem geodésia, seu celular não saberia onde você está!",
        auto_33: "Mapas Globais",
        auto_34: "Permite mapear países inteiros sem deformar as distâncias.",
        auto_35: "Geoide: O formato real (e \"amassado\") da Terra",
        auto_36: "Coordenadas: Latitude e Longitude globais",
        auto_37: "<i class=\"ph ph-link-simple\"></i> Fontes:\n                    <a href=\"https://m3e.com.br/solucoes/geodesia/\" target=\"_blank\">M3E</a> ·\n                    <a href=\"https://comunica.ufu.br/noticias/2020/05/geodesia-e-forma-da-terra\" target=\"_blank\">Comunica UFU</a> ·\n                    <a href=\"https://lume.ufrgs.br/bitstream/handle/10183/256683/001165828.pdf?sequence=1\" target=\"_blank\">LUME UFRGS</a> ·\n                    <a href=\"https://topografia.paginas.ufsc.br/\" target=\"_blank\">Topografia UFSC</a> ·\n                    YouTube:\n                    <a href=\"https://www.youtube.com/watch?v=hHYYJFbOL1M&amp;t=132\" target=\"_blank\">[1]</a>\n<a href=\"https://www.youtube.com/watch?v=ejwh5mtZ7WQ&amp;t=45\" target=\"_blank\">[2]</a>\n<a href=\"https://www.youtube.com/watch?v=ZTo34spW8ME&amp;t=41\" target=\"_blank\">[3]</a>\n<a href=\"https://www.youtube.com/watch?v=hwbRlhhcIv4\" target=\"_blank\">[4]</a>",
        auto_38: "M3E",
        auto_39: "Comunica UFU",
        auto_40: "LUME UFRGS",
        auto_41: "Topografia UFSC",
        auto_42: "<i class=\"ph ph-mountains\"></i> Topografia",
        auto_43: "A <strong>topografia</strong> atua no mapeamento de áreas menores (geralmente até 50 km²), onde a superfície terrestre é considerada <strong>plana</strong> (Plano Topográfico). É essencial para projetos de alta precisão.",
        auto_44: "<i class=\"ph ph-ruler\"></i> Resumo",
        auto_45: "Planimetria",
        auto_46: "Onde as coisas estão (<strong>X, Y</strong>).",
        auto_47: "Altimetria",
        auto_48: "Qual a altura das coisas (<strong>Relevo / Z</strong>).",
        auto_49: "Estação Total",
        auto_50: "Mede a laser com altíssima precisão, milímetro por milímetro.",
        auto_51: "Curvas de Nível",
        auto_52: "O desenho do relevo no papel.",
        auto_53: "Estação Total em campo",
        auto_54: "Mapa Topográfico e Relevo 3D",
        auto_55: "<i class=\"ph ph-scales\"></i> Geodésia vs Topografia",
        auto_56: "Topografia",
        auto_57: "Mede áreas menores (até <strong>50 km²</strong>), assumindo que a Terra é <strong>plana</strong>.",
        auto_58: "VS",
        auto_59: "Geodésia",
        auto_60: "Áreas regionais ou globais, onde a <strong>curvatura da Terra</strong> interfere obrigatoriamente.",
        auto_61: "<i class=\"ph ph-crosshair\"></i> <span data-i18n=\"s5I1Title\">Estação Total</span>",
        auto_62: "<i class=\"ph ph-broadcast\"></i> <span data-i18n=\"s5I2Title\">Receptor GNSS (RTK)</span>",
        auto_63: "<i class=\"ph ph-airplane\"></i> <span data-i18n=\"s5I3Title\">Drone / VANT</span>",
        auto_64: "Banco de Dados Geográficos",
        auto_65: "Diferente de um banco comum que armazena apenas textos e números, um <strong>Banco de Dados Espacial</strong> armazena a <strong>geometria</strong> (Pontos, Linhas e Polígonos).",
        auto_66: "<i class=\"ph ph-terminal-window\"></i> Exemplo de Consulta Espacial (SQL):",
        auto_67: "\"Encontre todas as fazendas que são cortadas por um rio específico.\"",
        auto_68: "<i class=\"ph ph-database\"></i> PostgreSQL",
        auto_69: "<i class=\"ph ph-globe\"></i> PostGIS",
        auto_70: "Exemplos na Prática",
        auto_71: "Vídeo 1: Consulta em Tempo Real",
        auto_72: "(Adicione assets/video_banco1.mp4)",
        auto_73: "Vídeo 2: Estrutura de Geometrias",
        auto_74: "(Adicione assets/video_banco2.mp4)",
        auto_75: "Análise Espacial",
        auto_76: "A inteligência do Geoprocessamento. É o cruzamento e interpretação de <strong>camadas de dados</strong> para resolver problemas complexos do mundo real.",
        auto_77: "<i class=\"ph ph-stack\"></i> Técnicas Comuns:",
        auto_78: "<strong>Álgebra de Mapas:</strong> Sobreposição de mapas (ex: Solo + Relevo = Risco de Deslizamento).",
        auto_79: "<strong>Buffers:</strong> Zonas de influência (ex: 30m ao redor de um rio).",
        auto_80: "<strong>Heatmaps:</strong> Mapas de calor para manchas criminais ou focos de incêndio.",
        auto_81: "Vídeo: Análise Espacial em Ação",
        auto_82: "(Adicione assets/analise_espacial.mp4)",
        auto_83: "Automação (Python)",
        auto_84: "Vídeo: Script Python processando imagens",
        auto_85: "(Adicione assets/video_python.mp4)",
        auto_86: "Milhares de imagens de satélite e dados tabulares pesados não podem ser processados \"na mão\". Usamos <strong>Python</strong> para automatizar tudo.",
        auto_87: "<i class=\"ph ph-code\"></i> Exemplo com Geopandas:",
        auto_88: "<i class=\"ph ph-file-py\"></i> Python",
        auto_89: "<i class=\"ph ph-map-trifold\"></i> GDAL / OGR",
        auto_90: "Georreferenciamento",
        auto_91: "A \"certidão de nascimento\" geométrica de uma propriedade rural. Sem ela, o imóvel não pode ser desmembrado ou vendido legalmente.",
        auto_92: "<i class=\"ph ph-check-circle\"></i> O Processo (SIGEF / INCRA):",
        auto_93: "<strong>1. Coleta:</strong> GPS RTK mede os vértices da cerca.",
        auto_94: "<strong>2. Processamento:</strong> Fechamento do polígono (Software).",
        auto_95: "<strong>3. Certificação:</strong> O governo atesta que não há sobreposição com vizinhos ou terras indígenas.",
        auto_96: "Vídeo: Levantamento e SIGEF",
        auto_97: "(Adicione assets/video_georref.mp4)",
        auto_98: "CAR (Cadastro Ambiental)",
        auto_99: "Vídeo: Mapeamento de APP/RL",
        auto_100: "(Adicione assets/CAR.mp4)",
        auto_101: "Obrigatório para todo imóvel rural brasileiro. É um raio-x ambiental digitalizado, feito totalmente sobre <strong>imagens de satélite</strong>.",
        auto_102: "<i class=\"ph ph-leaf\"></i> O que é mapeado?",
        auto_103: "<strong>Área Total:</strong> O perímetro da fazenda.",
        auto_104: "<strong>Reserva Legal (RL):</strong> O percentual de mata que não pode ser desmatado (na Amazônia, 80%).",
        auto_105: "<strong>Áreas de Preservação Permanente (APP):</strong> Margens de rios, topos de morro e nascentes protegidas.",
        auto_106: "Agricultura de Precisão",
        auto_107: "O uso da tecnologia espacial para maximizar a colheita. Esqueça o tratamento homogêneo: cada metro quadrado é tratado de forma única.",
        auto_108: "<i class=\"ph ph-plant\"></i> Do Satélite ao Trator:",
        auto_109: "<strong>Monitoramento (NDVI):</strong> Drones medem a fotossíntese e descobrem onde as plantas estão doentes.",
        auto_110: "<strong>Taxa Variável:</strong> O mapa é enviado ao computador de bordo do trator.",
        auto_111: "<strong>Execução:</strong> O trator (guiado por GPS) aplica insumos apenas onde a planta precisa. Economia e ecologia!",
        auto_112: "Vídeo: NDVI e Trator Autônomo",
        auto_113: "(Adicione assets/agricultura_de_precisao.mp4)",
        auto_114: "Instituições e Aplicações Reais",
        auto_115: "<i class=\"ph ph-map-trifold\"></i> <span data-i18n=\"s6Title\">Mapa Interativo</span>",
        auto_116: "<i class=\"ph ph-arrow-counter-clockwise icon-spin-hover\"></i> <span data-i18n=\"btnRestart\">Reiniciar Apresentação</span>",
        mapBaseSat: "Satélite",
        mapBaseTopo: "Topo",
        mapBaseDark: "Escuro",
        mapBaseOsm: "Mapa",
        mapLayersBtn: "Camadas",
        mapLayersTitle: "Camadas SIG",
        mapLayerPoints: "Marcos GNSS",
        mapLayerPolygons: "Perímetros & UC",
        mapLayerBuffers: "Buffers & APP",
        mapLayerNetwork: "Rede Geodésica & Rios",
        mapLayerNdvi: "Amostras NDVI",
        mapDefaultHint: "Clique em qualquer feição para inspecionar"
    },
    en: {
        s1Title: "Geoprocessing",
        s1Subtitle: "From Earth's orbit to millimeter precision in the field",
        s1Team: "Team Members:",
        s1Hint: "Press <kbd>→</kbd> to start",
        
        s2Title: "Geoprocessing & Remote Sensing",
        s2C1Title: "Geoprocessing",
        s2C1Desc: "Processing georeferenced data using spatial databases, spatial intersection and advanced statistics.",
        s2C2Title: "Remote Sensing",
        s2C2Desc: "Gathering information without physical contact via sensors on satellites, planes, or drones measuring reflected radiation.",
        
        s3Title: "NASA 3D Satellite Program",
        s3Desc: "Interact with satellites in real time. Rotate, zoom, and explore orbital details and onboard instruments.",
        
        s4Title: "Topography & Geodesy",
        s4C1Title: "Geodesy",
        s4C1Desc: "Earth is a Geoid/Ellipsoid. Geodesy defines the mathematical datum needed for global GPS positioning.",
        s4C2Title: "Topography",
        s4C2Desc: "Acts on small areas where the surface is considered flat, making civil engineering and roads viable.",
        s4C3Title: "Positioning & Adjustment",
        s4C3Desc: "Least Squares Method distributes inherent measurement errors to find the most mathematically probable coordinate.",
        
        s5Title: "Field Measurement Instruments",
        s5I1Title: "Total Station",
        s5I1Desc: "Combines an electronic theodolite and laser. Requires direct line of sight. Delivers sub-centimeter precision.",
        s5I2Title: "GNSS Receiver (RTK)",
        s5I2Desc: "Uses satellite constellations and real-time network corrections (NTRIP/radio) to achieve centimeter precision instantly.",
        s5I3Title: "Drone / UAV",
        s5I3Desc: "Captures thousands of overlapping photos to compute accurate 3D terrain models and high-res orthomosaics.",

        sSoftTitle: "Main Software Solutions",
        sSoft1Title: "QGIS",
        sSoft1Desc: "Free and open-source software. Powerful and universally used for creating, editing, and mapping geospatial data.",
        sSoft2Title: "ArcGIS Pro",
        sSoft2Desc: "Robust commercial solution by Esri. The global industry standard for complex spatial intelligence and GIS environments.",
        sSoft3Title: "AutoCAD Civil 3D",
        sSoft3Desc: "Focused on infrastructure and surveying, essential for calculating road alignments and earthworks.",
        sSoft4Title: "Métrica TOPO",
        sSoft4Desc: "Brazilian proprietary system specialized in land surveying protocols, rural property registries, and environmental cadastre.",

        sDevTitle: "Technology & Advanced Analysis",
        sDev1Title: "Geographic Databases",
        sDev1Desc: "Efficient storage of complex geometries using advanced SQL. The PostgreSQL + PostGIS extension ecosystem is the gold standard for spatial queries.",
        sDev2Title: "Spatial Analysis",
        sDev2Desc: "Cross-referencing and interpreting data matrices to solve complex problems in urban planning, environmental management, logistics, and agriculture.",
        sDev3Title: "Automation & Programming",
        sDev3Desc: "Creating scripts (often in Python) to optimize satellite image processing pipelines and handle geospatial Big Data automatically.",

        sEmpTitle: "Institutions & Real Applications",
        sEmp1Title: "CENSIPAM",
        sEmp1Desc: "Amazon Protection System. Monitors the deep jungle territory using SAR radars and satellite constellations.",
        sEmp2Title: "EMBRAPA",
        sEmp2Desc: "Drives agricultural efficiency using precision farming, zoning, and intensive soil monitoring via GIS.",
        sEmp3Title: "CPRM (Geological Survey)",
        sEmp3Desc: "National geological mapping, crucial for risk area identification, flood plains, and mineral resource management.",
        sEmp4Title: "IBGE",
        sEmp4Desc: "IBGE manages Brazil's official geodetic framework (SIRGAS 2000 / RBMC) and its entire national cartographic and territorial base.",
        sEmp5Title: "INPE",
        sEmp5Desc: "INPE is a global reference in satellite development and continuous deforestation and wildfire monitoring through projects such as PRODES and DETER.",

        s6Title: "Interactive Map",
        s6Desc: "Explore vector layers, satellite imagery, Belém/UFPA landmarks, and live GIS tools.",
        
        s7Title: "Rural Property Analysis",
        s7C1Title: "Georeferencing",
        s7C1Desc: "Precise surveying of property boundaries certified by the government to prevent overlaps with indigenous lands or neighbors.",
        s7C2Title: "Environmental Cadastre (CAR)",
        s7C2Desc: "Mandatory public registry tracking environmental compliance of preservation areas using remote imagery.",
        s7C3Title: "Precision Agriculture",
        s7C3Desc: "Using drones and satellites (NDVI index) to map crop health and optimize tractor input operations.",
        
        s8Title: "THANK YOU!",
        s8Subtitle: "Federal University of Pará - UFPA",
        btnRestart: "Restart Presentation",
        auto_1: "EN",
        auto_2: "Leandro Haick",
        auto_3: "Amanda Caldas",
        auto_4: "Sthefany Vitória",
        auto_5: "Karla Eduarda",
        auto_6: "Maria Reis",
        auto_7: "Lucas Cruz",
        auto_8: "Geoprocessing",
        auto_9: "<strong>Geoprocessing</strong> encompasses a powerful set of technologies for collecting, storing, processing, and analyzing spatially referenced data (geographic location).",
        auto_10: "It is through it that we transform the real world into digital models, allowing the cross-referencing of information for environmental management, urban planning, and precision agriculture.",
        auto_11: "Remote Sensing",
        auto_12: "<strong>Remote Sensing</strong> is the science of obtaining information about a target or area on Earth without direct physical contact.",
        auto_13: "It works through sensors attached to <strong>satellites, planes, or drones</strong>, which capture and measure the electromagnetic radiation (light, heat, radar) reflected by the Earth's surface.",
        auto_14: "<i class=\"ph ph-hand-pointing\"></i> Interact with the GOES-R satellite 3D model (NASA)",
        auto_15: "<i class=\"ph ph-planet icon-spin\"></i> <span data-i18n=\"s3Title\">3D Satellite Program (NASA)</span>",
        auto_16: "Global Platforms",
        auto_17: "Access real-time monitoring panels of satellites and sensors spread across the globe by clicking the tools below.",
        auto_18: "Orbital Radar",
        auto_19: "Monitoring and tracking of satellite and space station trajectories.",
        auto_20: "Open Browser <i class=\"ph ph-arrow-up-right\"></i>",
        auto_21: "Osiris AI Live",
        auto_22: "Maritime layers, weather, incidents, seismology, and live global cameras.",
        auto_23: "Open Browser <i class=\"ph ph-arrow-up-right\"></i>",
        auto_24: "<i class=\"ph ph-globe-hemisphere-east icon-pulse\"></i> Geodesy",
        auto_25: "<strong>Geodesy</strong> is the science that studies the <strong>shape</strong>, <strong>dimensions</strong>, and <strong>gravity field</strong> of the Earth, considering the planet's curvature over large areas.",
        auto_26: "<i class=\"ph ph-books\"></i> Summary",
        auto_27: "Earth's Shape",
        auto_28: "Studies the real (<strong>Geoid</strong>) and mathematical (<strong>Ellipsoid</strong>) shape.",
        auto_29: "Gravity and Rotation",
        auto_30: "Measures Earth's gravity and movement in space.",
        auto_31: "Basis for GPS",
        auto_32: "Without geodesy, your phone wouldn't know where you are!",
        auto_33: "Global Maps",
        auto_34: "Allows mapping entire countries without distorting distances.",
        auto_35: "Geoid: The real (and \"dented\") shape of the Earth",
        auto_36: "Coordinates: Global Latitude and Longitude",
        auto_37: "<i class=\"ph ph-link-simple\"></i> Sources:\n                    <a href=\"https://m3e.com.br/solucoes/geodesia/\" target=\"_blank\">M3E</a> •\n                    <a href=\"https://comunica.ufu.br/noticias/2020/05/geodesia-e-forma-da-terra\" target=\"_blank\">Comunica UFU</a> •\n                    <a href=\"https://lume.ufrgs.br/bitstream/handle/10183/256683/001165828.pdf?sequence=1\" target=\"_blank\">LUME UFRGS</a> •\n                    <a href=\"https://topografia.paginas.ufsc.br/\" target=\"_blank\">Topografia UFSC</a> •\n                    YouTube:\n                    <a href=\"https://www.youtube.com/watch?v=hHYYJFbOL1M&amp;t=132\" target=\"_blank\">[1]</a>\n<a href=\"https://www.youtube.com/watch?v=ejwh5mtZ7WQ&amp;t=45\" target=\"_blank\">[2]</a>\n<a href=\"https://www.youtube.com/watch?v=ZTo34spW8ME&amp;t=41\" target=\"_blank\">[3]</a>\n<a href=\"https://www.youtube.com/watch?v=hwbRlhhcIv4\" target=\"_blank\">[4]</a>",
        auto_38: "M3E",
        auto_39: "Comunica UFU",
        auto_40: "LUME UFRGS",
        auto_41: "Topography UFSC",
        auto_42: "<i class=\"ph ph-mountains\"></i> Topography",
        auto_43: "<strong>Topography</strong> acts on mapping smaller areas (usually up to 50 km²), where the Earth's surface is considered <strong>flat</strong> (Topographic Plane). It is essential for high-precision projects.",
        auto_44: "<i class=\"ph ph-ruler\"></i> Summary",
        auto_45: "Planimetry",
        auto_46: "Where things are (<strong>X, Y</strong>).",
        auto_47: "Altimetry",
        auto_48: "How high things are (<strong>Relief / Z</strong>).",
        auto_49: "Total Station",
        auto_50: "Measures by laser with ultra-high precision, millimeter by millimeter.",
        auto_51: "Contour Lines",
        auto_52: "Drawing the relief on paper.",
        auto_53: "Total Station in the field",
        auto_54: "Topographic Map and 3D Relief",
        auto_55: "<i class=\"ph ph-scales\"></i> Geodesy vs Topography",
        auto_56: "Topography",
        auto_57: "Measures smaller areas (up to <strong>50 km²</strong>), assuming the Earth is <strong>flat</strong>.",
        auto_58: "VS",
        auto_59: "Geodesy",
        auto_60: "Regional or global areas, where the <strong>Earth's curvature</strong> necessarily interferes.",
        auto_61: "<i class=\"ph ph-crosshair\"></i> <span data-i18n=\"s5I1Title\">Total Station</span>",
        auto_62: "<i class=\"ph ph-broadcast\"></i> <span data-i18n=\"s5I2Title\">GNSS Receiver (RTK)</span>",
        auto_63: "<i class=\"ph ph-airplane\"></i> <span data-i18n=\"s5I3Title\">Drone / UAV</span>",
        auto_64: "Geographic Databases",
        auto_65: "Unlike a common database that only stores text and numbers, a <strong>Spatial Database</strong> stores <strong>geometry</strong> (Points, Lines, and Polygons).",
        auto_66: "<i class=\"ph ph-terminal-window\"></i> Spatial Query Example (SQL):",
        auto_67: "\"Find all farms that are crossed by a specific river.\"",
        auto_68: "<i class=\"ph ph-database\"></i> PostgreSQL",
        auto_69: "<i class=\"ph ph-globe\"></i> PostGIS",
        auto_70: "Practical Examples",
        auto_71: "Video 1: Real-Time Query",
        auto_72: "(Add assets/video_banco1.mp4)",
        auto_73: "Video 2: Geometry Structure",
        auto_74: "(Add assets/video_banco2.mp4)",
        auto_75: "Spatial Analysis",
        auto_76: "The intelligence of Geoprocessing. It is the cross-referencing and interpretation of <strong>data layers</strong> to solve complex real-world problems.",
        auto_77: "<i class=\"ph ph-stack\"></i> Common Techniques:",
        auto_78: "<strong>Map Algebra:</strong> Overlaying maps (e.g., Soil + Relief = Landslide Risk).",
        auto_79: "<strong>Buffers:</strong> Zones of influence (e.g., 30m around a river).",
        auto_80: "<strong>Heatmaps:</strong> Heat maps for crime hotspots or fire outbreaks.",
        auto_81: "Video: Spatial Analysis in Action",
        auto_82: "(Add assets/analise_espacial.mp4)",
        auto_83: "Automation (Python)",
        auto_84: "Video: Python script processing images",
        auto_85: "(Add assets/video_python.mp4)",
        auto_86: "Thousands of satellite images and heavy tabular data cannot be processed \"by hand\". We use <strong>Python</strong> to automate everything.",
        auto_87: "<i class=\"ph ph-code\"></i> Example with Geopandas:",
        auto_88: "<i class=\"ph ph-file-py\"></i> Python",
        auto_89: "<i class=\"ph ph-map-trifold\"></i> GDAL / OGR",
        auto_90: "Georeferencing",
        auto_91: "The geometric \"birth certificate\" of a rural property. Without it, the property cannot be legally subdivided or sold.",
        auto_92: "<i class=\"ph ph-check-circle\"></i> The Process (SIGEF / INCRA):",
        auto_93: "<strong>1. Collection:</strong> RTK GPS measures the fence vertices.",
        auto_94: "<strong>2. Processing:</strong> Polygon closure (Software).",
        auto_95: "<strong>3. Certification:</strong> The government certifies there is no overlap with neighbors or indigenous lands.",
        auto_96: "Video: Survey and SIGEF",
        auto_97: "(Add assets/video_georref.mp4)",
        auto_98: "CAR (Environmental Cadastre)",
        auto_99: "Video: APP/RL Mapping",
        auto_100: "(Add assets/CAR.mp4)",
        auto_101: "Mandatory for every rural property in Brazil. It is a digitized environmental x-ray, made entirely over <strong>satellite images</strong>.",
        auto_102: "<i class=\"ph ph-leaf\"></i> What is mapped?",
        auto_103: "<strong>Total Area:</strong> The perimeter of the farm.",
        auto_104: "<strong>Legal Reserve (RL):</strong> The percentage of forest that cannot be deforested (in the Amazon, 80%).",
        auto_105: "<strong>Permanent Preservation Areas (APP):</strong> Riverbanks, hilltops, and protected springs.",
        auto_106: "Precision Agriculture",
        auto_107: "The use of space technology to maximize harvests. Forget homogeneous treatment: every square meter is treated uniquely.",
        auto_108: "<i class=\"ph ph-plant\"></i> From Satellite to Tractor:",
        auto_109: "<strong>Monitoring (NDVI):</strong> Drones measure photosynthesis and discover where plants are sick.",
        auto_110: "<strong>Variable Rate:</strong> The map is sent to the tractor's onboard computer.",
        auto_111: "<strong>Execution:</strong> The tractor (guided by GPS) applies inputs only where the plant needs them. Economy and ecology!",
        auto_112: "Video: NDVI and Autonomous Tractor",
        auto_113: "(Add assets/agricultura_de_precisao.mp4)",
        auto_114: "Institutions and Real Applications",
        auto_115: "<i class=\"ph ph-map-trifold\"></i> <span data-i18n=\"s6Title\">Interactive Map</span>",
        auto_117: "The workflow begins with <strong>collecting</strong> data in the field, from satellite images, or from drones. This information is then organized into layers, analyzed together, and transformed into maps that support faster and safer decisions.",
        auto_118: "In this way, geoprocessing connects technology and territory: it reveals patterns, identifies changes, and helps plan cities, protect the environment, and produce food more efficiently.",
        auto_116: "<i class=\"ph ph-arrow-counter-clockwise icon-spin-hover\"></i> <span data-i18n=\"btnRestart\">Restart Presentation</span>",
        mapBaseSat: "Satellite",
        mapBaseTopo: "Topo",
        mapBaseDark: "Dark",
        mapBaseOsm: "Map",
        mapLayersBtn: "Layers",
        mapLayersTitle: "GIS Layers",
        mapLayerPoints: "GNSS Benchmarks",
        mapLayerPolygons: "Perimeters & Parks",
        mapLayerBuffers: "Buffers & Riparian",
        mapLayerNetwork: "Geodetic Net & Rivers",
        mapLayerNdvi: "NDVI Samples",
        mapDefaultHint: "Click any feature to inspect"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartBtn');
    const currentCountEl = document.getElementById('currentCount');
    const totalCountEl = document.getElementById('totalCount');
    const progressFill = document.getElementById('progressFill');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const langToggle = document.getElementById('langToggle');
    const storageKeys = {
        theme: 'geoprocessamento-theme',
        lang: 'geoprocessamento-lang'
    };
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let currentLang = localStorage.getItem(storageKeys.lang) === 'en' ? 'en' : 'pt';
    let isDark = localStorage.getItem(storageKeys.theme) === 'light' ? false : true;
    let mapInitialized = false;
    let map = null;
    let georefCarouselTimer = null;

    function applyTheme() {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        if (themeIcon) {
            if (isDark) {
                themeIcon.classList.remove('ph-moon');
                if (!themeIcon.classList.contains('ph-sun')) {
                    themeIcon.classList.add('ph-sun');
                }
            } else {
                themeIcon.classList.remove('ph-sun');
                if (!themeIcon.classList.contains('ph-moon')) {
                    themeIcon.classList.add('ph-moon');
                }
            }
        }
        localStorage.setItem(storageKeys.theme, isDark ? 'dark' : 'light');
    }

    function applyLanguage() {
        const langIcon = document.getElementById('langIcon');
        if (langIcon) {
            langIcon.src = currentLang === 'pt' ? 'assets/logo_brazil.png' : 'assets/logo_usa.png';
            langIcon.alt = currentLang === 'pt' ? 'Português' : 'English';
        }
        document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
        localStorage.setItem(storageKeys.lang, currentLang);
        updateLanguage();
    }

    totalCountEl.textContent = totalSlides;
    applyTheme();
    applyLanguage();
    updateUI();
    syncSlideVideos();
    syncGeorefCarousel();
    fitActiveSlide();
    window.addEventListener('load', fitActiveSlide);

    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);
    
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            const prevSlide = slides[currentSlide];
            currentSlide = 0;
            updateSlides(prevSlide);
            updateUI();
        });
    }

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        applyTheme();
        requestAnimationFrame(fitActiveSlide);
    });

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        applyLanguage();
        requestAnimationFrame(fitActiveSlide);
    });

    function updateLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang] && i18n[currentLang][key]) {
                if (el.tagName.toLowerCase() === 'p' && el.innerHTML.includes('<kbd>')) {
                    el.innerHTML = i18n[currentLang][key];
                } else {
                    el.innerHTML = i18n[currentLang][key];
                }
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.target && ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(e.target.tagName)) return;
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Space' || e.key === 'Enter') {
            e.preventDefault();
            goToNextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToPrevSlide();
        }
    });

    let touchStartX = 0;
    let touchStartY = 0;
    let ignoreSwipe = false;

    document.addEventListener('touchstart', e => {
        const target = e.target;
        ignoreSwipe = Boolean(
            target && target.closest('#interactiveMap, .gis-places-chips, .gis-layers-popover, model-viewer, iframe, video, button, a, input, label')
        );
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, {passive: true});

    document.addEventListener('touchend', e => {
        if (ignoreSwipe) return;
        const dx = e.changedTouches[0].screenX - touchStartX;
        const dy = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(dx) >= 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
            if (dx < 0) {
                goToNextSlide();
            } else {
                goToPrevSlide();
            }
        }
    }, {passive: true});

    function goToNextSlide() {
        if (currentSlide < totalSlides - 1) {
            const prevSlide = slides[currentSlide];
            currentSlide++;
            updateSlides(prevSlide);
            updateUI();
        }
    }

    function goToPrevSlide() {
        if (currentSlide > 0) {
            const prevSlide = slides[currentSlide];
            currentSlide--;
            updateSlides(prevSlide);
            updateUI();
        }
    }

    function checkSlideTriggers() {
        const activeSlide = slides[currentSlide];
        if (activeSlide && activeSlide.id === 'slideMap') {
            initInteractiveGisMap();
            if (map) {
                setTimeout(() => map.invalidateSize(), 100);
                setTimeout(() => map.invalidateSize(), 450);
            }
        }
    }

    function updateSlides(prevSlide) {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'previous');
            if (index === currentSlide) {
                slide.classList.add('active');
                const panel = slide.querySelector('.glass-panel');
                if (panel) panel.scrollTop = 0;
            } else if (index < currentSlide) {
                slide.classList.add('previous');
            }
        });
        syncSlideVideos(prevSlide);
        syncGeorefCarousel();
        checkSlideTriggers();
        requestAnimationFrame(fitActiveSlide);
    }

    function latLonToUtm22M(lat, lon) {
        // Approximate conversion for Zone 22M (Central Meridian -51 deg) in Belém region
        const k0 = 0.9996;
        const a = 6378137.0;
        const e2 = 0.00669438;
        const latRad = (lat * Math.PI) / 180;
        const lonRad = (lon * Math.PI) / 180;
        const lon0Rad = (-51 * Math.PI) / 180;
        const N = a / Math.sqrt(1 - e2 * Math.sin(latRad) * Math.sin(latRad));
        const T = Math.tan(latRad) * Math.tan(latRad);
        const C = (e2 / (1 - e2)) * Math.cos(latRad) * Math.cos(latRad);
        const A = Math.cos(latRad) * (lonRad - lon0Rad);
        const M = a * (
            (1 - e2 / 4 - (3 * e2 * e2) / 64) * latRad -
            ((3 * e2) / 8 + (3 * e2 * e2) / 32) * Math.sin(2 * latRad) +
            ((15 * e2 * e2) / 256) * Math.sin(4 * latRad)
        );
        const easting = Math.round(500000 + k0 * N * (A + ((1 - T + C) * A * A * A) / 6));
        const northing = Math.round(10000000 + k0 * (M + N * Math.tan(latRad) * ((A * A) / 2 + ((5 - T + 9 * C + 4 * C * C) * A * A * A * A) / 24)));
        return {
            easting: easting.toLocaleString('pt-BR'),
            northing: northing.toLocaleString('pt-BR')
        };
    }

    function calculatePolygonAreaSqMeters(latlngs) {
        if (!latlngs || latlngs.length < 3) return 0;
        const R = 6378137;
        let area = 0;
        for (let i = 0; i < latlngs.length; i++) {
            const p1 = latlngs[i];
            const p2 = latlngs[(i + 1) % latlngs.length];
            const x1 = ((p1.lng * Math.PI) / 180) * R * Math.cos((p1.lat * Math.PI) / 180);
            const y1 = ((p1.lat * Math.PI) / 180) * R;
            const x2 = ((p2.lng * Math.PI) / 180) * R * Math.cos((p2.lat * Math.PI) / 180);
            const y2 = ((p2.lat * Math.PI) / 180) * R;
            area += x1 * y2 - x2 * y1;
        }
        return Math.abs(area) / 2;
    }

    function initInteractiveGisMap() {
        if (mapInitialized || typeof L === 'undefined') return;
        const mapEl = document.getElementById('interactiveMap');
        if (!mapEl) return;

        mapInitialized = true;

        // Base Layers
        const baseLayers = {
            satellite: L.layerGroup([
                L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    maxZoom: 19,
                    attribution: '&copy; Esri, Maxar, Earthstar Geographics'
                }),
                L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
                    maxZoom: 19,
                    opacity: 0.75
                })
            ]),
            dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap &copy; CARTO'
            }),
            topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                maxZoom: 17,
                attribution: '&copy; OpenTopoMap (CC-BY-SA)'
            }),
            osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors'
            })
        };

        map = L.map(mapEl, {
            center: [-1.4754, -48.4572],
            zoom: 15,
            layers: [baseLayers.satellite],
            zoomControl: false
        });

        // Places Data
        const places = {
            ananindeua: {
                coords: [-1.3662, -48.4046],
                zoom: 16,
                color: '#2563eb',
                icon: 'ph-map-pin-line',
                title: 'UFPA - Campus Ananindeua (FTG)',
                desc: 'Faculdade de Tecnologia em Geoprocessamento (FTG) — Estrada do Icuí-Guajará, s/n (esq. Av. Independência), Ananindeua - PA.',
                alt: '19,4 m',
                code: 'FTG-ANANIN-01'
            },
            ufpa: {
                coords: [-1.4754, -48.4572],
                zoom: 16,
                color: '#3b82f6',
                icon: 'ph-graduation-cap',
                title: 'UFPA - Campus Guamá (Geociências)',
                desc: 'Base de referência para levantamentos topográficos com Estação Total, GNSS RTK e aerofotogrametria com VANT.',
                alt: '14,2 m',
                code: 'MARCO-UFPA-02'
            },
            orla: {
                coords: [-1.4782, -48.4545],
                zoom: 16,
                color: '#06b6d4',
                icon: 'ph-waves',
                title: 'Orla da UFPA & Rio Guamá',
                desc: 'Ponto de monitoramento hidrológico, batimetria, dinâmica de marés e análise de Área de Preservação Permanente (APP).',
                alt: '4,8 m',
                code: 'HIDRO-GUAMA-02'
            },
            censipam: {
                coords: [-1.4116, -48.4631],
                zoom: 15,
                color: '#a855f7',
                icon: 'ph-broadcast',
                title: 'CENSIPAM - Centro Regional Belém',
                desc: 'Centro estratégico de Sensoriamento Remoto, radares meteorológicos e inteligência territorial da Amazônia Legal.',
                alt: '18,5 m',
                code: 'SIPAM-BEL-03'
            },
            utinga: {
                coords: [-1.4225, -48.4418],
                zoom: 14,
                color: '#10b981',
                icon: 'ph-tree-evergreen',
                title: 'Parque Estadual do Utinga',
                desc: 'Unidade de Conservação e proteção dos lagos Bolonha e Água Preta. Monitoramento contínuo de NDVI e cobertura florestal.',
                alt: '16,0 m',
                code: 'UC-UTINGA-04'
            },
            combu: {
                coords: [-1.5005, -48.4610],
                zoom: 14,
                color: '#22c55e',
                icon: 'ph-leaf',
                title: 'Ilha do Combu (APA Ambiental)',
                desc: 'Área de Proteção Ambiental insular: estudo de Cadastro Ambiental Rural (CAR), extrativismo sustentável e dossel amazônico.',
                alt: '6,4 m',
                code: 'APA-COMBU-05'
            },
            veropeso: {
                coords: [-1.4525, -48.5034],
                zoom: 15,
                color: '#f59e0b',
                icon: 'ph-compass',
                title: 'Baía do Guajará & Marco Histórico',
                desc: 'Vértice de controle costeiro integrado à Rede Brasileira de Monitoramento Contínuo (RBMC / IBGE - SIRGAS 2000).',
                alt: '5,1 m',
                code: 'RBMC-BEL-06'
            }
        };

        // Thematic Layer Groups
        const thematicLayers = {
            points: L.layerGroup().addTo(map),
            polygons: L.layerGroup().addTo(map),
            buffers: L.layerGroup().addTo(map),
            network: L.layerGroup().addTo(map),
            ndvi: L.layerGroup().addTo(map)
        };

        const placeMarkers = {};

        const popupOptions = {
            maxWidth: 300,
            autoPanPaddingTopLeft: [68, 66],
            autoPanPaddingBottomRight: [60, 56]
        };

        // 1. Populate Points Layer
        Object.entries(places).forEach(([key, place]) => {
            const utm = latLonToUtm22M(place.coords[0], place.coords[1]);
            const icon = L.divIcon({
                className: 'gis-custom-marker',
                html: `<div class="gis-pin" style="--pin-color: ${place.color}"><i class="ph ${place.icon}"></i></div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -30]
            });

            const popupHtml = `
                <div class="gis-popup">
                    <h4>${place.title}</h4>
                    <p>${place.desc}</p>
                    <div class="gis-popup-meta">
                        <span><strong>Código:</strong> ${place.code}</span>
                        <span><strong>Altitude:</strong> ${place.alt}</span>
                        <span><strong>E (UTM):</strong> ${utm.easting}m</span>
                        <span><strong>N (UTM):</strong> ${utm.northing}m</span>
                    </div>
                </div>
            `;

            const marker = L.marker(place.coords, { icon }).bindPopup(popupHtml, popupOptions);
            marker.addTo(thematicLayers.points);
            placeMarkers[key] = marker;
        });

        // 2. Populate Polygons Layer (Perímetros e Áreas Protegidas)
        const ufpaPolygon = L.polygon([
            [-1.4695, -48.4598],
            [-1.4698, -48.4465],
            [-1.4778, -48.4472],
            [-1.4788, -48.4555],
            [-1.4765, -48.4602]
        ], {
            color: '#3b82f6',
            weight: 2.5,
            fillColor: '#3b82f6',
            fillOpacity: 0.22
        }).bindPopup(`
            <div class="gis-popup">
                <h4>Polígono: Campus UFPA Guamá</h4>
                <p>Perímetro universitário georreferenciado para cadastro multifinalitário e gestão de infraestrutura.</p>
                <div class="gis-popup-meta">
                    <span><strong>Área:</strong> ~124,8 ha</span>
                    <span><strong>Datum:</strong> SIRGAS 2000</span>
                </div>
            </div>
        `, popupOptions);

        const utingaPolygon = L.polygon([
            [-1.4080, -48.4520],
            [-1.4050, -48.4210],
            [-1.4310, -48.4190],
            [-1.4360, -48.4490]
        ], {
            color: '#10b981',
            weight: 2.5,
            fillColor: '#10b981',
            fillOpacity: 0.25
        }).bindPopup(`
            <div class="gis-popup">
                <h4>Unidade de Conservação: PE do Utinga</h4>
                <p>Polígono de proteção integral dos mananciais que abastecem a Região Metropolitana de Belém.</p>
                <div class="gis-popup-meta">
                    <span><strong>Área Total:</strong> ~1.393 ha</span>
                    <span><strong>Classe:</strong> Preservação</span>
                </div>
            </div>
        `, popupOptions);

        const combuPolygon = L.polygon([
            [-1.4885, -48.4810],
            [-1.4865, -48.4420],
            [-1.5140, -48.4435],
            [-1.5150, -48.4820]
        ], {
            color: '#22c55e',
            weight: 2.5,
             dashArray: '6, 6',
            fillColor: '#22c55e',
            fillOpacity: 0.2
        }).bindPopup(`
            <div class="gis-popup">
                <h4>APA da Ilha do Combu (CAR)</h4>
                <p>Perímetro insular monitorado por imagens orbitais para controle de Reserva Legal e APP de várzea.</p>
                <div class="gis-popup-meta">
                    <span><strong>Área:</strong> ~1.500 ha</span>
                    <span><strong>Bioma:</strong> Amazônia</span>
                </div>
            </div>
        `, popupOptions);

        ufpaPolygon.addTo(thematicLayers.polygons);
        utingaPolygon.addTo(thematicLayers.polygons);
        combuPolygon.addTo(thematicLayers.polygons);

        // 3. Populate Buffers Layer
        L.circle([-1.4754, -48.4572], {
            radius: 450,
            color: '#f59e0b',
            weight: 2,
            dashArray: '6, 4',
            fillColor: '#f59e0b',
            fillOpacity: 0.14
        }).bindPopup(`
            <div class="gis-popup">
                <h4>Buffer de Alcance Rádio RTK (450m)</h4>
                <p>Zona de cobertura direta da Base GNSS instalada no Instituto de Geociências da UFPA.</p>
            </div>
        `, popupOptions).addTo(thematicLayers.buffers);

        L.circle([-1.4782, -48.4545], {
            radius: 250,
            color: '#06b6d4',
            weight: 2,
            fillColor: '#06b6d4',
            fillOpacity: 0.18
        }).bindPopup(`
            <div class="gis-popup">
                <h4>Buffer de Monitoramento Costeiro (250m)</h4>
                <p>Faixa de amortecimento e controle de erosão marginal na orla do Rio Guamá.</p>
            </div>
        `, popupOptions).addTo(thematicLayers.buffers);

        // 4. Populate Geodesic Network & Hydrography Layer
        L.polyline([
            [-1.4754, -48.4572],
            [-1.4116, -48.4631],
            [-1.4525, -48.5034],
            [-1.5005, -48.4610],
            [-1.4754, -48.4572]
        ], {
            color: '#a855f7',
            weight: 2.5,
            dashArray: '8, 6',
            opacity: 0.9
        }).bindPopup(`
            <div class="gis-popup">
                <h4>Poligonal / Rede Geodésica (SIRGAS 2000)</h4>
                <p>Vetores de linha de base GNSS conectando os marcos da UFPA, CENSIPAM, Baía do Guajará e Combu para ajustamento MMQ.</p>
            </div>
        `, popupOptions).addTo(thematicLayers.network);

        L.polyline([
            [-1.4820, -48.5080],
            [-1.4835, -48.4820],
            [-1.4825, -48.4560],
            [-1.4795, -48.4320]
        ], {
            color: '#38bdf8',
            weight: 4,
            opacity: 0.85
        }).bindPopup(`
            <div class="gis-popup">
                <h4>Eixo Hidrográfico: Rio Guamá</h4>
                <p>Calha principal monitorada por ecobatímetro e imagens SAR.</p>
            </div>
        `, popupOptions).addTo(thematicLayers.network);

        // 5. Populate NDVI Samples Layer
        const ndviSamples = [
            { coords: [-1.4722, -48.4515], val: 0.84, label: 'Mata Preservada UFPA (NDVI Alto: 0,84)', color: '#16a34a' },
            { coords: [-1.4758, -48.4582], val: 0.38, label: 'Área Edificada / Pavimentada (NDVI Baixo: 0,38)', color: '#eab308' },
            { coords: [-1.4205, -48.4360], val: 0.91, label: 'Dossel Denso PE Utinga (NDVI Muito Alto: 0,91)', color: '#15803d' },
            { coords: [-1.4985, -48.4580], val: 0.88, label: 'Floresta de Várzea Combu (NDVI Alto: 0,88)', color: '#22c55e' }
        ];
        ndviSamples.forEach(sample => {
            L.circleMarker(sample.coords, {
                radius: 11,
                color: '#ffffff',
                weight: 2,
                fillColor: sample.color,
                fillOpacity: 0.9
            }).bindPopup(`
                <div class="gis-popup">
                    <h4>Amostra Espectral NDVI</h4>
                    <p>${sample.label}</p>
                    <div class="gis-popup-meta">
                        <span><strong>NDVI:</strong> ${sample.val}</span>
                        <span><strong>Sensor:</strong> Sentinel-2 / Drone</span>
                    </div>
                </div>
            `, popupOptions).addTo(thematicLayers.ndvi);
        });

        // User Drawing Layer & Tool State
        const userDrawLayer = L.layerGroup().addTo(map);
        let activeTool = 'pan';
        let distancePoints = [];
        let distanceLine = null;
        let areaPoints = [];
        let areaPolygon = null;
        let rtkCounter = 0;

        const toolOutputEl = document.getElementById('gisToolOutput');
        const coordLatLonEl = document.getElementById('gisCoordLatLon');
        const coordUtmEl = document.getElementById('gisCoordUtm');
        const zoomLevelEl = document.getElementById('gisZoomLevel');
        const layersPanel = document.getElementById('qgisLayersPanel');
        const toggleLayersBtn = document.getElementById('qgisToggleLayers');

        function setToolStatus(text, dotColor = '') {
            if (!toolOutputEl) return;
            const styleAttr = dotColor ? ` style="background: ${dotColor};"` : '';
            toolOutputEl.innerHTML = `<span class="gis-hud-dot"${styleAttr}></span><span>${text}</span>`;
        }

        function closeLayersPopover() {
            if (layersPanel) layersPanel.classList.remove('is-open');
            if (toggleLayersBtn) toggleLayersBtn.classList.remove('is-active');
        }

        // Toolbar switching
        const toolBtns = document.querySelectorAll('.gis-tool-btn[data-tool]');
        toolBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                activeTool = btn.getAttribute('data-tool');
                toolBtns.forEach(b => b.classList.toggle('is-active', b === btn));
                distancePoints = [];
                areaPoints = [];

                if (activeTool === 'pan') {
                    mapEl.style.cursor = '';
                    setToolStatus('Clique em qualquer feição para inspecionar');
                } else if (activeTool === 'distance') {
                    mapEl.style.cursor = 'crosshair';
                    setToolStatus('Distância: clique em 2 ou mais pontos no mapa', '#38bdf8');
                } else if (activeTool === 'area') {
                    mapEl.style.cursor = 'crosshair';
                    setToolStatus('Área: clique em 3 ou mais vértices no mapa', '#10b981');
                } else if (activeTool === 'buffer') {
                    mapEl.style.cursor = 'crosshair';
                    setToolStatus('Buffer: clique no mapa para raio de 500 m', '#f59e0b');
                } else if (activeTool === 'point') {
                    mapEl.style.cursor = 'crosshair';
                    setToolStatus('GNSS RTK: clique para implantar vértice', '#3b82f6');
                }
            });
        });

        // Clear Button
        const clearBtn = document.getElementById('gisClearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                userDrawLayer.clearLayers();
                distancePoints = [];
                distanceLine = null;
                areaPoints = [];
                areaPolygon = null;
                rtkCounter = 0;
                setToolStatus('Medições limpas');
            });
        }

        // Zoom In / Out / Reset Buttons
        const zoomInBtn = document.getElementById('gisZoomInBtn');
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => map.zoomIn());
        }
        const zoomOutBtn = document.getElementById('gisZoomOutBtn');
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => map.zoomOut());
        }
        const resetBtn = document.getElementById('gisResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                map.closePopup();
                map.flyTo([-1.4580, -48.4620], 13, { duration: 1.15 });
                document.querySelectorAll('.gis-place-btn').forEach(b => b.classList.remove('is-active'));
                setToolStatus('Visão metropolitana — Belém & Ananindeua');
            });
        }

        // Layers Popover Toggle
        if (toggleLayersBtn && layersPanel) {
            toggleLayersBtn.addEventListener('click', () => {
                const isOpen = layersPanel.classList.toggle('is-open');
                toggleLayersBtn.classList.toggle('is-active', isOpen);
            });
        }

        document.querySelectorAll('.qgis-panel-close[data-close-panel]').forEach(closeBtn => {
            closeBtn.addEventListener('click', closeLayersPopover);
        });

        // Places Quick-Jump Chips
        const placeBtns = document.querySelectorAll('.gis-place-btn[data-place]');
        placeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-place');
                const place = places[key];
                if (!place) return;
                placeBtns.forEach(b => b.classList.toggle('is-active', b === btn));
                closeLayersPopover();
                map.flyTo(place.coords, place.zoom, { duration: 1.15 });
                if (placeMarkers[key]) {
                    setTimeout(() => placeMarkers[key].openPopup(), 600);
                }
                setToolStatus(`${place.title} (${place.code})`, place.color);
            });
        });

        // Base Map Switcher
        const basemapBtns = document.querySelectorAll('.gis-basemap-btn[data-basemap]');
        basemapBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetKey = btn.getAttribute('data-basemap');
                basemapBtns.forEach(b => b.classList.toggle('is-active', b === btn));
                Object.entries(baseLayers).forEach(([key, layer]) => {
                    if (key === targetKey) {
                        if (!map.hasLayer(layer)) map.addLayer(layer);
                    } else if (map.hasLayer(layer)) {
                        map.removeLayer(layer);
                    }
                });
                setToolStatus(`Mapa base: ${btn.textContent.trim()}`);
            });
        });

        // Thematic Layer Checkboxes
        const layerCheckboxes = document.querySelectorAll('.gis-layer-toggle input[data-layer]');
        layerCheckboxes.forEach(input => {
            input.addEventListener('change', () => {
                const key = input.getAttribute('data-layer');
                const group = thematicLayers[key];
                if (!group) return;
                if (input.checked) {
                    map.addLayer(group);
                } else {
                    map.removeLayer(group);
                }
            });
        });

        // Live Mouse Coordinates & Zoom (Minimalist Telemetry Format)
        map.on('mousemove', (e) => {
            const { lat, lng } = e.latlng;
            const utm = latLonToUtm22M(lat, lng);
            if (coordLatLonEl) {
                coordLatLonEl.textContent = `${lat.toFixed(4)}°, ${lng.toFixed(4)}°`;
            }
            if (coordUtmEl) {
                coordUtmEl.textContent = `${utm.easting} E · ${utm.northing} N`;
            }
        });

        map.on('zoomend', () => {
            if (zoomLevelEl) {
                zoomLevelEl.textContent = `Z${map.getZoom()}`;
            }
        });

        // Interactive Map Click Handler for GIS Tools
        map.on('click', (e) => {
            closeLayersPopover();
            const latlng = e.latlng;
            const utm = latLonToUtm22M(latlng.lat, latlng.lng);

            if (activeTool === 'distance') {
                distancePoints.push(latlng);
                L.circleMarker(latlng, {
                    radius: 5,
                    color: '#ffffff',
                    weight: 2,
                    fillColor: '#38bdf8',
                    fillOpacity: 1
                }).addTo(userDrawLayer);

                if (distancePoints.length === 1) {
                    distanceLine = L.polyline(distancePoints, {
                        color: '#38bdf8',
                        weight: 3,
                        dashArray: '6, 4'
                    }).addTo(userDrawLayer);
                    setToolStatus('1º ponto marcado — clique no próximo ponto', '#38bdf8');
                } else {
                    distanceLine.setLatLngs(distancePoints);
                    let totalMeters = 0;
                    for (let i = 1; i < distancePoints.length; i++) {
                        totalMeters += map.distance(distancePoints[i - 1], distancePoints[i]);
                    }
                    const formatted = totalMeters >= 1000
                        ? `${(totalMeters / 1000).toFixed(2)} km`
                        : `${totalMeters.toFixed(1)} m`;
                    setToolStatus(`Distância (${distancePoints.length} pts): ${formatted}`, '#38bdf8');
                }
            } else if (activeTool === 'area') {
                areaPoints.push(latlng);
                L.circleMarker(latlng, {
                    radius: 5,
                    color: '#ffffff',
                    weight: 2,
                    fillColor: '#10b981',
                    fillOpacity: 1
                }).addTo(userDrawLayer);

                if (!areaPolygon) {
                    areaPolygon = L.polygon(areaPoints, {
                        color: '#10b981',
                        weight: 2.5,
                        fillColor: '#10b981',
                        fillOpacity: 0.25
                    }).addTo(userDrawLayer);
                } else {
                    areaPolygon.setLatLngs(areaPoints);
                }

                if (areaPoints.length < 3) {
                    setToolStatus(`Vértice ${areaPoints.length}/3 — adicione mais ${3 - areaPoints.length}`, '#10b981');
                } else {
                    const sqMeters = calculatePolygonAreaSqMeters(areaPoints);
                    const hectares = sqMeters / 10000;
                    setToolStatus(`Área (${areaPoints.length} vértices): ${hectares.toFixed(2)} ha`, '#10b981');
                }
            } else if (activeTool === 'buffer') {
                const radius = 500;
                const areaHa = ((Math.PI * radius * radius) / 10000).toFixed(2);
                const circle = L.circle(latlng, {
                    radius,
                    color: '#f59e0b',
                    weight: 2,
                    fillColor: '#f59e0b',
                    fillOpacity: 0.2
                }).addTo(userDrawLayer);

                L.circleMarker(latlng, {
                    radius: 5,
                    color: '#fff',
                    weight: 2,
                    fillColor: '#f59e0b',
                    fillOpacity: 1
                }).addTo(userDrawLayer);

                circle.bindPopup(`
                    <div class="gis-popup">
                        <h4>Buffer de 500 m</h4>
                        <p>Zona de influência calculada ao redor do ponto selecionado.</p>
                        <div class="gis-popup-meta">
                            <span><strong>Raio:</strong> 500 m</span>
                            <span><strong>Área:</strong> ${areaHa} ha</span>
                            <span><strong>E:</strong> ${utm.easting}m</span>
                            <span><strong>N:</strong> ${utm.northing}m</span>
                        </div>
                    </div>
                `, popupOptions).openPopup();

                setToolStatus(`Buffer 500 m (${areaHa} ha) gerado`, '#f59e0b');
            } else if (activeTool === 'point') {
                rtkCounter++;
                const code = `V-${String(rtkCounter).padStart(2, '0')}`;
                const badgeIcon = L.divIcon({
                    className: 'gis-rtk-icon',
                    html: `<div class="gis-rtk-badge">${code}</div>`,
                    iconSize: [44, 22],
                    iconAnchor: [22, 11]
                });

                const marker = L.marker(latlng, { icon: badgeIcon }).addTo(userDrawLayer);
                marker.bindPopup(`
                    <div class="gis-popup">
                        <h4>Vértice GNSS RTK: ${code}</h4>
                        <p>Coordenada coletada com correção diferencial (±0,008 m).</p>
                        <div class="gis-popup-meta">
                            <span><strong>Lat:</strong> ${latlng.lat.toFixed(5)}°</span>
                            <span><strong>Lon:</strong> ${latlng.lng.toFixed(5)}°</span>
                            <span><strong>E:</strong> ${utm.easting}m</span>
                            <span><strong>N:</strong> ${utm.northing}m</span>
                        </div>
                    </div>
                `, popupOptions).openPopup();

                setToolStatus(`Vértice ${code} — ${utm.easting} E · ${utm.northing} N`, '#3b82f6');
            }
        });
    }

    function syncGeorefCarousel() {
        const carousel = document.querySelector('[data-carousel="georef"]');
        if (!carousel) return;

        if (georefCarouselTimer) {
            clearInterval(georefCarouselTimer);
            georefCarouselTimer = null;
        }

        carousel.classList.remove('is-playing');
        const slidesInCarousel = [...carousel.querySelectorAll('.georef-carousel__slide')];
        slidesInCarousel.forEach((slide, index) => {
            slide.classList.toggle('is-active', index === 0);
        });

        if (!slides[currentSlide]?.contains(carousel) || slidesInCarousel.length < 2) return;

        carousel.classList.add('is-playing');
        let activeIndex = 0;
        georefCarouselTimer = setInterval(() => {
            if (!slides[currentSlide]?.contains(carousel)) {
                syncGeorefCarousel();
                return;
            }
            activeIndex = (activeIndex + 1) % slidesInCarousel.length;
            slidesInCarousel.forEach((slide, index) => {
                slide.classList.toggle('is-active', index === activeIndex);
            });
            carousel.classList.remove('is-playing');
            void carousel.offsetWidth;
            carousel.classList.add('is-playing');
        }, 4500);
    }

    function syncSlideVideos(prevSlide) {
        const activeSlide = slides[currentSlide];
        const videos = document.querySelectorAll('video');

        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
            video.autoplay = false;
            video.preload = 'none';
        });

        if (prevSlide && prevSlide !== activeSlide) {
            prevSlide.querySelectorAll('iframe[src*="youtube.com/embed/"]').forEach(iframe => {
                setTimeout(() => {
                    if (slides[currentSlide] !== prevSlide) {
                        const currentSrc = iframe.getAttribute('src');
                        if (currentSrc) {
                            iframe.setAttribute('src', currentSrc);
                        }
                    }
                }, 350);
            });
        }

        if (!activeSlide) return;

        activeSlide.querySelectorAll('video').forEach(video => {
            video.muted = true;
            video.preload = 'auto';
            video.load();

            const playWhenReady = () => {
                const playRequest = video.play();
                if (playRequest) {
                    playRequest.catch(error => {
                        if (error.name === 'AbortError') return;
                        console.warn('Não foi possível reproduzir o vídeo do slide ativo.', error);
                    });
                }
            };

            if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                playWhenReady();
            } else {
                video.addEventListener('canplay', playWhenReady, { once: true });
            }
        });
    }

    function fitActiveSlide() {
        const activeSlide = slides[currentSlide];
        if (!activeSlide) return;

        if (activeSlide.id === 'slideMap' && map) {
            map.invalidateSize();
        }
    }

    function updateUI() {
        currentCountEl.textContent = currentSlide + 1;
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        const progress = ((currentSlide) / (totalSlides - 1)) * 100;
        progressFill.style.width = progress + "%";
    }

    window.addEventListener('resize', fitActiveSlide);
});
