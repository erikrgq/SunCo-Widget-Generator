export const CAROUSEL = {
    appId: '5963c0d619a30a2e00de36b8',
    props: {
        name: 'things_to_do',
        message: {
            type: 'carousel',
            role: 'appMaker',
            items: [
                {
                    title: 'Scandinave Getaway',
                    description:
                        'Enjoy massage treatments situated in a serene natural forest with an on-site bistro serving healthy local fare.',
                    mediaUrl: 'https://media.smooch.io/templates/template-scandinave.jpg',
                    actions: [
                        {
                            type: 'postback',
                            text: 'Learn more',
                            payload: 'NOOP'
                        },
                        {
                            type: 'postback',
                            text: 'Check availability',
                            payload: 'NOOP'
                        }
                    ]
                },
                {
                    title: 'Brewery Tour',
                    description:
                        "Explore Boston's thriving brewpub scene and taste roughly 18 types of beer on these guided morning and evening brewery tours.",
                    mediaUrl: 'https://media.smooch.io/templates/template-brewery-tour.jpg',
                    actions: [
                        {
                            type: 'postback',
                            text: 'Learn more',
                            payload: 'NOOP'
                        },
                        {
                            type: 'postback',
                            text: 'Check availability',
                            payload: 'NOOP'
                        }
                    ]
                },
                {
                    title: 'Whale Watching',
                    description:
                        'Experience the marine wildlife on this guided, 3-hour whale-watching cruise around the National Marine Sanctuary.',
                    mediaUrl: 'https://media.smooch.io/templates/template-whale-watching.jpg',
                    actions: [
                        {
                            type: 'postback',
                            text: 'Learn more',
                            payload: 'NOOP'
                        },
                        {
                            type: 'postback',
                            text: 'Check availability',
                            payload: 'NOOP'
                        }
                    ]
                },
                {
                    title: 'French Dining',
                    description:
                        'Gary Danko provides an award-winning combination of classic French cooking and personable yet impeccable service.',
                    mediaUrl: 'https://media.smooch.io/templates/template-french-dining.jpg',
                    actions: [
                        {
                            type: 'postback',
                            text: 'Learn more',
                            payload: 'NOOP'
                        },
                        {
                            type: 'postback',
                            text: 'Check availability',
                            payload: 'NOOP'
                        }
                    ]
                },
                {
                    title: 'Seafood Cuisine',
                    description:
                        'Ostra focuses on specialty seafood and the cuisine highlights the natural and fresh flavors of each dish.',
                    mediaUrl: 'https://media.smooch.io/templates/template-seafood-cuisine.jpg',
                    actions: [
                        {
                            type: 'postback',
                            text: 'Learn more',
                            payload: 'NOOP'
                        },
                        {
                            type: 'postback',
                            text: 'Check availability',
                            payload: 'NOOP'
                        }
                    ]
                }
            ]
        }
    }
}