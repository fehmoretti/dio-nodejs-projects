# Podcast Menager

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios separados por categorias

### Domínio
Podcasts feito em vídeo

### Features
- Listar os podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome do podcast

#### Feature:
-   Listar os episódios dos podcasts em sessões de categoria

### Como vou implementar?
GET: retorna lista de episodios

response:
    
```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId:"pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link:"https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde","esporte","bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId:"4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link:"https://www.youtube.com/watch?v=4KDGTdiOV4I",
        categories: ["esporte","corrida"]
    }
]

```

GET: retorna lista de episodios baseado em um parâmetro enviado pelo cliente do nome do podcast