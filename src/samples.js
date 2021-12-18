const notes = [
    {
        note_id: 1,
        link: '8193f9fjwfsldk',
        headline: 'lololol',
        content: 'ji2ejf0wdojivjmwkmfdkmwkef',
        created_at: '1999-01-08 04:05:06',
    },
    {
        note_id: 2,
        link: '1u3fhj9o23ficm',
        headline: 'lalallala',
        content: 'u293hfiunwidnkjnsvd',
        created_at: '1999-01-10 04:05:06',
    },
    {
        note_id: 3,
        link: '013jr9ij0923f',
        headline: 'trolollo',
        content: '82jf9ej92j3f9j',
        created_at: '1999-01-14 04:05:06',
    },
]

const sources = [
    {
        source_id: 1,
        name: 'tsn',
        link: '823uivjoj23',
        rubric: 'politics',
        social_network_id: 1,
    },
    {
        source_id: 2,
        name: 'cnn',
        link: '189uj3i2fmji00',
        rubric: 'news',
        social_network_id: 2,
    },
    {
        source_id: 3,
        name: 'espn',
        link: '17u98j3fnio',
        rubric: 'sports',
        social_network_id: 3,
    },
    {
        source_id: 4,
        name: 'culturetv',
        link: '183j9j2jv9mio',
        rubric: 'music',
        social_network_id: 4,
    },
]

const posts = [
    {
        source_name: 'Taylor Swift',
        text: 'Hello Fans!',
        created_at: 'Вівторок, 14 грудня 2021 р. о 08:30',
        link: 'https://www.google.com.ua/search?q=1',
    },
    {
        source_name: 'Stack Overflow',
        text: 'Hello World!',
        created_at: 'Вівторок, 14 грудня 2021 р. о 06:00',
        link: 'https://www.google.com.ua/search?q=2',
    },
    {
        source_name: 'TSN',
        text: 'Hello Ukraine!',
        created_at: 'Вівторок, 14 грудня 2021 р. о 05:01',
        link: 'https://www.google.com.ua/search?q=3',
    },
]

const networks = [
    { social_network_id: 1, name: 'facebook' },
    { social_network_id: 2, name: 'tumblr' },
    { social_network_id: 3, name: 'twitter' },
]

module.exports = { notes, sources, posts, networks }
