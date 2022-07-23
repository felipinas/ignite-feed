export const posts = [
  {
    id: 1,
    publishedAt: new Date('2022-06-04T22:00:00'),
    author: {
      id: 1,
      name: 'João Felipe',
      avatarUrl: 'https://github.com/felipinas.png',
      role: 'Web Developer',
    },
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        id: 2,
        type: 'paragraph',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi exercitationem officia, quod dolore minima rerum excepturi aut cum soluta temporibus facere tenetur veniam non atque accusantium totam quo placeat.'
        
      },
      {
        id: 3,
        type: 'link',
        content: 'https://github.com/felipinas'
      },
    ],
  },
  {
    id: 2,
    publishedAt: new Date('2022-06-07T10:56:12'),
    author: {
      id: 2,
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @Rocketseat',
    },
    content: [
      {
        id: 4,
        type: 'paragraph',
        content: 'Hey, there! 👋'
      },
      {
        id: 5,
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, inventore? Id facilis repudiandae ea est officiis laborum? Pariatur libero officia maxime quod, tempore, iste cum sapiente nihil, ab perspiciatis architecto?'
      },
      {
        id: 7,
        type: 'paragraph',
        content: 'Segue o link:'
      },
      {
        id: 8,
        type: 'link',
        content: 'https://github.com/felipinas.png'
      },
    ],
  }
]