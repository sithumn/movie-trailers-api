export const viaplayJson = {
  type: 'page',
  pageType: 'product',
  sectionId: '2037b330-d411-11e2-8b8b-0800200c9a66',
  title: 'Focus - Film online på Viaplay',
  description: 'Se filmen Focus med Will Smith, Gerald McRaney, Margot Robbie, Adrian Martinez, Rodrigo Santoro, BD Wong, Brennan Brown, Robert Taylor, Dotan Bonen, Griff Furst, Stephanie Honore, David Stanford, Dominic Fumusa, Steve Kim (I) på nätet. Se filmer online på Viaplay!',
  styles: [

  ],
  _links: {
    curies: [
      {
        name: 'viaplay',
        href: 'http://docs.viaplay.tv/rel/{rel}',
        templated: true,
      },
    ],
    self: {
      href: 'https://content.viaplay.se/pcdash-se/film/focus-2015',
    },
    'viaplay:root': {
      id: 'root',
      title: 'Start',
      href: 'https://content.viaplay.se/pcdash-se',
    },
    'viaplay:editorial': {
      id: 'editorial',
      href: 'https://content.viaplay.se/pcdash-se/editorial',
    },
    'viaplay:search': {
      title: 'Sök',
      href: 'https://content.viaplay.se/pcdash-se/search{?query}',
      templated: true,
    },
    'viaplay:autocomplete': {
      title: 'autocomplete',
      href: 'https://content.viaplay.se/pcdash-se/autocomplete{?query}',
      templated: true,
    },
    'viaplay:byGuid': {
      title: 'byGuid',
      href: 'https://content.viaplay.se/pcdash-se/byguid/{guid}{?returnFirstEpisode,seasonId,tveProgram}',
      templated: true,
    },
    'viaplay:searchSuggestions': {
      title: 'byGuids',
      href: 'https://content.viaplay.se/pcdash-se/search-suggestions/{guids}',
      templated: true,
    },
    'viaplay:validateSession': {
      id: 'validateSession',
      href: 'https://login.viaplay.se/api/validateSession/v1{?session}',
      templated: true,
    },
    'viaplay:translations': {
      id: 'translations',
      href: 'https://cms-service.viaplay.com/translations/pcdash',
      templated: false,
    },
    'viaplay:technotifier': {
      id: 'technotifier',
      href: 'https://viaplay.mtg-api.com/tech-notifications/v1/viaplay/sv-se/pcdash',
    },
    'viaplay:sections': [
      {
        id: '35bb8a90-d40e-11e2-8b8b-0800200c9a66',
        title: 'Serier',
        href: 'https://content.viaplay.se/pcdash-se/serier',
        type: 'vod',
        name: 'series',
      },
      {
        id: '2037b330-d411-11e2-8b8b-0800200c9a66',
        title: 'Filmer',
        href: 'https://content.viaplay.se/pcdash-se/film',
        type: 'vod',
        name: 'movie',
        active: true,
      },
      {
        id: '8e5febf0-d4e0-11e2-8b8b-0800200c9a66',
        title: 'Sport',
        href: 'https://content.viaplay.se/pcdash-se/sport',
        type: 'sportPerDay',
        name: 'sport',
      },
      {
        id: '1a6a2ec0-d4e2-11e2-8b8b-0800200c9a66',
        title: 'Barn',
        href: 'https://content.viaplay.se/pcdash-se/barn',
        type: 'children',
        name: 'kids',
      },
      {
        id: '85561ec0-d4e1-11e2-8b8b-0800200c9a66',
        title: 'Hyr & köp',
        href: 'https://content.viaplay.se/pcdash-se/store',
        type: 'vod',
        name: 'rental',
      },
      {
        id: '94ac6b96-d662-4850-9e72-964dfbbffc5e',
        title: 'Kanaler',
        href: 'https://content.viaplay.se/pcdash-se/kanaler',
        type: 'channels',
        name: 'channels',
      },
      {
        id: 'b35d0a33-ec9d-4e4c-9846-92addb9ec00d',
        title: 'Prova Viaplay',
        href: 'https://content.viaplay.se/pcdash-se/package',
        type: 'editorial',
        name: 'b35d0a33-ec9d-4e4c-9846-92addb9ec00d',
      },
      {
        id: '8e5febf0-d4e0-11e2-8b8b-080020winter',
        title: 'Viaplay Vinter',
        href: 'https://content.viaplay.se/pcdash-se/sport/viaplay-vinter',
        type: 'editorial',
        name: 'winter',
      },
    ],
    'viaplay:geolocation': {
      href: 'https://viaplay.mtg-api.com/geolocation/viaplay/portability{?ip,country}',
    },
    'viaplay:retrieveUserInformation': {
      id: 'retrieveUserInformation',
      href: 'https://viaplay.mtg-api.com/user-information/{brand}/users/{userId}',
      method: 'GET',
      templated: true,
    },
    'viaplay:localizationLanguages': {
      id: 'localizationLanguages',
      href: 'https://viaplay.mtg-api.com/localization/languages/se',
      method: 'GET',
    },
    'viaplay:localizationCountry': {
      id: 'localizationCountry',
      href: 'https://viaplay.mtg-api.com/localization/countries/{countryCode}',
      method: 'GET',
      templated: true,
    },
    'viaplay:userJourneyGetJourney': {
      id: 'userJourneyGetJourney',
      href: 'https://viaplay.mtg-api.com/user-journey/user/{userId}/profile/{profileId}/journey/{journeyId}',
      method: 'GET',
      templated: true,
    },
    'viaplay:login': {
      title: 'Login',
      href: 'https://login.viaplay.se/api/login/v1?deviceKey=pcdash-se&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015{&username,password,persistent,forward}',
      templated: true,
    },
    'viaplay:tokenLogin': {
      href: 'https://login.viaplay.se/api/tokenLogin?deviceKey=pcdash-se{&accessToken,refreshToken,persistent,returnurl}',
      method: 'GET',
      templated: true,
    },
    'viaplay:tokenRefresh': {
      href: 'https://login.viaplay.se/api/tokenRefresh/{userId}?deviceKey=pcdash-se',
      method: 'POST',
      templated: true,
    },
    'viaplay:setParentalControl': {
      id: 'setParentalControl',
      href: 'https://viaplay.mtg-api.com/identity/{brand}/users/{userId}/parental-control',
      method: 'POST',
      templated: true,
    },
    'viaplay:userPwdUpdate': {
      id: 'userPwdUpdate',
      href: 'https://viaplay.mtg-api.com/identity/{brand}/users/{userId}/password',
      method: 'PUT',
      templated: true,
    },
    'viaplay:userPwdLoginRequest': {
      id: 'userPwdLoginRequest',
      href: 'https://viaplay.mtg-api.com/identity/{brand}/auth/pwd/sessions',
      method: 'POST',
      templated: true,
    },
    'viaplay:passwordToken': {
      id: 'createPasswordToken',
      href: 'https://viaplay.mtg-api.com/identity/viaplay/emails/{email}/user/password-token',
      method: 'POST',
      templated: true,
    },
    'viaplay:resetPassword': {
      id: 'resetPassword',
      href: 'https://viaplay.mtg-api.com/identity/viaplay/passwords',
      method: 'PUT',
    },
    'viaplay:retrieveUserEmail': {
      id: 'retrieveUserEmail',
      href: 'https://viaplay.mtg-api.com/identity/{brand}/reset-pwd-tokens/{+resetPwdToken}/user/email',
      method: 'GET',
      templated: true,
    },
    'viaplay:universalLinkResolver': {
      id: 'universalLinkResolver',
      href: 'https://content.viaplay.se/pcdash-se/universalLink/{universalLink}',
      method: 'GET',
      templated: true,
    },
    'viaplay:userExperiments': {
      id: 'userExperiments',
      href: 'https://viaplay.mtg-api.com/experiments/users/{userId}',
      method: 'GET',
      templated: true,
    },
    'viaplay:tracking': {
      id: 'tracking',
      href: 'https://cronos-events.mtg-api.com/cronos-events/event/{brand}/pcdash-se/{clientVersion}/{sequenceNo}/{eventType}{?sessionId}',
      method: 'POST',
      templated: true,
    },
    'viaplay:multiPartial': {
      id: 'multiPartial',
      href: 'https://content.viaplay.se/pcdash-se/film/focus-2015?multiPartial=true{&blockIds}',
      method: 'GET',
      templated: true,
    },
  },
  _embedded: {
    'viaplay:blocks': [
      {
        client: {
          module: 'movie',
          template: 'movie',
        },
        totalProductCount: 1,
        type: 'product',
        styles: [
          'movie-product',
          'product',
        ],
        _embedded: {
          'viaplay:product': {
            type: 'movie',
            publicPath: 'focus-2015',
            content: {
              duration: {
                milliseconds: 6022784,
                readable: '1 h 40 min',
              },
              images: {
                boxart: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-c01b740b30e00f676314307bc6d898dbefad4722.jpg?width=199&height=298',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-c01b740b30e00f676314307bc6d898dbefad4722.jpg{?width,height}',
                },
                landscape: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg?width=960&height=540',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg{?width,height}',
                },
                packshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-8747e349b521a1fe787d9926b2320892efa04cd5.jpg?width=960&height=540',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-8747e349b521a1fe787d9926b2320892efa04cd5.jpg{?width,height}',
                },
                hero169: {
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg{?width,height}',
                },
                coverart23: {
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-c01b740b30e00f676314307bc6d898dbefad4722.jpg{?width,height}',
                },
                coverart169: {
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-8747e349b521a1fe787d9926b2320892efa04cd5.jpg{?width,height}',
                },
              },
              promoVideos: {
                promoVideo169: {
                  href: 'https://prod-promo-videos-cdn2-vp.cdn.viaplay.tv/38b4daa/promo_5313-cf8f-e3ef-2de4-5f1f-w_1.mp4',
                },
                promoVideo34: {
                  href: 'https://prod-promo-videos-cdn2-vp.cdn.viaplay.tv/0393a2a/promo_5313-cf8f-e3ef-2de4-5f1f-w_2.mp4',
                },
              },
              parentalRating: '15',
              people: {
                actors: [
                  'Will Smith',
                  'Gerald McRaney',
                  'Margot Robbie',
                  'Adrian Martinez',
                  'Rodrigo Santoro',
                  'BD Wong',
                  'Brennan Brown',
                  'Robert Taylor',
                  'Dotan Bonen',
                  'Griff Furst',
                  'Stephanie Honore',
                  'David Stanford',
                  'Dominic Fumusa',
                  'Steve Kim (I)',
                ],
                directors: [
                  'John Requa',
                  'Glenn Ficarra',
                ],
                participants: [
                  'Will Smith',
                  'Gerald McRaney',
                  'Margot Robbie',
                  'Adrian Martinez',
                  'Rodrigo Santoro',
                  'BD Wong',
                  'Brennan Brown',
                  'Robert Taylor',
                  'Dotan Bonen',
                  'Griff Furst',
                  'Stephanie Honore',
                  'David Stanford',
                  'Dominic Fumusa',
                  'Steve Kim (I)',
                ],
                people: [
                  {
                    name: 'Will Smith',
                    groups: [
                      'Actor',
                    ],
                    personId: '96501288281',
                  },
                  {
                    name: 'Gerald McRaney',
                    groups: [
                      'Actor',
                    ],
                    personId: '101582888074',
                  },
                  {
                    name: 'Margot Robbie',
                    groups: [
                      'Actor',
                    ],
                    personId: '96361511979',
                  },
                  {
                    name: 'Adrian Martinez',
                    groups: [
                      'Actor',
                    ],
                    personId: '101960744393',
                  },
                  {
                    name: 'Rodrigo Santoro',
                    groups: [
                      'Actor',
                    ],
                    personId: '97601575956',
                  },
                  {
                    name: 'BD Wong',
                    groups: [
                      'Actor',
                    ],
                    personId: '199243304450',
                  },
                  {
                    name: 'Brennan Brown',
                    groups: [
                      'Actor',
                    ],
                    personId: '112799784239',
                  },
                  {
                    name: 'Robert Taylor',
                    groups: [
                      'Actor',
                    ],
                    personId: '154670632152',
                  },
                  {
                    name: 'Dotan Bonen',
                    groups: [
                      'Actor',
                    ],
                    personId: '227204648382',
                  },
                  {
                    name: 'Griff Furst',
                    groups: [
                      'Actor',
                    ],
                    personId: '162938920248',
                  },
                  {
                    name: 'Stephanie Honore',
                    groups: [
                      'Actor',
                    ],
                    personId: '227204648385',
                  },
                  {
                    name: 'David Stanford',
                    groups: [
                      'Actor',
                    ],
                    personId: '227204648387',
                  },
                  {
                    name: 'Dominic Fumusa',
                    groups: [
                      'Actor',
                    ],
                    personId: '115473959973',
                  },
                  {
                    name: 'Steve Kim (I)',
                    groups: [
                      'Actor',
                    ],
                    personId: '227204648390',
                  },
                  {
                    name: 'Glenn Ficarra',
                    groups: [
                      'Director',
                    ],
                    personId: '101960744391',
                  },
                  {
                    name: 'John Requa',
                    groups: [
                      'Director',
                    ],
                    personId: '101960744395',
                  },
                ],
              },
              production: {
                country: 'USA',
                year: 2015,
              },
              imdb: {
                id: 'tt2381941',
                rating: '6.6',
                votes: '230 237',
                url: 'http://www.imdb.com/title/tt2381941?ref_ext_viaplay',
              },
              synopsis: 'Nicky är en luttrad lurendrejare som slår sina påsar ihop med Jess, en nybörjare i bondfångeribranschen. När han lär henne sina yrkeshemligheter kommer hon alltför nära och han avslutar därför samarbetet.',
              title: 'Focus',
            },
            user: {
              starred: false,
              entitled: false,
              rented: false,
            },
            system: {
              availability: {
                start: '2015-07-12T22:00:00.000Z',
                end: '2038-01-19T03:14:07.077Z',
                planInfo: {
                  isRental: false,
                  isPurchase: false,
                },
                svod: {
                  start: '2021-11-14T23:00:00.000Z',
                  end: '2023-05-14T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                },
                tvod: {
                  start: '2015-07-12T22:00:00.000Z',
                  end: '2038-01-19T03:14:07.077Z',
                  planInfo: {
                    isRental: true,
                    isPurchase: false,
                    price: '39',
                    mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2482112',
                    pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                    subscriptionPeriodSeconds: 172800,
                  },
                },
                est: {
                  start: '2018-03-18T23:00:00.000Z',
                  end: '2038-01-19T03:14:07.077Z',
                  planInfo: {
                    isRental: true,
                    isPurchase: true,
                    price: '99',
                    mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2482110',
                    pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/665093',
                  },
                },
                estPlayback: {
                  start: '2018-03-18T23:00:00.000Z',
                  end: '2038-01-19T03:14:07.077Z',
                  planInfo: {
                    isRental: true,
                    isPurchase: true,
                    price: 0,
                  },
                },
              },
              flags: [
                'hd',
                'availableInHd',
              ],
              guid: '20206018',
              productKey: '20206018',
              isKids: false,
            },
            _links: {
              self: {
                title: 'Focus',
                href: 'https://content.viaplay.se/pcdash-se/film/focus-2015?partial=true',
              },
              'viaplay:page': {
                title: 'Focus',
                href: 'https://content.viaplay.se/pcdash-se/film/focus-2015',
              },
              'viaplay:templatedPage': {
                title: 'Focus',
                href: 'https://content.viaplay.se/{deviceKey}/film/focus-2015',
              },
              'viaplay:genres': [
                {
                  title: 'Komedi',
                  tagId: '99368193',
                  href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                },
                {
                  title: 'Kriminaldrama',
                  tagId: '99368197',
                  href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                },
              ],
              'viaplay:stream': {
                href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20206018&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                templated: true,
              },
              'viaplay:templatedStream': {
                href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20206018&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Ffocus-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                templated: true,
              },
              'viaplay:trailerStream': {
                href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-E536-47F8-00A5-3F40-6276-4&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-E536-47F8-00A5-3F40-6276-4%3FparentProgramGuid%3D20206018&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-E536-47F8-00A5-3F40-6276-4%3FparentProgramGuid%3D20206018&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                templated: true,
              },
              'viaplay:trailerSelf': {
                href: 'https://content.viaplay.se/pcdash-se/byguid/10-5240-E536-47F8-00A5-3F40-6276-4?parentProgramGuid=20206018&partial=true',
              },
              'viaplay:peopleSearch': {
                href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                templated: true,
              },
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                templated: true,
              },
            },
            notice: {
              message: 'User must login to view content',
              code: 1002,
              _links: {
                curies: [
                  {
                    name: 'viaplay',
                    href: 'http://docs.viaplay.tv/rel/{rel}',
                    templated: true,
                  },
                ],
                'viaplay:accountPurchasePackage': {
                  href: '/package?recommended=viaplay',
                  templated: false,
                  redirect: false,
                },
              },
            },
          },
        },
      },
      {
        ablocator: 'a8abed79-78fe-4189-8507-ebba3d6g77wf',
        id: 'a8abed79-78fe-4189-8507-ebba3d6g77wf',
        type: 'trailer-list',
        client: {
          module: 'collection',
          template: 'collection',
          styles: 'landscape list',
        },
        styles: [
          'landscape',
          'list',
        ],
        title: 'Trailer',
        totalProductCount: 1,
        currentPage: 1,
        pageCount: 1,
        productsPerPage: 14,
        _embedded: {
          'viaplay:products': [
            {
              type: 'trailer',
              content: {
                duration: {
                  milliseconds: 132032,
                  readable: '2 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-c01b740b30e00f676314307bc6d898dbefad4722.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-c01b740b30e00f676314307bc6d898dbefad4722.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-8747e349b521a1fe787d9926b2320892efa04cd5.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-8747e349b521a1fe787d9926b2320892efa04cd5.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-c01b740b30e00f676314307bc6d898dbefad4722.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/910/396/1460162285-9145e86a5175d524aade7d384f689cb219f62ade.jpg{?width,height}',
                  },
                },
                production: {
                  country: '',
                  year: 2015,
                },
                parentalRating: '15',
                synopsis: 'Nicky är en luttrad lurendrejare som slår sina påsar ihop med Jess, en nybörjare i bondfångeribranschen. När han lär henne sina yrkeshemligheter kommer hon alltför nära och han avslutar därför samarbetet.',
                title: 'Focus - trailer',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2019-10-09T22:00:00.000Z',
                  end: '2030-01-01T00:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  free: {
                    start: '2019-10-09T22:00:00.000Z',
                    end: '2030-01-01T00:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '10-5240-E536-47F8-00A5-3F40-6276-4',
                productKey: '10-5240-E536-47F8-00A5-3F40-6276-4',
                isKids: false,
              },
              _links: {
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                ],
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=10-5240-E536-47F8-00A5-3F40-6276-4&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-E536-47F8-00A5-3F40-6276-4%3FparentProgramGuid%3D20206018&sectionPath=%2Ffilm&defaultAvailabilityContext=free',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-E536-47F8-00A5-3F40-6276-4&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-E536-47F8-00A5-3F40-6276-4%3FparentProgramGuid%3D20206018&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-E536-47F8-00A5-3F40-6276-4%3FparentProgramGuid%3D20206018&sectionPath=%2Ffilm&defaultAvailabilityContext=free',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
              trailer: {
                guid: '10-5240-E536-47F8-00A5-3F40-6276-4',
                relatedContentType: 'program',
                relatedContentGuid: '20206018',
                trailerType: 'theatrical',
                relatedProgramGuid: '20206018',
              },
            },
          ],
        },
        _links: {
          self: {
            href: 'https://content.viaplay.se/pcdash-se/film/focus-2015?blockId=a8abed79-78fe-4189-8507-ebba3d6g77wf&partial=1&pageNumber=1',
          },
        },
      },
      {
        id: 'b2a0d0ac-65ea-4a43-bd91-a67232d49yzx',
        type: 'people',
        client: {
          module: 'people',
          template: 'people',
        },
        styles: [
          'people',
        ],
        title: 'Medverkande',
        totalProductCount: 13,
        currentPage: 1,
        pageCount: 1,
        productsPerPage: 0,
        _embedded: {
          people: [
            {
              personId: '96501288281',
              name: 'Will Smith',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/will-smith?personId=96501288281',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/550/400/1615723593-4d9fdc2537eca48081b8f1a8d6f18a29d81ce6ee.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/550/400/1615723593-4d9fdc2537eca48081b8f1a8d6f18a29d81ce6ee.jpg{?width,height}',
                },
              },
              firstName: 'Will',
              lastName: 'Smith',
              birthDate: '1968-09-25',
              characterName: 'Nicky',
            },
            {
              personId: '101582888074',
              name: 'Gerald McRaney',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/gerald-mcraney?personId=101582888074',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/885/144/1615787019-12028f53c64e57cf24a8da21999e7f55b5233f2f.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/885/144/1615787019-12028f53c64e57cf24a8da21999e7f55b5233f2f.jpg{?width,height}',
                },
              },
              firstName: 'Gerald',
              lastName: 'McRaney',
              birthDate: '1947-08-19',
              characterName: 'Owens',
            },
            {
              personId: '96361511979',
              name: 'Margot Robbie',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/margot-robbie?personId=96361511979',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/892/116/1615787016-25a0ddb731194894754b9bfbc74b04c195ff2989.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/892/116/1615787016-25a0ddb731194894754b9bfbc74b04c195ff2989.jpg{?width,height}',
                },
              },
              firstName: 'Margot',
              lastName: 'Robbie',
              birthDate: '1990-07-02',
              characterName: 'Jess',
            },
            {
              personId: '101960744393',
              name: 'Adrian Martinez',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/adrian-martinez?personId=101960744393',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/989/908/1615771588-e073717bc13f7001e5a8aa88b21c6483335d380a.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/989/908/1615771588-e073717bc13f7001e5a8aa88b21c6483335d380a.jpg{?width,height}',
                },
              },
              firstName: 'Adrian',
              lastName: 'Martinez',
              birthDate: '1972-01-20',
              characterName: 'Farhad',
            },
            {
              personId: '97601575956',
              name: 'Rodrigo Santoro',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/rodrigo-santoro?personId=97601575956',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/243/1020/1615771168-f2f09dece1d862fb9d3d418f2634329c8f94c392.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/243/1020/1615771168-f2f09dece1d862fb9d3d418f2634329c8f94c392.jpg{?width,height}',
                },
              },
              firstName: 'Rodrigo',
              lastName: 'Santoro',
              birthDate: '1975-08-22',
              characterName: 'Garriga',
            },
            {
              personId: '199243304450',
              name: 'BD Wong',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/bd-wong?personId=199243304450',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/134/16/1626800005-6fd4f209c7fcc5b50ac0205e2c0b2d9d0cf67aeb.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/134/16/1626800005-6fd4f209c7fcc5b50ac0205e2c0b2d9d0cf67aeb.jpg{?width,height}',
                },
              },
              firstName: 'BD',
              lastName: 'Wong',
              birthDate: '1960-10-24',
              characterName: 'Liyuan',
            },
            {
              personId: '112799784239',
              name: 'Brennan Brown',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/brennan-brown?personId=112799784239',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/724/704/1615700723-ba53a757b367213a23b07dca099ab45787ed64c6.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/724/704/1615700723-ba53a757b367213a23b07dca099ab45787ed64c6.jpg{?width,height}',
                },
              },
              firstName: 'Brennan',
              lastName: 'Brown',
              birthDate: null,
              characterName: 'Horst',
            },
            {
              personId: '154670632152',
              name: 'Robert Taylor',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/robert-taylor?personId=154670632152',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/32/96/1615787022-952138f0fb265f5eb9a0e4a7bfe36c3c520ad3b3.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/32/96/1615787022-952138f0fb265f5eb9a0e4a7bfe36c3c520ad3b3.jpg{?width,height}',
                },
              },
              firstName: 'Robert',
              lastName: 'Taylor',
              birthDate: '1963-07-07',
              characterName: 'McEwen',
            },
            {
              personId: '162938920248',
              name: 'Griff Furst',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/griff-furst?personId=162938920248',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/119/400/1615787030-c94232fd08531c4225122a1c64b1981b81bcddc3.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/119/400/1615787030-c94232fd08531c4225122a1c64b1981b81bcddc3.jpg{?width,height}',
                },
              },
              firstName: 'Griff',
              lastName: 'Furst',
              birthDate: '1981-09-17',
              characterName: 'Gareth',
            },
            {
              personId: '227204648387',
              name: 'David Stanford',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/david-stanford?personId=227204648387',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/725/356/1615787035-b6e7253176c7d0371cdb5f5d389a57afc7a9e3f2.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/725/356/1615787035-b6e7253176c7d0371cdb5f5d389a57afc7a9e3f2.jpg{?width,height}',
                },
              },
              firstName: 'David',
              lastName: 'Stanford',
              birthDate: null,
              characterName: 'Drunken Stranger',
            },
            {
              personId: '115473959973',
              name: 'Dominic Fumusa',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/dominic-fumusa?personId=115473959973',
              },
              groups: [
                'Actor',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/431/1020/1628706761-b73e2bd9121c8f1f7afa4ed1a3f43fe8bb08ddd3.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/431/1020/1628706761-b73e2bd9121c8f1f7afa4ed1a3f43fe8bb08ddd3.jpg{?width,height}',
                },
              },
              firstName: 'Dominic',
              lastName: 'Fumusa',
              birthDate: '1969-09-13',
              characterName: 'Jared',
            },
            {
              personId: '101960744391',
              name: 'Glenn Ficarra',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/glenn-ficarra?personId=101960744391',
              },
              groups: [
                'Director',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/667/72/1615787042-ff50025516c7d1a37893b3f251f1fc2847b09218.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/667/72/1615787042-ff50025516c7d1a37893b3f251f1fc2847b09218.jpg{?width,height}',
                },
              },
              firstName: 'Glenn',
              lastName: 'Ficarra',
              birthDate: '1971-05-27',
            },
            {
              personId: '101960744395',
              name: 'John Requa',
              'viaplay:peoplePage': {
                href: 'https://content.viaplay.se/pcdash-se/people/john-requa?personId=101960744395',
              },
              groups: [
                'Director',
              ],
              type: 'people',
              images: {
                headshot: {
                  url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/667/72/1615787043-ebdce6d0fc7c96efa91fbba460e2023352a1f391.jpg?width=216&height=288',
                  template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/667/72/1615787043-ebdce6d0fc7c96efa91fbba460e2023352a1f391.jpg{?width,height}',
                },
              },
              firstName: 'John',
              lastName: 'Requa',
              birthDate: null,
            },
          ],
        },
      },
      {
        ablocator: 'a8abed79-78fe-4189-8507-ebba3d6134e7',
        id: 'a8abed79-78fe-4189-8507-ebba3d6134e7',
        type: 'list',
        client: {
          module: 'collection',
          template: 'collection',
          styles: 'landscape list carousel',
        },
        styles: [
          'landscape',
          'list',
          'carousel',
        ],
        title: 'Liknande filmer',
        totalProductCount: 14,
        currentPage: 1,
        pageCount: 1,
        productsPerPage: 14,
        _embedded: {
          'viaplay:products': [
            {
              type: 'movie',
              publicPath: 'lovligt-byte-2012',
              content: {
                duration: {
                  milliseconds: 5243872,
                  readable: '1 h 27 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/320/684/1506930326-064ced18fb5429a693709ecf57ce6d91e8067793.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/320/684/1506930326-064ced18fb5429a693709ecf57ce6d91e8067793.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/85/476/1473955878-1b278c05d68709a132480c24bbad4320ad27d0f9.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/85/476/1473955878-1b278c05d68709a132480c24bbad4320ad27d0f9.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/85/476/1504083596-3e399438eaa347c03a9475e1d276ef21c4b5227b.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/85/476/1504083596-3e399438eaa347c03a9475e1d276ef21c4b5227b.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/85/476/1473955878-1b278c05d68709a132480c24bbad4320ad27d0f9.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/320/684/1506930326-064ced18fb5429a693709ecf57ce6d91e8067793.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/85/476/1504083596-3e399438eaa347c03a9475e1d276ef21c4b5227b.jpg{?width,height}',
                  },
                },
                originalTitle: 'One for the Money',
                people: {
                  actors: [
                    'Katherine Heigl',
                    "Jason O'Mara",
                    'Daniel Sunjata',
                    'John Leguizamo',
                    'Debbie Reynolds',
                    'Sherri Shepherd',
                    'Nate Mooney',
                    'Ryan Michelle Bathe',
                    'Debra Monk',
                    'Adam Paul',
                    'Fisher Stevens',
                    'Ana Reeder',
                    'Patrick Fischler',
                    'Leonardo Nam',
                    'Annie Parisse',
                    'Danny Mastrogiorgio',
                    'Gavin-Keith Umeh',
                    'Louis Mustillo',
                    "Harry O'Toole",
                  ],
                  directors: [
                    'Julie Anne Robinson',
                  ],
                  participants: [
                    'Katherine Heigl',
                    "Jason O'Mara",
                    'Daniel Sunjata',
                    'John Leguizamo',
                    'Debbie Reynolds',
                    'Sherri Shepherd',
                    'Nate Mooney',
                    'Ryan Michelle Bathe',
                    'Debra Monk',
                    'Adam Paul',
                    'Fisher Stevens',
                    'Ana Reeder',
                    'Patrick Fischler',
                    'Leonardo Nam',
                    'Annie Parisse',
                    'Danny Mastrogiorgio',
                    'Gavin-Keith Umeh',
                    'Louis Mustillo',
                    "Harry O'Toole",
                  ],
                  people: [
                    {
                      name: 'Katherine Heigl',
                      groups: [
                        'Executive producer',
                        'Actor',
                      ],
                      personId: '100465704221',
                    },
                    {
                      name: "Jason O'Mara",
                      groups: [
                        'Actor',
                      ],
                      personId: '125568040333',
                    },
                    {
                      name: 'Daniel Sunjata',
                      groups: [
                        'Actor',
                      ],
                      personId: '105870888269',
                    },
                    {
                      name: 'John Leguizamo',
                      groups: [
                        'Actor',
                      ],
                      personId: '100628520079',
                    },
                    {
                      name: 'Debbie Reynolds',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584424193',
                    },
                    {
                      name: 'Sherri Shepherd',
                      groups: [
                        'Actor',
                      ],
                      personId: '122824744324',
                    },
                    {
                      name: 'Nate Mooney',
                      groups: [
                        'Actor',
                      ],
                      personId: '199565864321',
                    },
                    {
                      name: 'Ryan Michelle Bathe',
                      groups: [
                        'Actor',
                      ],
                      personId: '195883048128',
                    },
                    {
                      name: 'Debra Monk',
                      groups: [
                        'Actor',
                      ],
                      personId: '199241256384',
                    },
                    {
                      name: 'Adam Paul',
                      groups: [
                        'Actor',
                      ],
                      personId: '201692200356',
                    },
                    {
                      name: 'Fisher Stevens',
                      groups: [
                        'Actor',
                      ],
                      personId: '109863463963',
                    },
                    {
                      name: 'Ana Reeder',
                      groups: [
                        'Actor',
                      ],
                      personId: '227188264054',
                    },
                    {
                      name: 'Patrick Fischler',
                      groups: [
                        'Actor',
                      ],
                      personId: '97011240295',
                    },
                    {
                      name: 'Leonardo Nam',
                      groups: [
                        'Actor',
                      ],
                      personId: '205351464432',
                    },
                    {
                      name: 'Annie Parisse',
                      groups: [
                        'Actor',
                      ],
                      personId: '134342184382',
                    },
                    {
                      name: 'Danny Mastrogiorgio',
                      groups: [
                        'Actor',
                      ],
                      personId: '206897704305',
                    },
                    {
                      name: 'Gavin-Keith Umeh',
                      groups: [
                        'Actor',
                      ],
                      personId: '214633512278',
                    },
                    {
                      name: 'Louis Mustillo',
                      groups: [
                        'Actor',
                      ],
                      personId: '201217576306',
                    },
                    {
                      name: "Harry O'Toole",
                      groups: [
                        'Actor',
                      ],
                      personId: '234181671975',
                    },
                    {
                      name: 'Julie Anne Robinson',
                      groups: [
                        'Director',
                      ],
                      personId: '217137192410',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2012,
                },
                parentalRating: '12',
                imdb: {
                  id: 'tt1598828',
                  rating: '5.3',
                  votes: '41 682',
                  url: 'http://www.imdb.com/title/tt1598828?ref_ext_viaplay',
                },
                synopsis: 'Stephanie Plum saknar både jobb och pengar. Desperat tvingar hon sin kusin Vinnie att anställa henne som prisjägare. Hennes första uppdrag blir att hitta den mordmisstänkte före detta polisen Joe Morelli.',
                title: 'Lovligt byte',
              },
              user: {
                starred: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2020-04-30T22:00:00.000Z',
                  end: '2025-05-15T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-11-30T23:00:00.000Z',
                    end: '2022-11-30T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2020-04-30T22:00:00.000Z',
                    end: '2025-05-15T22:00:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '29',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2439014',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1218',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'S90829',
                productKey: 'S90829',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Lovligt byte',
                  href: 'https://content.viaplay.se/pcdash-se/film/lovligt-byte-2012?partial=true',
                },
                'viaplay:page': {
                  title: 'Lovligt byte',
                  href: 'https://content.viaplay.se/pcdash-se/film/lovligt-byte-2012',
                },
                'viaplay:templatedPage': {
                  title: 'Lovligt byte',
                  href: 'https://content.viaplay.se/{deviceKey}/film/lovligt-byte-2012',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pcdash-se/film/action',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=S90829&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Flovligt-byte-2012%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=S90829&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Flovligt-byte-2012%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Flovligt-byte-2012%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'be-cool-2005',
              content: {
                duration: {
                  milliseconds: 6882912,
                  readable: '1 h 54 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020696-53221b6d46b567ebf04e3231564153a87e399417.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020696-53221b6d46b567ebf04e3231564153a87e399417.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020715-f4537ff99fbc815e4571b21419dc46f0f538d8a2.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020715-f4537ff99fbc815e4571b21419dc46f0f538d8a2.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020695-6fdb47afe10ff0c748a96d7b9210f99c6b4eb91e.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020695-6fdb47afe10ff0c748a96d7b9210f99c6b4eb91e.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020715-f4537ff99fbc815e4571b21419dc46f0f538d8a2.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020696-53221b6d46b567ebf04e3231564153a87e399417.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/802/464/1605020695-6fdb47afe10ff0c748a96d7b9210f99c6b4eb91e.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'John Travolta',
                    'Uma Thurman',
                    'Vince Vaughn',
                    'Danny De Vito',
                    'André Benjamin',
                    'Cedric the Entertainer',
                    'Steven Tyler',
                    'Christina Milian',
                    'Harvey Keitel',
                    'Dwayne Johnson',
                    'Robert Pastorelli',
                    'Paul Adelstein',
                    'Debi Mazar',
                    'Gregory Alan Williams',
                    'Danny DeVito',
                    'James Woods',
                    'James Gandolfini',
                  ],
                  directors: [
                    'F. Gary Gray',
                  ],
                  participants: [
                    'John Travolta',
                    'Uma Thurman',
                    'Vince Vaughn',
                    'Danny De Vito',
                    'André Benjamin',
                    'Cedric the Entertainer',
                    'Steven Tyler',
                    'Christina Milian',
                    'Harvey Keitel',
                    'Dwayne Johnson',
                    'Robert Pastorelli',
                    'Paul Adelstein',
                    'Debi Mazar',
                    'Gregory Alan Williams',
                    'Danny DeVito',
                    'James Woods',
                    'James Gandolfini',
                  ],
                  people: [
                    {
                      name: 'John Travolta',
                      groups: [
                        'Actor',
                      ],
                      personId: '96236072221',
                    },
                    {
                      name: 'Uma Thurman',
                      groups: [
                        'Actor',
                      ],
                      personId: '95223848302',
                    },
                    {
                      name: 'Vince Vaughn',
                      groups: [
                        'Actor',
                      ],
                      personId: '96146984070',
                    },
                    {
                      name: 'Danny De Vito',
                      groups: [
                        'Actor',
                      ],
                      personId: '169956392421',
                    },
                    {
                      name: 'André Benjamin',
                      groups: [
                        'Actor',
                      ],
                      personId: '104265256280',
                    },
                    {
                      name: 'Cedric the Entertainer',
                      groups: [
                        'Actor',
                      ],
                      personId: '96146984117',
                    },
                    {
                      name: 'Steven Tyler',
                      groups: [
                        'Actor',
                      ],
                      personId: '104905256383',
                    },
                    {
                      name: 'Christina Milian',
                      groups: [
                        'Actor',
                      ],
                      personId: '158463528282',
                    },
                    {
                      name: 'Harvey Keitel',
                      groups: [
                        'Actor',
                      ],
                      personId: '104434216314',
                    },
                    {
                      name: 'Dwayne Johnson',
                      groups: [
                        'Actor',
                      ],
                      personId: '96230440043',
                    },
                    {
                      name: 'Robert Pastorelli',
                      groups: [
                        'Actor',
                      ],
                      personId: '157486632246',
                    },
                    {
                      name: 'Paul Adelstein',
                      groups: [
                        'Actor',
                      ],
                      personId: '146370600386',
                    },
                    {
                      name: 'Debi Mazar',
                      groups: [
                        'Actor',
                      ],
                      personId: '97569320199',
                    },
                    {
                      name: 'Gregory Alan Williams',
                      groups: [
                        'Actor',
                      ],
                      personId: '192772135967',
                    },
                    {
                      name: 'Danny DeVito',
                      groups: [
                        'Producer',
                        'Actor',
                      ],
                      personId: '96204840354',
                    },
                    {
                      name: 'James Woods',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584424245',
                    },
                    {
                      name: 'James Gandolfini',
                      groups: [
                        'Actor',
                      ],
                      personId: '96361000291',
                    },
                    {
                      name: 'F. Gary Gray',
                      groups: [
                        'Executive producer',
                        'Director',
                      ],
                      personId: '96235048378',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2005,
                },
                parentalRating: '12',
                imdb: {
                  id: 'tt0377471',
                  rating: '5.6',
                  votes: '68 490',
                  url: 'http://www.imdb.com/title/tt0377471?ref_ext_viaplay',
                },
                synopsis: 'Tidigare lånhajen Chili Palmer är tillbaka i den här roliga uppföljaren till "Get Shorty" om en gangster som blev Hollywood-producent... och om vad som krävs för att bli bäst med en kula!',
                title: 'Be Cool',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2020-12-30T23:00:00.000Z',
                  end: '2022-12-30T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-12-30T23:00:00.000Z',
                    end: '2022-12-30T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'S97439',
                productKey: 'S97439',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Be Cool',
                  href: 'https://content.viaplay.se/pcdash-se/film/be-cool-2005?partial=true',
                },
                'viaplay:page': {
                  title: 'Be Cool',
                  href: 'https://content.viaplay.se/pcdash-se/film/be-cool-2005',
                },
                'viaplay:templatedPage': {
                  title: 'Be Cool',
                  href: 'https://content.viaplay.se/{deviceKey}/film/be-cool-2005',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=S97439&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fbe-cool-2005%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=S97439&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fbe-cool-2005%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fbe-cool-2005%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'into-the-blue-2005',
              content: {
                duration: {
                  milliseconds: 6343232,
                  readable: '1 h 45 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726985-078a22aa6e3759b90948062da511d7206f0841a2.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726985-078a22aa6e3759b90948062da511d7206f0841a2.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726986-c80904d881207c4645983347d0c518300eb25cb5.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726986-c80904d881207c4645983347d0c518300eb25cb5.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726987-ad45783eeffc99e7812dee8acd2c4a95b2dd307b.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726987-ad45783eeffc99e7812dee8acd2c4a95b2dd307b.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726986-c80904d881207c4645983347d0c518300eb25cb5.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726985-078a22aa6e3759b90948062da511d7206f0841a2.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/193/156/1554726987-ad45783eeffc99e7812dee8acd2c4a95b2dd307b.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Paul Walker',
                    'Jessica Alba',
                    'Scott Caan',
                    'Ashley Scott',
                    'Josh Brolin',
                    'James Frain',
                    'Tyson Beckford',
                    'Dwayne Adway',
                    'Gill Montie',
                    'Ramon Saunders',
                    'Chris Taloa',
                  ],
                  directors: [
                    'John Stockwell',
                  ],
                  participants: [
                    'Paul Walker',
                    'Jessica Alba',
                    'Scott Caan',
                    'Ashley Scott',
                    'Josh Brolin',
                    'James Frain',
                    'Tyson Beckford',
                    'Dwayne Adway',
                    'Gill Montie',
                    'Ramon Saunders',
                    'Chris Taloa',
                  ],
                  people: [
                    {
                      name: 'Paul Walker',
                      groups: [
                        'Actor',
                      ],
                      personId: '96235560190',
                    },
                    {
                      name: 'Jessica Alba',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584936159',
                    },
                    {
                      name: 'Scott Caan',
                      groups: [
                        'Actor',
                      ],
                      personId: '116100136033',
                    },
                    {
                      name: 'Ashley Scott',
                      groups: [
                        'Actor',
                      ],
                      personId: '168795176089',
                    },
                    {
                      name: 'Josh Brolin',
                      groups: [
                        'Actor',
                      ],
                      personId: '96234024436',
                    },
                    {
                      name: 'James Frain',
                      groups: [
                        'Actor',
                      ],
                      personId: '97590312035',
                    },
                    {
                      name: 'Tyson Beckford',
                      groups: [
                        'Actor',
                      ],
                      personId: '234871336369',
                    },
                    {
                      name: 'Dwayne Adway',
                      groups: [
                        'Actor',
                      ],
                      personId: '206009384232',
                    },
                    {
                      name: 'Gill Montie',
                      groups: [
                        'Actor',
                      ],
                      personId: '234871336372',
                    },
                    {
                      name: 'Ramon Saunders',
                      groups: [
                        'Actor',
                      ],
                      personId: '234871336374',
                    },
                    {
                      name: 'Chris Taloa',
                      groups: [
                        'Actor',
                      ],
                      personId: '234871336376',
                    },
                    {
                      name: 'John Stockwell',
                      groups: [
                        'Director',
                      ],
                      personId: '122057256182',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2005,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt0378109',
                  rating: '5.9',
                  votes: '75 163',
                  url: 'http://www.imdb.com/title/tt0378109?ref_ext_viaplay',
                },
                synopsis: 'En grupp unga dykare på semester får stora problem med en knark-gangster när de hittar ett störtat plan i vattnet som är fyllt med olaglig last.',
                title: 'Into the Blue',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2020-12-20T23:00:00.000Z',
                  end: '2022-12-20T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-12-20T23:00:00.000Z',
                    end: '2022-12-20T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20646320',
                productKey: '20646320',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Into the Blue',
                  href: 'https://content.viaplay.se/pcdash-se/film/into-the-blue-2005?partial=true',
                },
                'viaplay:page': {
                  title: 'Into the Blue',
                  href: 'https://content.viaplay.se/pcdash-se/film/into-the-blue-2005',
                },
                'viaplay:templatedPage': {
                  title: 'Into the Blue',
                  href: 'https://content.viaplay.se/{deviceKey}/film/into-the-blue-2005',
                },
                'viaplay:genres': [
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                  {
                    title: 'Thriller',
                    tagId: '99368200',
                    href: 'https://content.viaplay.se/pcdash-se/film/thriller',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20646320&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Finto-the-blue-2005%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20646320&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Finto-the-blue-2005%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Finto-the-blue-2005%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'brand-2015',
              content: {
                duration: {
                  milliseconds: 5785952,
                  readable: '1 h 36 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/381/104/1460980245-0c08cd1e4f9cdba3ed341f39a1b968579697b6fc.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/381/104/1460980245-0c08cd1e4f9cdba3ed341f39a1b968579697b6fc.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/380/628/1460980244-6f2b505665c4ccf69ca39c6e951c603121ca62a8.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/380/628/1460980244-6f2b505665c4ccf69ca39c6e951c603121ca62a8.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/381/104/1460980245-bb8e5d6d6e0fc6fc65c8fd652e053a5210eafb7e.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/381/104/1460980245-bb8e5d6d6e0fc6fc65c8fd652e053a5210eafb7e.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/380/628/1460980244-6f2b505665c4ccf69ca39c6e951c603121ca62a8.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/381/104/1460980245-0c08cd1e4f9cdba3ed341f39a1b968579697b6fc.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/381/104/1460980245-bb8e5d6d6e0fc6fc65c8fd652e053a5210eafb7e.jpg{?width,height}',
                  },
                },
                originalTitle: 'Burnt',
                people: {
                  actors: [
                    'Daniel Brühl',
                    'Sienna Miller',
                    'Omar Sy',
                    'Riccardo Scamarcio',
                    'Bradley Cooper',
                    'Sam Keeley',
                    'Alicia Vikander',
                    'Matthew Rhys',
                    'Uma Thurman',
                    'Emma Thompson',
                    'Lily James',
                    'Sarah Greene',
                    'Jamie Dornan',
                  ],
                  directors: [
                    'John Wells',
                    'John Wells',
                  ],
                  participants: [
                    'Daniel Brühl',
                    'Sienna Miller',
                    'Omar Sy',
                    'Riccardo Scamarcio',
                    'Bradley Cooper',
                    'Sam Keeley',
                    'Alicia Vikander',
                    'Matthew Rhys',
                    'Uma Thurman',
                    'Emma Thompson',
                    'Lily James',
                    'Sarah Greene',
                    'Jamie Dornan',
                  ],
                  people: [
                    {
                      name: 'Daniel Brühl',
                      groups: [
                        'Actor',
                      ],
                      personId: '96436264241',
                    },
                    {
                      name: 'Sienna Miller',
                      groups: [
                        'Actor',
                      ],
                      personId: '101588008103',
                    },
                    {
                      name: 'Omar Sy',
                      groups: [
                        'Actor',
                      ],
                      personId: '100632104173',
                    },
                    {
                      name: 'Riccardo Scamarcio',
                      groups: [
                        'Actor',
                      ],
                      personId: '103260712376',
                    },
                    {
                      name: 'Bradley Cooper',
                      groups: [
                        'Actor',
                      ],
                      personId: '100541480350',
                    },
                    {
                      name: 'Sam Keeley',
                      groups: [
                        'Actor',
                      ],
                      personId: '154859560305',
                    },
                    {
                      name: 'Alicia Vikander',
                      groups: [
                        'Actor',
                      ],
                      personId: '96235560297',
                    },
                    {
                      name: 'Matthew Rhys',
                      groups: [
                        'Actor',
                      ],
                      personId: '118382120421',
                    },
                    {
                      name: 'Uma Thurman',
                      groups: [
                        'Actor',
                      ],
                      personId: '95223848302',
                    },
                    {
                      name: 'Emma Thompson',
                      groups: [
                        'Actor',
                      ],
                      personId: '96148008257',
                    },
                    {
                      name: 'Lily James',
                      groups: [
                        'Actor',
                      ],
                      personId: '96145960325',
                    },
                    {
                      name: 'Sarah Greene',
                      groups: [
                        'Actor',
                      ],
                      personId: '113136680226',
                    },
                    {
                      name: 'Jamie Dornan',
                      groups: [
                        'Actor',
                      ],
                      personId: '96033320069',
                    },
                    {
                      name: 'John Wells',
                      groups: [
                        'Producer',
                        'Director',
                      ],
                      personId: '126114856297',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2015,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt2503944',
                  rating: '6.6',
                  votes: '111 143',
                  url: 'http://www.imdb.com/title/tt2503944?ref_ext_viaplay',
                },
                synopsis: 'Adam Jones är den kulinariska världens gullgosse. Berömmelsen driver honom till att bli en narcissistisk drogberoende diva som når sin höjdpunkt när hans momentum går i kras.',
                title: 'Bränd',
              },
              user: {
                starred: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2020-02-10T23:00:00.000Z',
                  end: '2027-10-05T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-08-13T22:00:00.000Z',
                    end: '2023-07-31T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2020-02-10T23:00:00.000Z',
                    end: '2027-10-05T22:00:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '39',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2595329',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20234303',
                productKey: '20234303',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Bränd',
                  href: 'https://content.viaplay.se/pcdash-se/film/brand-2015?partial=true',
                },
                'viaplay:page': {
                  title: 'Bränd',
                  href: 'https://content.viaplay.se/pcdash-se/film/brand-2015',
                },
                'viaplay:templatedPage': {
                  title: 'Bränd',
                  href: 'https://content.viaplay.se/{deviceKey}/film/brand-2015',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/film/drama',
                  },
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20234303&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fbrand-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20234303&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fbrand-2015%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fbrand-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerStream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-BFD0-DA72-53F6-AD7A-914D-J&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-BFD0-DA72-53F6-AD7A-914D-J%3FparentProgramGuid%3D20234303&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-BFD0-DA72-53F6-AD7A-914D-J%3FparentProgramGuid%3D20234303&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerSelf': {
                  href: 'https://content.viaplay.se/pcdash-se/byguid/10-5240-BFD0-DA72-53F6-AD7A-914D-J?parentProgramGuid=20234303&partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'hot-pursuit-2015',
              content: {
                duration: {
                  milliseconds: 5026560,
                  readable: '1 h 23 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/863/664/1460164582-fe4772485304a8127a382dafa0f777f92197fe31.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/863/664/1460164582-fe4772485304a8127a382dafa0f777f92197fe31.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/862/688/1460164583-a98e3d89aa0ff0b25c87d89d5f90656a07f5d1a6.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/862/688/1460164583-a98e3d89aa0ff0b25c87d89d5f90656a07f5d1a6.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/862/688/1625556598-9dcaccf3f28e849d0fd6723c2c681488e030c94c.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/862/688/1625556598-9dcaccf3f28e849d0fd6723c2c681488e030c94c.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/862/688/1460164583-a98e3d89aa0ff0b25c87d89d5f90656a07f5d1a6.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/863/664/1460164582-fe4772485304a8127a382dafa0f777f92197fe31.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/862/688/1625556598-9dcaccf3f28e849d0fd6723c2c681488e030c94c.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Reese Witherspoon',
                    'Sofía Vergara',
                    'Matthew Del Negro',
                    'Michael Mosley',
                    'Rob Kazinsky',
                    'Richard T. Jones',
                    'Benny Nieves',
                    'Michael Ray Escamilla',
                    'Joaquín Cosio',
                    'John Lynch',
                    'Jim Gaffigan',
                    'Mike Birbiglia',
                    'Vincent Laresca',
                    'David Jensen',
                    'Evaluna Montaner',
                    'Marcus Lyle Brown',
                    'Manolo Gonzales-Vergara',
                  ],
                  directors: [
                    'Anne Fletcher',
                  ],
                  participants: [
                    'Reese Witherspoon',
                    'Sofía Vergara',
                    'Matthew Del Negro',
                    'Michael Mosley',
                    'Rob Kazinsky',
                    'Richard T. Jones',
                    'Benny Nieves',
                    'Michael Ray Escamilla',
                    'Joaquín Cosio',
                    'John Lynch',
                    'Jim Gaffigan',
                    'Mike Birbiglia',
                    'Vincent Laresca',
                    'David Jensen',
                    'Evaluna Montaner',
                    'Marcus Lyle Brown',
                    'Manolo Gonzales-Vergara',
                  ],
                  people: [
                    {
                      name: 'Reese Witherspoon',
                      groups: [
                        'Producer',
                        'Actor',
                      ],
                      personId: '96239144226',
                    },
                    {
                      name: 'Sofía Vergara',
                      groups: [
                        'Executive producer',
                        'Actor',
                      ],
                      personId: '102558248398',
                    },
                    {
                      name: 'Matthew Del Negro',
                      groups: [
                        'Actor',
                      ],
                      personId: '164327976349',
                    },
                    {
                      name: 'Michael Mosley',
                      groups: [
                        'Actor',
                      ],
                      personId: '180406311989',
                    },
                    {
                      name: 'Rob Kazinsky',
                      groups: [
                        'Actor',
                      ],
                      personId: '101583912223',
                    },
                    {
                      name: 'Richard T. Jones',
                      groups: [
                        'Actor',
                      ],
                      personId: '199238696364',
                    },
                    {
                      name: 'Benny Nieves',
                      groups: [
                        'Actor',
                      ],
                      personId: '190950440357',
                    },
                    {
                      name: 'Michael Ray Escamilla',
                      groups: [
                        'Actor',
                      ],
                      personId: '201652776363',
                    },
                    {
                      name: 'Joaquín Cosio',
                      groups: [
                        'Actor',
                      ],
                      personId: '201652776365',
                    },
                    {
                      name: 'John Lynch',
                      groups: [
                        'Actor',
                      ],
                      personId: '96362023972',
                    },
                    {
                      name: 'Jim Gaffigan',
                      groups: [
                        'Actor',
                      ],
                      personId: '101984296216',
                    },
                    {
                      name: 'Mike Birbiglia',
                      groups: [
                        'Actor',
                      ],
                      personId: '190999080211',
                    },
                    {
                      name: 'Vincent Laresca',
                      groups: [
                        'Actor',
                      ],
                      personId: '200336424025',
                    },
                    {
                      name: 'David Jensen',
                      groups: [
                        'Actor',
                      ],
                      personId: '191127080306',
                    },
                    {
                      name: 'Evaluna Montaner',
                      groups: [
                        'Actor',
                      ],
                      personId: '201652776372',
                    },
                    {
                      name: 'Marcus Lyle Brown',
                      groups: [
                        'Actor',
                      ],
                      personId: '192545832339',
                    },
                    {
                      name: 'Manolo Gonzales-Vergara',
                      groups: [
                        'Actor',
                      ],
                      personId: '201652776375',
                    },
                    {
                      name: 'Anne Fletcher',
                      groups: [
                        'Director',
                      ],
                      personId: '103644712283',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2015,
                },
                parentalRating: '12',
                imdb: {
                  id: 'tt2967224',
                  rating: '5.2',
                  votes: '49 871',
                  url: 'http://www.imdb.com/title/tt2967224?ref_ext_viaplay',
                },
                synopsis: 'En nervig polis får i uppdrag att skydda änkan till en ökänd knarkboss. Men med både korrupta poliser och mordiska gangsters i hälarna måste de nu samarbeta för att överleva.',
                title: 'Hot Pursuit',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-01-18T23:00:00.000Z',
                  end: '2023-01-18T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-01-18T23:00:00.000Z',
                    end: '2023-01-18T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20213626',
                productKey: '20213626',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Hot Pursuit',
                  href: 'https://content.viaplay.se/pcdash-se/film/hot-pursuit-2015?partial=true',
                },
                'viaplay:page': {
                  title: 'Hot Pursuit',
                  href: 'https://content.viaplay.se/pcdash-se/film/hot-pursuit-2015',
                },
                'viaplay:templatedPage': {
                  title: 'Hot Pursuit',
                  href: 'https://content.viaplay.se/{deviceKey}/film/hot-pursuit-2015',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pcdash-se/film/action',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20213626&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fhot-pursuit-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20213626&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fhot-pursuit-2015%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fhot-pursuit-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'empire-state-2013',
              content: {
                duration: {
                  milliseconds: 5399072,
                  readable: '1 h 29 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460139855-16e15665b1bd9d2d9da93c75f377a20192d147b3.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460139855-16e15665b1bd9d2d9da93c75f377a20192d147b3.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460161926-9b4391467c5178975b0c10e64a74335b42c5b85d.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460161926-9b4391467c5178975b0c10e64a74335b42c5b85d.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460139855-67fba6f550f92c0f13bc2955c40445230a01f589.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460139855-67fba6f550f92c0f13bc2955c40445230a01f589.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460161926-9b4391467c5178975b0c10e64a74335b42c5b85d.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460139855-16e15665b1bd9d2d9da93c75f377a20192d147b3.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/539/372/1460139855-67fba6f550f92c0f13bc2955c40445230a01f589.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Liam Hemsworth',
                    'Michael Angarano',
                    'Dwayne Johnson',
                    'Emma Roberts',
                    'Paul Ben-Victor',
                    'Nikki Reed',
                    'Chris Diamantopoulos',
                    'Shenae Grimes-Beech',
                    'Jerry Ferrara',
                    'James Ransone',
                    'Gia Mantegna',
                    'Michael Rispoli',
                  ],
                  directors: [
                    'Dito Montiel',
                  ],
                  participants: [
                    'Liam Hemsworth',
                    'Michael Angarano',
                    'Dwayne Johnson',
                    'Emma Roberts',
                    'Paul Ben-Victor',
                    'Nikki Reed',
                    'Chris Diamantopoulos',
                    'Shenae Grimes-Beech',
                    'Jerry Ferrara',
                    'James Ransone',
                    'Gia Mantegna',
                    'Michael Rispoli',
                  ],
                  people: [
                    {
                      name: 'Liam Hemsworth',
                      groups: [
                        'Actor',
                      ],
                      personId: '101596200064',
                    },
                    {
                      name: 'Michael Angarano',
                      groups: [
                        'Actor',
                      ],
                      personId: '106296872364',
                    },
                    {
                      name: 'Dwayne Johnson',
                      groups: [
                        'Actor',
                      ],
                      personId: '96230440043',
                    },
                    {
                      name: 'Emma Roberts',
                      groups: [
                        'Actor',
                      ],
                      personId: '95535656095',
                    },
                    {
                      name: 'Paul Ben-Victor',
                      groups: [
                        'Actor',
                      ],
                      personId: '124685352290',
                    },
                    {
                      name: 'Nikki Reed',
                      groups: [
                        'Actor',
                      ],
                      personId: '97976872305',
                    },
                    {
                      name: 'Chris Diamantopoulos',
                      groups: [
                        'Actor',
                      ],
                      personId: '198067240234',
                    },
                    {
                      name: 'Shenae Grimes-Beech',
                      groups: [
                        'Actor',
                      ],
                      personId: '204877864263',
                    },
                    {
                      name: 'Jerry Ferrara',
                      groups: [
                        'Actor',
                      ],
                      personId: '101579304404',
                    },
                    {
                      name: 'James Ransone',
                      groups: [
                        'Actor',
                      ],
                      personId: '96236072219',
                    },
                    {
                      name: 'Gia Mantegna',
                      groups: [
                        'Actor',
                      ],
                      personId: '199555112326',
                    },
                    {
                      name: 'Michael Rispoli',
                      groups: [
                        'Actor',
                      ],
                      personId: '125127208414',
                    },
                    {
                      name: 'Dito Montiel',
                      groups: [
                        'Director',
                      ],
                      personId: '113217576018',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2013,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt2171867',
                  rating: '5.2',
                  votes: '20 649',
                  url: 'http://www.imdb.com/title/tt2171867?ref_ext_viaplay',
                },
                synopsis: 'Efter att ha misslyckats att komma in på polishögskolan, söker Chris Potamitis jobbet som säkerhetsvakt för Empire State Armored Truck Company.',
                title: 'Empire State',
              },
              user: {
                starred: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2020-11-03T23:00:00.000Z',
                  end: '2024-07-18T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-06-30T22:00:00.000Z',
                    end: '2023-06-30T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2020-11-03T23:00:00.000Z',
                    end: '2024-07-18T22:00:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '39',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2425990',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'V21805',
                productKey: 'V21805',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Empire State',
                  href: 'https://content.viaplay.se/pcdash-se/film/empire-state-2013?partial=true',
                },
                'viaplay:page': {
                  title: 'Empire State',
                  href: 'https://content.viaplay.se/pcdash-se/film/empire-state-2013',
                },
                'viaplay:templatedPage': {
                  title: 'Empire State',
                  href: 'https://content.viaplay.se/{deviceKey}/film/empire-state-2013',
                },
                'viaplay:genres': [
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                  {
                    title: 'Thriller',
                    tagId: '99368200',
                    href: 'https://content.viaplay.se/pcdash-se/film/thriller',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=V21805&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fempire-state-2013%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=V21805&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fempire-state-2013%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fempire-state-2013%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerStream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-13C6-64AE-BE20-F2C9-F322-F&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-13C6-64AE-BE20-F2C9-F322-F%3FparentProgramGuid%3DV21805&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-13C6-64AE-BE20-F2C9-F322-F%3FparentProgramGuid%3DV21805&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerSelf': {
                  href: 'https://content.viaplay.se/pcdash-se/byguid/10-5240-13C6-64AE-BE20-F2C9-F322-F?parentProgramGuid=V21805&partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'mr.-right-2015',
              content: {
                duration: {
                  milliseconds: 5464064,
                  readable: '1 h 31 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294625-3114ed9a651c527a4b64d2845005148227b83a89.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294625-3114ed9a651c527a4b64d2845005148227b83a89.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294625-01f2a4393ff955c9d7926cf70c2c1bb105938f31.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294625-01f2a4393ff955c9d7926cf70c2c1bb105938f31.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294624-0757454facd99bdf14fa926a1d07cc41d2b5ec7a.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294624-0757454facd99bdf14fa926a1d07cc41d2b5ec7a.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294625-01f2a4393ff955c9d7926cf70c2c1bb105938f31.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294625-3114ed9a651c527a4b64d2845005148227b83a89.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/510/368/1632294624-0757454facd99bdf14fa926a1d07cc41d2b5ec7a.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Anna Kendrick',
                    'Sam Rockwell',
                    'Tim Roth',
                    'James Ransone',
                    'Anson Mount',
                  ],
                  directors: [
                    'Paco Cabezas',
                  ],
                  participants: [
                    'Anna Kendrick',
                    'Sam Rockwell',
                    'Tim Roth',
                    'James Ransone',
                    'Anson Mount',
                  ],
                  people: [
                    {
                      name: 'Anna Kendrick',
                      groups: [
                        'Actor',
                      ],
                      personId: '96231976423',
                    },
                    {
                      name: 'Sam Rockwell',
                      groups: [
                        'Actor',
                      ],
                      personId: '96037415999',
                    },
                    {
                      name: 'Tim Roth',
                      groups: [
                        'Actor',
                      ],
                      personId: '96147496262',
                    },
                    {
                      name: 'James Ransone',
                      groups: [
                        'Actor',
                      ],
                      personId: '96236072219',
                    },
                    {
                      name: 'Anson Mount',
                      groups: [
                        'Actor',
                      ],
                      personId: '95425575969',
                    },
                    {
                      name: 'Paco Cabezas',
                      groups: [
                        'Director',
                      ],
                      personId: '162234920191',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2015,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt2091935',
                  rating: '6.4',
                  votes: '53 263',
                  url: 'http://www.imdb.com/title/tt2091935?ref_ext_viaplay',
                },
                synopsis: 'Efter ett smärtsamt uppbrott faller Martha slutligen för den till synes perfekta mannen Francis. Vad hon inte vet är att han är en lönnmördare på flykt från det brottssyndikat som han brukade arbeta för.',
                title: 'Mr. Right',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-11-10T23:00:00.000Z',
                  end: '2023-10-31T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-11-10T23:00:00.000Z',
                    end: '2023-10-31T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20328475',
                productKey: '20328475',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Mr. Right',
                  href: 'https://content.viaplay.se/pcdash-se/film/mr.-right-2015?partial=true',
                },
                'viaplay:page': {
                  title: 'Mr. Right',
                  href: 'https://content.viaplay.se/pcdash-se/film/mr.-right-2015',
                },
                'viaplay:templatedPage': {
                  title: 'Mr. Right',
                  href: 'https://content.viaplay.se/{deviceKey}/film/mr.-right-2015',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                  {
                    title: 'Romantik',
                    tagId: '99368206',
                    href: 'https://content.viaplay.se/pcdash-se/film/romantik',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20328475&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fmr.-right-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20328475&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fmr.-right-2015%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fmr.-right-2015%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'tin-cup-1996',
              content: {
                duration: {
                  milliseconds: 7749024,
                  readable: '2 h 9 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962342-4e978efecf013c60e42598b550d2393b99fc9b4c.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962342-4e978efecf013c60e42598b550d2393b99fc9b4c.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962341-c9ecdc3f260990583b244d9a5926749dc2aff39a.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962341-c9ecdc3f260990583b244d9a5926749dc2aff39a.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962340-70ccfd9134b6b569c52836fd05e0ec06497822f9.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962340-70ccfd9134b6b569c52836fd05e0ec06497822f9.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962341-c9ecdc3f260990583b244d9a5926749dc2aff39a.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962342-4e978efecf013c60e42598b550d2393b99fc9b4c.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/581/664/1467962340-70ccfd9134b6b569c52836fd05e0ec06497822f9.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Kevin Costner',
                    'Rene Russo',
                    'Cheech Marin',
                    'Don Johnson',
                    'Linda Hart',
                    'Dennis Burkley',
                    'Rex Linn',
                    'Lou Myers',
                    'Richard Lineback',
                    'Mickey Jones',
                    'Michael Milhoan',
                    'George Perez',
                  ],
                  directors: [
                    'Ron Shelton',
                  ],
                  participants: [
                    'Kevin Costner',
                    'Rene Russo',
                    'Cheech Marin',
                    'Don Johnson',
                    'Linda Hart',
                    'Dennis Burkley',
                    'Rex Linn',
                    'Lou Myers',
                    'Richard Lineback',
                    'Mickey Jones',
                    'Michael Milhoan',
                    'George Perez',
                  ],
                  people: [
                    {
                      name: 'Kevin Costner',
                      groups: [
                        'Actor',
                      ],
                      personId: '101579304379',
                    },
                    {
                      name: 'Rene Russo',
                      groups: [
                        'Actor',
                      ],
                      personId: '101583912107',
                    },
                    {
                      name: 'Cheech Marin',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584424143',
                    },
                    {
                      name: 'Don Johnson',
                      groups: [
                        'Actor',
                      ],
                      personId: '96146984068',
                    },
                    {
                      name: 'Linda Hart',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584424145',
                    },
                    {
                      name: 'Dennis Burkley',
                      groups: [
                        'Actor',
                      ],
                      personId: '217655336213',
                    },
                    {
                      name: 'Rex Linn',
                      groups: [
                        'Actor',
                      ],
                      personId: '123762728231',
                    },
                    {
                      name: 'Lou Myers',
                      groups: [
                        'Actor',
                      ],
                      personId: '234219560238',
                    },
                    {
                      name: 'Richard Lineback',
                      groups: [
                        'Actor',
                      ],
                      personId: '228741160058',
                    },
                    {
                      name: 'Mickey Jones',
                      groups: [
                        'Actor',
                      ],
                      personId: '230043688291',
                    },
                    {
                      name: 'Michael Milhoan',
                      groups: [
                        'Actor',
                      ],
                      personId: '200362536105',
                    },
                    {
                      name: 'George Perez',
                      groups: [
                        'Actor',
                      ],
                      personId: '199560744418',
                    },
                    {
                      name: 'Ron Shelton',
                      groups: [
                        'Producer',
                        'Director',
                      ],
                      personId: '101584424141',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 1996,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt0117918',
                  rating: '6.4',
                  votes: '48 015',
                  url: 'http://www.imdb.com/title/tt0117918?ref_ext_viaplay',
                },
                synopsis: 'Roy McAvoy är ett misslyckat golfproffs som lever ett anspråkslöst liv i västra Texas. Hans torftiga tillvaro vänds dock upp och ner när den sköna Molly Griswold dyker upp på hans lilla golfanläggning.',
                title: 'Tin Cup',
              },
              user: {
                starred: false,
                entitled: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2016-06-19T22:00:00.000Z',
                  end: '2038-01-19T03:14:07.077Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-11-18T23:00:00.000Z',
                    end: '2022-11-18T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2016-06-19T22:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '39',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2698410',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                  est: {
                    start: '2019-04-30T22:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: '99',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2698408',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/665093',
                    },
                  },
                  estPlayback: {
                    start: '2019-04-30T22:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: 0,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'S05442',
                productKey: 'S05442',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Tin Cup',
                  href: 'https://content.viaplay.se/pcdash-se/film/tin-cup-1996?partial=true',
                },
                'viaplay:page': {
                  title: 'Tin Cup',
                  href: 'https://content.viaplay.se/pcdash-se/film/tin-cup-1996',
                },
                'viaplay:templatedPage': {
                  title: 'Tin Cup',
                  href: 'https://content.viaplay.se/{deviceKey}/film/tin-cup-1996',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/film/drama',
                  },
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=S05442&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ftin-cup-1996%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=S05442&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ftin-cup-1996%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Ftin-cup-1996%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'baby-driver-2017',
              content: {
                duration: {
                  milliseconds: 6481824,
                  readable: '1 h 48 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-8f22c92f026c71e0db37c6f2adbba7afdab898ac.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-8f22c92f026c71e0db37c6f2adbba7afdab898ac.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-d3fc5e228c22a64c26123368e1e7eb4ba9c28502.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-d3fc5e228c22a64c26123368e1e7eb4ba9c28502.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-68088605033b0b74ab6343c1d9081d6ad12afb6b.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-68088605033b0b74ab6343c1d9081d6ad12afb6b.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-d3fc5e228c22a64c26123368e1e7eb4ba9c28502.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-8f22c92f026c71e0db37c6f2adbba7afdab898ac.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/875/180/1511280211-68088605033b0b74ab6343c1d9081d6ad12afb6b.jpg{?width,height}',
                  },
                },
                language: {
                  audio: [
                    {
                      languageCode: 'en',
                      default: true,
                    },
                  ],
                },
                people: {
                  actors: [
                    'Ansel Elgort',
                    'Lily James',
                    'Eiza González',
                    'Jon Hamm',
                    'Jamie Foxx',
                    'Kevin Spacey',
                    'Jon Bernthal',
                    'Flea',
                    'Sky Ferreira',
                    'Lanny Joon',
                  ],
                  directors: [
                    'Edgar Wright',
                  ],
                  participants: [
                    'Ansel Elgort',
                    'Lily James',
                    'Eiza González',
                    'Jon Hamm',
                    'Jamie Foxx',
                    'Kevin Spacey',
                    'Jon Bernthal',
                    'Flea',
                    'Sky Ferreira',
                    'Lanny Joon',
                  ],
                  people: [
                    {
                      name: 'Ansel Elgort',
                      groups: [
                        'Actor',
                      ],
                      personId: '95535656093',
                    },
                    {
                      name: 'Lily James',
                      groups: [
                        'Actor',
                      ],
                      personId: '96145960325',
                    },
                    {
                      name: 'Eiza González',
                      groups: [
                        'Actor',
                      ],
                      personId: '122422824379',
                    },
                    {
                      name: 'Jon Hamm',
                      groups: [
                        'Actor',
                      ],
                      personId: '101582888169',
                    },
                    {
                      name: 'Jamie Foxx',
                      groups: [
                        'Actor',
                      ],
                      personId: '95524904256',
                    },
                    {
                      name: 'Kevin Spacey',
                      groups: [
                        'Actor',
                      ],
                      personId: '95535656089',
                    },
                    {
                      name: 'Jon Bernthal',
                      groups: [
                        'Actor',
                      ],
                      personId: '96362023980',
                    },
                    {
                      name: 'Flea',
                      groups: [
                        'Actor',
                      ],
                      personId: '175250472186',
                    },
                    {
                      name: 'Sky Ferreira',
                      groups: [
                        'Actor',
                      ],
                      personId: '99357736164',
                    },
                    {
                      name: 'Lanny Joon',
                      groups: [
                        'Actor',
                      ],
                      personId: '199241256200',
                    },
                    {
                      name: 'Edgar Wright',
                      groups: [
                        'Executive producer',
                        'Director',
                      ],
                      personId: '96148008149',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2017,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt3890160',
                  rating: '7.6',
                  votes: '475 807',
                  url: 'http://www.imdb.com/title/tt3890160?ref_ext_viaplay',
                },
                synopsis: 'Baby pratar ogärna, bär solglasögon och tar aldrig ut hörsnäckorna. Musiken ger honom kraft att vara bäst på det han gör. Köra flyktbilen från extraordinära rån. När han träffar drömtjejen ändras dock allt...',
                title: 'Baby Driver',
              },
              user: {
                starred: false,
                entitled: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2017-11-26T23:00:00.000Z',
                  end: '2038-01-19T03:14:07.077Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-03-05T23:00:00.000Z',
                    end: '2022-02-28T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2020-02-04T23:00:00.000Z',
                    end: '2023-05-31T22:00:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '39',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2562564',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                  est: {
                    start: '2017-11-26T23:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: '149',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2500165',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/669367',
                    },
                  },
                  estPlayback: {
                    start: '2017-11-26T23:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: 0,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20476985',
                productKey: '20476985',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Baby Driver',
                  href: 'https://content.viaplay.se/pcdash-se/film/baby-driver-2017?partial=true',
                },
                'viaplay:page': {
                  title: 'Baby Driver',
                  href: 'https://content.viaplay.se/pcdash-se/film/baby-driver-2017',
                },
                'viaplay:templatedPage': {
                  title: 'Baby Driver',
                  href: 'https://content.viaplay.se/{deviceKey}/film/baby-driver-2017',
                },
                'viaplay:genres': [
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pcdash-se/film/action',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20476985&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fbaby-driver-2017%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20476985&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fbaby-driver-2017%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fbaby-driver-2017%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerStream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-109E-3B33-436F-63BF-ABB5-5&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-109E-3B33-436F-63BF-ABB5-5%3FparentProgramGuid%3D20476985&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-109E-3B33-436F-63BF-ABB5-5%3FparentProgramGuid%3D20476985&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerSelf': {
                  href: 'https://content.viaplay.se/pcdash-se/byguid/10-5240-109E-3B33-436F-63BF-ABB5-5?parentProgramGuid=20476985&partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'mollys-game-2017',
              content: {
                duration: {
                  milliseconds: 8067392,
                  readable: '2 h 14 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548368-62ca61eba79ab0f6633295fdde56d11106564ebc.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548368-62ca61eba79ab0f6633295fdde56d11106564ebc.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548388-a64be83a0d1d120bb5c9f02217fc892406484777.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548388-a64be83a0d1d120bb5c9f02217fc892406484777.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548406-f1739570671dfe73665540e59907e1bd18892cda.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548406-f1739570671dfe73665540e59907e1bd18892cda.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548388-a64be83a0d1d120bb5c9f02217fc892406484777.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548368-62ca61eba79ab0f6633295fdde56d11106564ebc.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/481/532/1526548406-f1739570671dfe73665540e59907e1bd18892cda.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Jessica Chastain',
                    'Idris Elba',
                    'Kevin Costner',
                    'Michael Cera',
                    "Chris O'Dowd",
                    'Jeremy Strong',
                    'Bill Camp',
                    "Brian d'Arcy James",
                    'Graham Greene',
                    'Claire Rankin',
                    'Michael Kostroff',
                    'Jon Bass',
                    'J.C. MacKenzie',
                    'Samantha Isler',
                  ],
                  directors: [
                    'Aaron Sorkin',
                  ],
                  participants: [
                    'Jessica Chastain',
                    'Idris Elba',
                    'Kevin Costner',
                    'Michael Cera',
                    "Chris O'Dowd",
                    'Jeremy Strong',
                    'Bill Camp',
                    "Brian d'Arcy James",
                    'Graham Greene',
                    'Claire Rankin',
                    'Michael Kostroff',
                    'Jon Bass',
                    'J.C. MacKenzie',
                    'Samantha Isler',
                  ],
                  people: [
                    {
                      name: 'Jessica Chastain',
                      groups: [
                        'Actor',
                      ],
                      personId: '96234024433',
                    },
                    {
                      name: 'Idris Elba',
                      groups: [
                        'Actor',
                      ],
                      personId: '95524904132',
                    },
                    {
                      name: 'Kevin Costner',
                      groups: [
                        'Actor',
                      ],
                      personId: '101579304379',
                    },
                    {
                      name: 'Michael Cera',
                      groups: [
                        'Actor',
                      ],
                      personId: '99931176213',
                    },
                    {
                      name: "Chris O'Dowd",
                      groups: [
                        'Actor',
                      ],
                      personId: '102537256289',
                    },
                    {
                      name: 'Jeremy Strong',
                      groups: [
                        'Actor',
                      ],
                      personId: '100544551998',
                    },
                    {
                      name: 'Bill Camp',
                      groups: [
                        'Actor',
                      ],
                      personId: '117962792185',
                    },
                    {
                      name: "Brian d'Arcy James",
                      groups: [
                        'Actor',
                      ],
                      personId: '196846632067',
                    },
                    {
                      name: 'Graham Greene',
                      groups: [
                        'Actor',
                      ],
                      personId: '118225448189',
                    },
                    {
                      name: 'Claire Rankin',
                      groups: [
                        'Actor',
                      ],
                      personId: '192702504435',
                    },
                    {
                      name: 'Michael Kostroff',
                      groups: [
                        'Actor',
                      ],
                      personId: '226340392233',
                    },
                    {
                      name: 'Jon Bass',
                      groups: [
                        'Actor',
                      ],
                      personId: '149499944275',
                    },
                    {
                      name: 'J.C. MacKenzie',
                      groups: [
                        'Actor',
                      ],
                      personId: '196040744178',
                    },
                    {
                      name: 'Samantha Isler',
                      groups: [
                        'Actor',
                      ],
                      personId: '205875239974',
                    },
                    {
                      name: 'Aaron Sorkin',
                      groups: [
                        'Director',
                      ],
                      personId: '111080488318',
                    },
                  ],
                },
                production: {
                  country: 'USA, CHN',
                  year: 2017,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt4209788',
                  rating: '7.4',
                  votes: '155 572',
                  url: 'http://www.imdb.com/title/tt4209788?ref_ext_viaplay',
                },
                synopsis: 'Den verklighetsbaserade historien om Molly Bloom, landslagsåkerskan i puckelpist som efter en svår fallolycka sadlar om till slipad pokervärdinna för filmstjärnor, sportgiganter och makthavare.',
                title: "Molly's Game",
              },
              user: {
                starred: false,
                entitled: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2018-05-27T22:00:00.000Z',
                  end: '2033-03-26T23:01:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-11-11T23:00:00.000Z',
                    end: '2023-10-31T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2018-06-03T22:00:00.000Z',
                    end: '2033-03-26T23:01:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '49',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2688325',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1216',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                  est: {
                    start: '2018-05-27T22:00:00.000Z',
                    end: '2033-03-26T23:01:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: '149',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2688323',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/669367',
                    },
                  },
                  estPlayback: {
                    start: '2018-05-27T22:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: 0,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20495629',
                productKey: '20495629',
                isKids: false,
              },
              _links: {
                self: {
                  title: "Molly's Game",
                  href: 'https://content.viaplay.se/pcdash-se/film/mollys-game-2017?partial=true',
                },
                'viaplay:page': {
                  title: "Molly's Game",
                  href: 'https://content.viaplay.se/pcdash-se/film/mollys-game-2017',
                },
                'viaplay:templatedPage': {
                  title: "Molly's Game",
                  href: 'https://content.viaplay.se/{deviceKey}/film/mollys-game-2017',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/film/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20495629&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fmollys-game-2017%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20495629&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fmollys-game-2017%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fmollys-game-2017%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerStream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-9A7C-56D2-5680-1A17-C2BB-M&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-9A7C-56D2-5680-1A17-C2BB-M%3FparentProgramGuid%3D20495629&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-9A7C-56D2-5680-1A17-C2BB-M%3FparentProgramGuid%3D20495629&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerSelf': {
                  href: 'https://content.viaplay.se/pcdash-se/byguid/10-5240-9A7C-56D2-5680-1A17-C2BB-M?parentProgramGuid=20495629&partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'galen-i-karlek-2003',
              content: {
                duration: {
                  milliseconds: 7378048,
                  readable: '2 h 2 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/158/868/1467125756-49fe0e75e54a132893de02aa3a3561340ce8948c.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/158/868/1467125756-49fe0e75e54a132893de02aa3a3561340ce8948c.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/161/296/1521150586-cacf6642f6d724e980aa3fd5fc58aec1a417b20e.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/161/296/1521150586-cacf6642f6d724e980aa3fd5fc58aec1a417b20e.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/160/820/1467125756-d6a5d37ae54828e00b943c91d648df0bc9a79dd5.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/160/820/1467125756-d6a5d37ae54828e00b943c91d648df0bc9a79dd5.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/161/296/1521150586-cacf6642f6d724e980aa3fd5fc58aec1a417b20e.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/158/868/1467125756-49fe0e75e54a132893de02aa3a3561340ce8948c.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/160/820/1467125756-d6a5d37ae54828e00b943c91d648df0bc9a79dd5.jpg{?width,height}',
                  },
                },
                originalTitle: "Something's Gotta Give",
                people: {
                  actors: [
                    'Jack Nicholson',
                    'Diane Keaton',
                    'Keanu Reeves',
                    'Frances McDormand',
                    'Amanda Peet',
                    'Jon Favreau',
                    'Paul Michael Glaser',
                    'Rachel Ticotin',
                  ],
                  directors: [
                    'Nancy Meyers',
                  ],
                  participants: [
                    'Jack Nicholson',
                    'Diane Keaton',
                    'Keanu Reeves',
                    'Frances McDormand',
                    'Amanda Peet',
                    'Jon Favreau',
                    'Paul Michael Glaser',
                    'Rachel Ticotin',
                  ],
                  people: [
                    {
                      name: 'Jack Nicholson',
                      groups: [
                        'Actor',
                      ],
                      personId: '100470312276',
                    },
                    {
                      name: 'Diane Keaton',
                      groups: [
                        'Actor',
                      ],
                      personId: '95145512299',
                    },
                    {
                      name: 'Keanu Reeves',
                      groups: [
                        'Actor',
                      ],
                      personId: '97602600162',
                    },
                    {
                      name: 'Frances McDormand',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584936008',
                    },
                    {
                      name: 'Amanda Peet',
                      groups: [
                        'Actor',
                      ],
                      personId: '101585448144',
                    },
                    {
                      name: 'Jon Favreau',
                      groups: [
                        'Actor',
                      ],
                      personId: '98803752177',
                    },
                    {
                      name: 'Paul Michael Glaser',
                      groups: [
                        'Actor',
                      ],
                      personId: '199543335962',
                    },
                    {
                      name: 'Rachel Ticotin',
                      groups: [
                        'Actor',
                      ],
                      personId: '101580840410',
                    },
                    {
                      name: 'Nancy Meyers',
                      groups: [
                        'Producer',
                        'Writer',
                        'Director',
                      ],
                      personId: '96147496121',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2003,
                },
                parentalRating: '12A',
                imdb: {
                  id: 'tt0337741',
                  rating: '6.7',
                  votes: '116 137',
                  url: 'http://www.imdb.com/title/tt0337741?ref_ext_viaplay',
                },
                synopsis: 'En hålligångare som närmar sig pensionen och har smak för unga kvinnor blir kär i en komplicerad kvinna i hans egen ålder.',
                title: 'Galen i kärlek',
              },
              user: {
                starred: false,
                entitled: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2015-09-19T22:00:00.000Z',
                  end: '2038-01-19T03:14:07.077Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-12-16T23:00:00.000Z',
                    end: '2022-12-16T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2015-09-19T22:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '39',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2718060',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                  est: {
                    start: '2018-03-18T23:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: '99',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2718493',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/665093',
                    },
                  },
                  estPlayback: {
                    start: '2018-03-18T23:00:00.000Z',
                    end: '2038-01-19T03:14:07.077Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: true,
                      price: 0,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'S48579',
                productKey: 'S48579',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Galen i kärlek',
                  href: 'https://content.viaplay.se/pcdash-se/film/galen-i-karlek-2003?partial=true',
                },
                'viaplay:page': {
                  title: 'Galen i kärlek',
                  href: 'https://content.viaplay.se/pcdash-se/film/galen-i-karlek-2003',
                },
                'viaplay:templatedPage': {
                  title: 'Galen i kärlek',
                  href: 'https://content.viaplay.se/{deviceKey}/film/galen-i-karlek-2003',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                  {
                    title: 'Romantik',
                    tagId: '99368206',
                    href: 'https://content.viaplay.se/pcdash-se/film/romantik',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=S48579&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fgalen-i-karlek-2003%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=S48579&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fgalen-i-karlek-2003%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fgalen-i-karlek-2003%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'colombiana-2011',
              content: {
                duration: {
                  milliseconds: 6205056,
                  readable: '1 h 43 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1460120359-38764d19bdecc8c5e0bd26203c918ba6712b2d21.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1460120359-38764d19bdecc8c5e0bd26203c918ba6712b2d21.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1501838255-6550d9656cf576c3846b17837f19c08d3a755443.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1501838255-6550d9656cf576c3846b17837f19c08d3a755443.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1460120361-81c851e2181901932c5a9f26025f360586ac0781.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1460120361-81c851e2181901932c5a9f26025f360586ac0781.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1501838255-6550d9656cf576c3846b17837f19c08d3a755443.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1460120359-38764d19bdecc8c5e0bd26203c918ba6712b2d21.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/554/460/1460120361-81c851e2181901932c5a9f26025f360586ac0781.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Zoe Saldana',
                    'Jordi Mollà',
                    'Lennie James',
                    'Michael Vartan',
                    'Amandla Stenberg',
                    'Graham McTavish',
                    'Cliff Curtis',
                    'Beto Benites',
                    'Jesse Borrego',
                    'Cynthia Addai-Robinson',
                    'Angel Garnica',
                    'Ofelia Medina',
                    'Callum Blue',
                    'Sam Douglas',
                    'Charles Maquignon',
                    'Afif Ben Badra',
                  ],
                  directors: [
                    'Olivier Megaton',
                  ],
                  participants: [
                    'Zoe Saldana',
                    'Jordi Mollà',
                    'Lennie James',
                    'Michael Vartan',
                    'Amandla Stenberg',
                    'Graham McTavish',
                    'Cliff Curtis',
                    'Beto Benites',
                    'Jesse Borrego',
                    'Cynthia Addai-Robinson',
                    'Angel Garnica',
                    'Ofelia Medina',
                    'Callum Blue',
                    'Sam Douglas',
                    'Charles Maquignon',
                    'Afif Ben Badra',
                  ],
                  people: [
                    {
                      name: 'Zoe Saldana',
                      groups: [
                        'Actor',
                      ],
                      personId: '99934759956',
                    },
                    {
                      name: 'Jordi Mollà',
                      groups: [
                        'Actor',
                      ],
                      personId: '95610920178',
                    },
                    {
                      name: 'Lennie James',
                      groups: [
                        'Actor',
                      ],
                      personId: '149650984136',
                    },
                    {
                      name: 'Michael Vartan',
                      groups: [
                        'Actor',
                      ],
                      personId: '96051752147',
                    },
                    {
                      name: 'Amandla Stenberg',
                      groups: [
                        'Actor',
                      ],
                      personId: '100471848052',
                    },
                    {
                      name: 'Graham McTavish',
                      groups: [
                        'Actor',
                      ],
                      personId: '105374248209',
                    },
                    {
                      name: 'Cliff Curtis',
                      groups: [
                        'Actor',
                      ],
                      personId: '199246888140',
                    },
                    {
                      name: 'Beto Benites',
                      groups: [
                        'Actor',
                      ],
                      personId: '228446760385',
                    },
                    {
                      name: 'Jesse Borrego',
                      groups: [
                        'Actor',
                      ],
                      personId: '218419752417',
                    },
                    {
                      name: 'Cynthia Addai-Robinson',
                      groups: [
                        'Actor',
                      ],
                      personId: '227210792051',
                    },
                    {
                      name: 'Angel Garnica',
                      groups: [
                        'Actor',
                      ],
                      personId: '228446760389',
                    },
                    {
                      name: 'Ofelia Medina',
                      groups: [
                        'Actor',
                      ],
                      personId: '228446760391',
                    },
                    {
                      name: 'Callum Blue',
                      groups: [
                        'Actor',
                      ],
                      personId: '109037095998',
                    },
                    {
                      name: 'Sam Douglas',
                      groups: [
                        'Actor',
                      ],
                      personId: '196567591967',
                    },
                    {
                      name: 'Charles Maquignon',
                      groups: [
                        'Actor',
                      ],
                      personId: '228446760395',
                    },
                    {
                      name: 'Afif Ben Badra',
                      groups: [
                        'Actor',
                      ],
                      personId: '228446760397',
                    },
                    {
                      name: 'Olivier Megaton',
                      groups: [
                        'Director',
                      ],
                      personId: '125588008070',
                    },
                  ],
                },
                production: {
                  country: 'Frankrike, USA',
                  year: 2011,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt1657507',
                  rating: '6.4',
                  votes: '97 870',
                  url: 'http://www.imdb.com/title/tt1657507?ref_ext_viaplay',
                },
                synopsis: 'Cataleya är på jakt efter männen som brutalt avrättade hennes föräldrar när hon var endast nio år. Då lyckades hon fly och tog sig till sin farbror Emilio i Chicago',
                title: 'Colombiana',
              },
              user: {
                starred: false,
                rented: false,
              },
              system: {
                availability: {
                  start: '2020-08-12T22:00:00.000Z',
                  end: '2026-11-08T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-11-13T23:00:00.000Z',
                    end: '2026-11-08T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                  tvod: {
                    start: '2020-08-12T22:00:00.000Z',
                    end: '2026-08-08T22:00:00.000Z',
                    planInfo: {
                      isRental: true,
                      isPurchase: false,
                      price: '39',
                      mpxProductId: 'http://data.product.theplatform.eu/product/data/Product/2403919',
                      pricingTemplateId: 'http://data.product.theplatform.eu/product/data/PricingTemplate/1217',
                      subscriptionPeriodSeconds: 172800,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'S27912',
                productKey: 'S27912',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Colombiana',
                  href: 'https://content.viaplay.se/pcdash-se/film/colombiana-2011?partial=true',
                },
                'viaplay:page': {
                  title: 'Colombiana',
                  href: 'https://content.viaplay.se/pcdash-se/film/colombiana-2011',
                },
                'viaplay:templatedPage': {
                  title: 'Colombiana',
                  href: 'https://content.viaplay.se/{deviceKey}/film/colombiana-2011',
                },
                'viaplay:genres': [
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pcdash-se/film/action',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=S27912&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fcolombiana-2011%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=S27912&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fcolombiana-2011%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fcolombiana-2011%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerStream': {
                  href: 'https://play.viaplay.se/api/trailer/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=10-5240-19FD-59A9-9FE2-947D-A1AC-E&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Fbyguid%2F10-5240-19FD-59A9-9FE2-947D-A1AC-E%3FparentProgramGuid%3DS27912&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Fbyguid%2F10-5240-19FD-59A9-9FE2-947D-A1AC-E%3FparentProgramGuid%3DS27912&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:trailerSelf': {
                  href: 'https://content.viaplay.se/pcdash-se/byguid/10-5240-19FD-59A9-9FE2-947D-A1AC-E?parentProgramGuid=S27912&partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'four-brothers-2005',
              content: {
                duration: {
                  milliseconds: 6256416,
                  readable: '1 h 44 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098507-b7255520248a86a442c65d9addf2624c132181be.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098507-b7255520248a86a442c65d9addf2624c132181be.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098508-960987d5926bb4c629592310e308041d4ff946df.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098508-960987d5926bb4c629592310e308041d4ff946df.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098509-4c32f23971513d6a282482bc08bca127141234d5.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098509-4c32f23971513d6a282482bc08bca127141234d5.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098508-960987d5926bb4c629592310e308041d4ff946df.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098507-b7255520248a86a442c65d9addf2624c132181be.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/688/888/1629098509-4c32f23971513d6a282482bc08bca127141234d5.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Mark Wahlberg',
                    'Tyrese Gibson',
                    'André Benjamin (I)',
                    'Garrett Hedlund',
                    'Terrence Howard',
                    'Josh Charles',
                    'Sofía Vergara',
                    'Fionnula Flanagan',
                    'Chiwetel Ejiofor',
                    'Taraji P. Henson',
                    'Barry Shabaka Henley',
                    'Jernard Burks',
                    'Kenneth Welsh',
                  ],
                  directors: [
                    'John Singleton',
                  ],
                  participants: [
                    'Mark Wahlberg',
                    'Tyrese Gibson',
                    'André Benjamin (I)',
                    'Garrett Hedlund',
                    'Terrence Howard',
                    'Josh Charles',
                    'Sofía Vergara',
                    'Fionnula Flanagan',
                    'Chiwetel Ejiofor',
                    'Taraji P. Henson',
                    'Barry Shabaka Henley',
                    'Jernard Burks',
                    'Kenneth Welsh',
                  ],
                  people: [
                    {
                      name: 'Mark Wahlberg',
                      groups: [
                        'Actor',
                      ],
                      personId: '95610920190',
                    },
                    {
                      name: 'Tyrese Gibson',
                      groups: [
                        'Actor',
                      ],
                      personId: '96235560183',
                    },
                    {
                      name: 'André Benjamin (I)',
                      groups: [
                        'Actor',
                      ],
                      personId: '228767784005',
                    },
                    {
                      name: 'Garrett Hedlund',
                      groups: [
                        'Actor',
                      ],
                      personId: '96232488285',
                    },
                    {
                      name: 'Terrence Howard',
                      groups: [
                        'Actor',
                      ],
                      personId: '95143976426',
                    },
                    {
                      name: 'Josh Charles',
                      groups: [
                        'Actor',
                      ],
                      personId: '104923176184',
                    },
                    {
                      name: 'Sofía Vergara',
                      groups: [
                        'Actor',
                      ],
                      personId: '102558248398',
                    },
                    {
                      name: 'Fionnula Flanagan',
                      groups: [
                        'Actor',
                      ],
                      personId: '101590056101',
                    },
                    {
                      name: 'Chiwetel Ejiofor',
                      groups: [
                        'Actor',
                      ],
                      personId: '96229416148',
                    },
                    {
                      name: 'Taraji P. Henson',
                      groups: [
                        'Actor',
                      ],
                      personId: '95143976424',
                    },
                    {
                      name: 'Barry Shabaka Henley',
                      groups: [
                        'Actor',
                      ],
                      personId: '112398888378',
                    },
                    {
                      name: 'Jernard Burks',
                      groups: [
                        'Actor',
                      ],
                      personId: '218416680328',
                    },
                    {
                      name: 'Kenneth Welsh',
                      groups: [
                        'Actor',
                      ],
                      personId: '138004008178',
                    },
                    {
                      name: 'John Singleton',
                      groups: [
                        'Director',
                      ],
                      personId: '96235560192',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2005,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt0430105',
                  rating: '6.8',
                  votes: '139 628',
                  url: 'http://www.imdb.com/title/tt0430105?ref_ext_viaplay',
                },
                synopsis: 'Tre bröder återvänder hem till sin mors begravning, där de återförenas med den fjärde. Medan de gör arrangemang efter hennes död får pojkarna reda på att hon kan ha blivit mördad.',
                title: 'Four Brothers',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-10-14T22:00:00.000Z',
                  end: '2022-09-30T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-10-14T22:00:00.000Z',
                    end: '2022-09-30T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: '20686663',
                productKey: '20686663',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Four Brothers',
                  href: 'https://content.viaplay.se/pcdash-se/film/four-brothers-2005?partial=true',
                },
                'viaplay:page': {
                  title: 'Four Brothers',
                  href: 'https://content.viaplay.se/pcdash-se/film/four-brothers-2005',
                },
                'viaplay:templatedPage': {
                  title: 'Four Brothers',
                  href: 'https://content.viaplay.se/{deviceKey}/film/four-brothers-2005',
                },
                'viaplay:genres': [
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/film/kriminaldrama',
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pcdash-se/film/action',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=20686663&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffour-brothers-2005%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=20686663&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffour-brothers-2005%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Ffour-brothers-2005%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'movie',
              publicPath: 'magic-mike-2012',
              content: {
                duration: {
                  milliseconds: 6350464,
                  readable: '1 h 45 min',
                },
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632123-1a0dbe0fa4fa46d6b2885fea3b4dd5fdbdfd671f.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632123-1a0dbe0fa4fa46d6b2885fea3b4dd5fdbdfd671f.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632124-317c39e530d2e7d1e7fe8d8fb43caac1b927fc09.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632124-317c39e530d2e7d1e7fe8d8fb43caac1b927fc09.jpg{?width,height}',
                  },
                  packshot: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632124-e416ac188e0f0c41831345c4095e7d9d10977636.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632124-e416ac188e0f0c41831345c4095e7d9d10977636.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632124-317c39e530d2e7d1e7fe8d8fb43caac1b927fc09.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632123-1a0dbe0fa4fa46d6b2885fea3b4dd5fdbdfd671f.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/854/924/1627632124-e416ac188e0f0c41831345c4095e7d9d10977636.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Channing Tatum',
                    'Alex Pettyfer',
                    'Matthew McConaughey',
                    'Cody Horn',
                    'Olivia Munn',
                    'Matt Bomer',
                    'Riley Keough',
                    'Joe Manganiello',
                    'Adam Rodriguez',
                    'Kevin Nash',
                    'Gabriel Iglesias',
                    'James Martin Kelly',
                    'Reid Carolin',
                    'George Sack',
                    'Micaela Johnson',
                    'Denise Vasi',
                  ],
                  directors: [
                    'Steven Soderbergh',
                  ],
                  participants: [
                    'Channing Tatum',
                    'Alex Pettyfer',
                    'Matthew McConaughey',
                    'Cody Horn',
                    'Olivia Munn',
                    'Matt Bomer',
                    'Riley Keough',
                    'Joe Manganiello',
                    'Adam Rodriguez',
                    'Kevin Nash',
                    'Gabriel Iglesias',
                    'James Martin Kelly',
                    'Reid Carolin',
                    'George Sack',
                    'Micaela Johnson',
                    'Denise Vasi',
                  ],
                  people: [
                    {
                      name: 'Channing Tatum',
                      groups: [
                        'Producer',
                        'Actor',
                      ],
                      personId: '101584423991',
                    },
                    {
                      name: 'Alex Pettyfer',
                      groups: [
                        'Actor',
                      ],
                      personId: '126211623985',
                    },
                    {
                      name: 'Matthew McConaughey',
                      groups: [
                        'Actor',
                      ],
                      personId: '96239144223',
                    },
                    {
                      name: 'Cody Horn',
                      groups: [
                        'Actor',
                      ],
                      personId: '113044520326',
                    },
                    {
                      name: 'Olivia Munn',
                      groups: [
                        'Actor',
                      ],
                      personId: '106820648128',
                    },
                    {
                      name: 'Matt Bomer',
                      groups: [
                        'Actor',
                      ],
                      personId: '101582888107',
                    },
                    {
                      name: 'Riley Keough',
                      groups: [
                        'Actor',
                      ],
                      personId: '96020520446',
                    },
                    {
                      name: 'Joe Manganiello',
                      groups: [
                        'Actor',
                      ],
                      personId: '96237096357',
                    },
                    {
                      name: 'Adam Rodriguez',
                      groups: [
                        'Actor',
                      ],
                      personId: '112577576157',
                    },
                    {
                      name: 'Kevin Nash',
                      groups: [
                        'Actor',
                      ],
                      personId: '101582888109',
                    },
                    {
                      name: 'Gabriel Iglesias',
                      groups: [
                        'Actor',
                      ],
                      personId: '101582888112',
                    },
                    {
                      name: 'James Martin Kelly',
                      groups: [
                        'Actor',
                      ],
                      personId: '192562216141',
                    },
                    {
                      name: 'Reid Carolin',
                      groups: [
                        'Producer',
                        'Actor',
                      ],
                      personId: '199240744270',
                    },
                    {
                      name: 'George Sack',
                      groups: [
                        'Actor',
                      ],
                      personId: '231607848436',
                    },
                    {
                      name: 'Micaela Johnson',
                      groups: [
                        'Actor',
                      ],
                      personId: '231607848438',
                    },
                    {
                      name: 'Denise Vasi',
                      groups: [
                        'Actor',
                      ],
                      personId: '230262824341',
                    },
                    {
                      name: 'Steven Soderbergh',
                      groups: [
                        'Director',
                      ],
                      personId: '98693160286',
                    },
                  ],
                },
                production: {
                  country: 'USA',
                  year: 2012,
                },
                parentalRating: '15',
                imdb: {
                  id: 'tt1915581',
                  rating: '6.1',
                  votes: '134 590',
                  url: 'http://www.imdb.com/title/tt1915581?ref_ext_viaplay',
                },
                synopsis: 'Den manlige strippan Mike lär upp en nybörjare om livet kantat av festande, flirtande och konsten att tjäna massor med pengar. Men saker blir komplicerade när han faller för nykomlingens syster.',
                title: 'Magic Mike',
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-09-23T22:00:00.000Z',
                  end: '2023-08-31T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-09-23T22:00:00.000Z',
                    end: '2023-08-31T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'S73291',
                productKey: 'S73291',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Magic Mike',
                  href: 'https://content.viaplay.se/pcdash-se/film/magic-mike-2012?partial=true',
                },
                'viaplay:page': {
                  title: 'Magic Mike',
                  href: 'https://content.viaplay.se/pcdash-se/film/magic-mike-2012',
                },
                'viaplay:templatedPage': {
                  title: 'Magic Mike',
                  href: 'https://content.viaplay.se/{deviceKey}/film/magic-mike-2012',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/film/drama',
                  },
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/film/komedi',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,availabilityContext,cmaf,cse}&deviceKey=pcdash-se&guid=S73291&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fmagic-mike-2012%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
                'viaplay:templatedStream': {
                  href: 'https://play.viaplay.se/api/stream/byguid{?deviceId,deviceName,deviceType,userAgent,deviceKey,availabilityContext,cmaf,cse}&guid=S73291&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Ffocus-2015&producturl=https%3A%2F%2Fcontent.viaplay.se%2Fpcdash-se%2Ffilm%2Fmagic-mike-2012%3Fpartial%3Dtrue&templatedproducturl=https%3A%2F%2Fcontent.viaplay.se%2F%7BdeviceKey%7D%2Ffilm%2Fmagic-mike-2012%3Fpartial%3Dtrue&sectionPath=%2Ffilm&defaultAvailabilityContext=svod',
                  templated: true,
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
          ],
        },
        _links: {
          self: {
            href: 'https://content.viaplay.se/pcdash-se/film/focus-2015?blockId=a8abed79-78fe-4189-8507-ebba3d6134e7&partial=1&pageNumber=1',
          },
        },
      },
      {
        ablocator: '8540e6fb-3a3b-41f5-a019-2872114e5ec5',
        id: '8540e6fb-3a3b-41f5-a019-2872114e5ec5',
        type: 'list',
        client: {
          module: 'collection',
          template: 'collection',
          styles: 'landscape list carousel',
        },
        styles: [
          'landscape',
          'list',
          'carousel',
        ],
        title: 'Liknande serier',
        totalProductCount: 10,
        currentPage: 1,
        pageCount: 1,
        productsPerPage: 10,
        _embedded: {
          'viaplay:products': [
            {
              type: 'series',
              publicPath: 'section-zero',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1555422227-700f2fe9b1fe3a4c72ad5a72d29fac489a9d3b21.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1555422227-700f2fe9b1fe3a4c72ad5a72d29fac489a9d3b21.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1555422228-8cbfc0655359b733397983291dcbd92d83f4c304.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1555422228-8cbfc0655359b733397983291dcbd92d83f4c304.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1557134954-978bbfc76b9db1c0098b495f72aa4fca4c612e3f.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1555422227-700f2fe9b1fe3a4c72ad5a72d29fac489a9d3b21.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/339/124/1555422228-8cbfc0655359b733397983291dcbd92d83f4c304.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Ola Rapace',
                    'Erwann Kermorvant',
                    'Pascal Greggory',
                    'Hilde De Baerdemaeker',
                    'Francis Renaud',
                    'Patrick Descamps',
                    'Gérald Laroche',
                    'Juliette Dol',
                    'Olivier Marchal',
                    'Tchéky Karyo',
                    'Catherine Marchal',
                    'Laurent Malet',
                    'Edgar Marie',
                    'Franck Philippon',
                    'Laurent Guillaume',
                    'Andrea Schieffer',
                    'Igor Skreblin',
                    'Inès Spiridonov',
                  ],
                  participants: [
                    'Ola Rapace',
                    'Erwann Kermorvant',
                    'Pascal Greggory',
                    'Hilde De Baerdemaeker',
                    'Francis Renaud',
                    'Patrick Descamps',
                    'Gérald Laroche',
                    'Juliette Dol',
                    'Olivier Marchal',
                    'Tchéky Karyo',
                    'Catherine Marchal',
                    'Laurent Malet',
                    'Edgar Marie',
                    'Franck Philippon',
                    'Laurent Guillaume',
                    'Andrea Schieffer',
                    'Igor Skreblin',
                    'Inès Spiridonov',
                  ],
                  people: [
                    {
                      name: 'Ola Rapace',
                      groups: [
                        'Actor',
                      ],
                      personId: '101045288215',
                    },
                    {
                      name: 'Erwann Kermorvant',
                      groups: [
                        'Actor',
                      ],
                      personId: '227988519992',
                    },
                    {
                      name: 'Pascal Greggory',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800088',
                    },
                    {
                      name: 'Hilde De Baerdemaeker',
                      groups: [
                        'Actor',
                      ],
                      personId: '101045288219',
                    },
                    {
                      name: 'Francis Renaud',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800080',
                    },
                    {
                      name: 'Patrick Descamps',
                      groups: [
                        'Actor',
                      ],
                      personId: '101045288217',
                    },
                    {
                      name: 'Gérald Laroche',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800086',
                    },
                    {
                      name: 'Juliette Dol',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800082',
                    },
                    {
                      name: 'Olivier Marchal',
                      groups: [
                        'Actor',
                        'Creator',
                      ],
                      personId: '103349800090',
                    },
                    {
                      name: 'Tchéky Karyo',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800094',
                    },
                    {
                      name: 'Catherine Marchal',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800092',
                    },
                    {
                      name: 'Laurent Malet',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800076',
                    },
                    {
                      name: 'Edgar Marie',
                      groups: [
                        'Actor',
                      ],
                      personId: '227988519995',
                    },
                    {
                      name: 'Franck Philippon',
                      groups: [
                        'Actor',
                      ],
                      personId: '227988519997',
                    },
                    {
                      name: 'Laurent Guillaume',
                      groups: [
                        'Creator',
                        'Actor',
                      ],
                      personId: '227988519999',
                    },
                    {
                      name: 'Andrea Schieffer',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800084',
                    },
                    {
                      name: 'Igor Skreblin',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800078',
                    },
                    {
                      name: 'Inès Spiridonov',
                      groups: [
                        'Actor',
                      ],
                      personId: '103349800074',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: 'Section Zéro',
                  synopsis: 'År 2024 är multinationella företag Europas nya ledare. En idealistisk man, Sirius Becker, försöker kämpa mot de starka krafterna och tar hjälp av den gamla polisen Franck Varnove.',
                  season: {
                    title: 'Section Zéro',
                    availability: {
                      svod: {
                        start: '2019-06-13T22:00:00.000Z',
                        end: '2023-12-14T22:59:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-section-zero',
                },
                synopsis: 'År 2024 är multinationella företag Europas nya ledare. En idealistisk man, Sirius Becker, försöker kämpa mot de starka krafterna och tar hjälp av den gamla polisen Franck Varnove.',
                imdb: {
                  id: 'tt5606776',
                  rating: '6.0',
                  votes: '401',
                  url: 'http://www.imdb.com/title/tt5606776?ref_ext_viaplay',
                },
                production: {
                  year: 2016,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2019-06-13T22:00:00.000Z',
                  end: '2023-12-14T22:59:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2019-06-13T22:00:00.000Z',
                    end: '2023-12-14T22:59:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'hd',
                  'availableInHd',
                ],
                guid: 'series-section-zero',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Section Zéro',
                  href: 'https://content.viaplay.se/pcdash-se/serier/section-zero?partial=true',
                },
                'viaplay:page': {
                  title: 'Section Zéro',
                  href: 'https://content.viaplay.se/pcdash-se/serier/section-zero',
                },
                'viaplay:templatedPage': {
                  title: 'Section Zéro',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/section-zero',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'Section Zéro',
                  href: 'https://content.viaplay.se/pcdash-se/serier/section-zero?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'Section Zéro',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/section-zero?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'lethal-weapon',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/237/820/1537344961-34f04f5d75a3152e658314b5a46ec83a2e9d50fd.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/237/820/1537344961-34f04f5d75a3152e658314b5a46ec83a2e9d50fd.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/237/820/1537344959-30b26bce0860e9b0a2fcfe99386fe15ffc23d22c.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/237/820/1537344959-30b26bce0860e9b0a2fcfe99386fe15ffc23d22c.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/640/108/1538407058-22c02a044d0d453fb9700893b5f8b8015d6a6a51.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/237/820/1537344961-34f04f5d75a3152e658314b5a46ec83a2e9d50fd.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/237/820/1537344959-30b26bce0860e9b0a2fcfe99386fe15ffc23d22c.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Kevin Rahm',
                    'Seann William Scott',
                    'Kevin Rham',
                    'Clayne Crawford',
                    'Maggie Lawson',
                    'Jordana Brewster',
                    'Chandler Kinney',
                    'Michelle Mitchenor',
                    'Dante Brown',
                    'Keesha Sharp',
                    'Johnathan Fernandez',
                    'Damon Wayans',
                  ],
                  directors: [
                    'Matthew Miller',
                    'Matthew Miller',
                  ],
                  participants: [
                    'Kevin Rahm',
                    'Seann William Scott',
                    'Kevin Rham',
                    'Clayne Crawford',
                    'Maggie Lawson',
                    'Jordana Brewster',
                    'Chandler Kinney',
                    'Michelle Mitchenor',
                    'Dante Brown',
                    'Keesha Sharp',
                    'Johnathan Fernandez',
                    'Damon Wayans',
                  ],
                  people: [
                    {
                      name: 'Kevin Rahm',
                      groups: [
                        'Actor',
                      ],
                      personId: '227170344197',
                    },
                    {
                      name: 'Seann William Scott',
                      groups: [
                        'Actor',
                      ],
                      personId: '96144936421',
                    },
                    {
                      name: 'Kevin Rham',
                      groups: [
                        'Actor',
                      ],
                      personId: '105261096441',
                    },
                    {
                      name: 'Clayne Crawford',
                      groups: [
                        'Actor',
                      ],
                      personId: '105261096439',
                    },
                    {
                      name: 'Maggie Lawson',
                      groups: [
                        'Actor',
                      ],
                      personId: '205355047990',
                    },
                    {
                      name: 'Jordana Brewster',
                      groups: [
                        'Actor',
                      ],
                      personId: '96234536050',
                    },
                    {
                      name: 'Chandler Kinney',
                      groups: [
                        'Actor',
                      ],
                      personId: '137780264303',
                    },
                    {
                      name: 'Michelle Mitchenor',
                      groups: [
                        'Actor',
                      ],
                      personId: '227170344202',
                    },
                    {
                      name: 'Dante Brown',
                      groups: [
                        'Actor',
                      ],
                      personId: '113035816100',
                    },
                    {
                      name: 'Keesha Sharp',
                      groups: [
                        'Actor',
                      ],
                      personId: '105261096435',
                    },
                    {
                      name: 'Johnathan Fernandez',
                      groups: [
                        'Actor',
                      ],
                      personId: '227170344209',
                    },
                    {
                      name: 'Damon Wayans',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584935986',
                    },
                    {
                      name: 'Matthew Miller',
                      groups: [
                        'Executive producer',
                        'Director',
                      ],
                      personId: '217329192251',
                    },
                  ],
                },
                parentalRating: '12',
                series: {
                  title: 'Lethal Weapon',
                  synopsis: 'En av Hollywoods mest efterlängtade nyinspelningar och baserad på filmerna med samma namn. En kaxig polisduo jobbar hårt för att hålla ställningarna i ett pulserande L.A.',
                  season: {
                    title: 'Lethal Weapon',
                    availability: {
                      svod: {
                        start: '2018-09-26T18:00:00.000Z',
                        end: '2022-09-25T21:59:00.000Z',
                      },
                    },
                  },
                  seasons: 3,
                  seriesGuid: 'series-lethal-weapon',
                },
                synopsis: 'En av Hollywoods mest efterlängtade nyinspelningar och baserad på filmerna med samma namn. En kaxig polisduo jobbar hårt för att hålla ställningarna i ett pulserande L.A.',
                imdb: {
                  id: 'tt5164196',
                  rating: '7.9',
                  votes: '36 330',
                  url: 'http://www.imdb.com/title/tt5164196?ref_ext_viaplay',
                },
                production: {
                  year: 2016,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2016-09-22T15:50:00.000Z',
                  end: '2022-09-25T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2016-09-22T15:50:00.000Z',
                    end: '2022-09-25T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-lethal-weapon',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Lethal Weapon',
                  href: 'https://content.viaplay.se/pcdash-se/serier/lethal-weapon?partial=true',
                },
                'viaplay:page': {
                  title: 'Lethal Weapon',
                  href: 'https://content.viaplay.se/pcdash-se/serier/lethal-weapon',
                },
                'viaplay:templatedPage': {
                  title: 'Lethal Weapon',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/lethal-weapon',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/serier/komedi',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'Lethal Weapon',
                  href: 'https://content.viaplay.se/pcdash-se/serier/lethal-weapon?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'Lethal Weapon',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/lethal-weapon?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'los-internacionales',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109279-77701a8145d1f6bcd518d5ecfd101f409b1ad801.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109279-77701a8145d1f6bcd518d5ecfd101f409b1ad801.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109284-6f51e6acc6e0282ec48d4e8151ae6998d09b3054.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109284-6f51e6acc6e0282ec48d4e8151ae6998d09b3054.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109438-f116114b0e5529027eff5e207bdf64803d0d4050.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109279-77701a8145d1f6bcd518d5ecfd101f409b1ad801.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/694/544/1605109284-6f51e6acc6e0282ec48d4e8151ae6998d09b3054.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Boy Olmi',
                    'Juan Pablo Shuk',
                    'Laura Perico',
                    'Juan Pablo Shuk',
                    'Rafael Ferro',
                    'Cecilia Roth',
                    'Gustavo Garzón',
                    'Rami Herrera',
                    'Sofia Gonzalez',
                    'Ramiro Lucci',
                    'Juan Manuel Barona',
                    'Camilo Amores',
                    'Luis Miguel Hurtado',
                    'Carlos Santamaría',
                    'Xiomara Galeano',
                    'Susana Varela',
                    'Pablo Seijo',
                    'Néstor Hidalgo',
                    'Moon Cho Lee',
                    'Christian Vega',
                    'Ken Chou',
                    'Sebastián Osorio',
                    'Alberto Feito',
                    'Carlos Leon Gordillo',
                    "Marcelo D'Andrea",
                  ],
                  directors: [
                    'Pablo Vázquez',
                    'Pablo Ambrosini',
                    'Martín Hodara',
                  ],
                  participants: [
                    'Boy Olmi',
                    'Juan Pablo Shuk',
                    'Laura Perico',
                    'Juan Pablo Shuk',
                    'Rafael Ferro',
                    'Cecilia Roth',
                    'Gustavo Garzón',
                    'Rami Herrera',
                    'Sofia Gonzalez',
                    'Ramiro Lucci',
                    'Juan Manuel Barona',
                    'Camilo Amores',
                    'Luis Miguel Hurtado',
                    'Carlos Santamaría',
                    'Xiomara Galeano',
                    'Susana Varela',
                    'Pablo Seijo',
                    'Néstor Hidalgo',
                    'Moon Cho Lee',
                    'Christian Vega',
                    'Ken Chou',
                    'Sebastián Osorio',
                    'Alberto Feito',
                    'Carlos Leon Gordillo',
                    "Marcelo D'Andrea",
                  ],
                  people: [
                    {
                      name: 'Boy Olmi',
                      groups: [
                        'Actor',
                      ],
                      personId: '228444712194',
                    },
                    {
                      name: 'Juan Pablo Shuk',
                      groups: [
                        'Actor',
                      ],
                      personId: '228444712196',
                    },
                    {
                      name: 'Laura Perico',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624409',
                    },
                    {
                      name: 'Rafael Ferro',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624399',
                    },
                    {
                      name: 'Cecilia Roth',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624395',
                    },
                    {
                      name: 'Gustavo Garzón',
                      groups: [
                        'Actor',
                      ],
                      personId: '228444712198',
                    },
                    {
                      name: 'Rami Herrera',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624405',
                    },
                    {
                      name: 'Sofia Gonzalez',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624431',
                    },
                    {
                      name: 'Ramiro Lucci',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624413',
                    },
                    {
                      name: 'Juan Manuel Barona',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624415',
                    },
                    {
                      name: 'Camilo Amores',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624401',
                    },
                    {
                      name: 'Luis Miguel Hurtado',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624417',
                    },
                    {
                      name: 'Carlos Santamaría',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624411',
                    },
                    {
                      name: 'Xiomara Galeano',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624419',
                    },
                    {
                      name: 'Susana Varela',
                      groups: [
                        'Actor',
                      ],
                      personId: '228444712208',
                    },
                    {
                      name: 'Pablo Seijo',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624421',
                    },
                    {
                      name: 'Néstor Hidalgo',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624423',
                    },
                    {
                      name: 'Moon Cho Lee',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624425',
                    },
                    {
                      name: 'Christian Vega',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624407',
                    },
                    {
                      name: 'Ken Chou',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624427',
                    },
                    {
                      name: 'Sebastián Osorio',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624403',
                    },
                    {
                      name: 'Alberto Feito',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624429',
                    },
                    {
                      name: 'Carlos Leon Gordillo',
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624433',
                    },
                    {
                      name: "Marcelo D'Andrea",
                      groups: [
                        'Actor',
                      ],
                      personId: '164355624435',
                    },
                    {
                      name: 'Martín Hodara',
                      groups: [
                        'Director',
                      ],
                      personId: '164355624393',
                    },
                    {
                      name: 'Pablo Vázquez',
                      groups: [
                        'Director',
                      ],
                      personId: '228444712204',
                    },
                    {
                      name: 'Pablo Ambrosini',
                      groups: [
                        'Director',
                      ],
                      personId: '228444712206',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: 'Los Internacionales',
                  synopsis: 'Året är 2002. Efter att ha avtjänat sitt straff, rekryterar Fausto ett gäng internationella tjuvar som ska resa till Buenos Aires för att begå några rån. Men han döljer också en hemlighet...',
                  season: {
                    title: 'Los Internacionales',
                    availability: {
                      svod: {
                        start: '2020-11-29T23:00:00.000Z',
                        end: '2023-11-29T23:00:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-los-internacionales',
                },
                synopsis: 'Året är 2002. Efter att ha avtjänat sitt straff, rekryterar Fausto ett gäng internationella tjuvar som ska resa till Buenos Aires för att begå några rån. Men han döljer också en hemlighet...',
                imdb: {
                  id: 'tt8652602',
                  rating: '6.7',
                  votes: '31',
                  url: 'http://www.imdb.com/title/tt8652602?ref_ext_viaplay',
                },
                production: {
                  year: 2020,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2020-11-29T23:00:00.000Z',
                  end: '2023-11-29T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-11-29T23:00:00.000Z',
                    end: '2023-11-29T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-los-internacionales',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Los Internacionales',
                  href: 'https://content.viaplay.se/pcdash-se/serier/los-internacionales?partial=true',
                },
                'viaplay:page': {
                  title: 'Los Internacionales',
                  href: 'https://content.viaplay.se/pcdash-se/serier/los-internacionales',
                },
                'viaplay:templatedPage': {
                  title: 'Los Internacionales',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/los-internacionales',
                },
                'viaplay:genres': [
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                  {
                    title: 'Thriller',
                    tagId: '99368200',
                    href: 'https://content.viaplay.se/pcdash-se/serier/thriller',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'Los Internacionales',
                  href: 'https://content.viaplay.se/pcdash-se/serier/los-internacionales?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'Los Internacionales',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/los-internacionales?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'simi-valley',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270594-e1fb9e22a8ad535e55cdddf29eaa884ac35f64d9.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270594-e1fb9e22a8ad535e55cdddf29eaa884ac35f64d9.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270596-c68088f3e75c9ad7927aab5dda72ba8afc5b4867.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270596-c68088f3e75c9ad7927aab5dda72ba8afc5b4867.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626271017-4e9f7ef3d40731b12070a0a4a8964f088753b826.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270594-e1fb9e22a8ad535e55cdddf29eaa884ac35f64d9.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270596-c68088f3e75c9ad7927aab5dda72ba8afc5b4867.jpg{?width,height}',
                  },
                  coverart11: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/600/280/1626270600-13df75098e7687d7164ed3c401d1efa4d2861ed5.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Darren Barnet',
                    'Glenn Stanton',
                    'Katalina Vitieri',
                    'Alan Starzinski',
                    'R. Marcos Taylor',
                    'Michael Vlamis',
                  ],
                  participants: [
                    'Darren Barnet',
                    'Glenn Stanton',
                    'Katalina Vitieri',
                    'Alan Starzinski',
                    'R. Marcos Taylor',
                    'Michael Vlamis',
                  ],
                  people: [
                    {
                      name: 'Darren Barnet',
                      groups: [
                        'Actor',
                      ],
                      personId: '160775720354',
                    },
                    {
                      name: 'Glenn Stanton',
                      groups: [
                        'Actor',
                      ],
                      personId: '228885032424',
                    },
                    {
                      name: 'Katalina Vitieri',
                      groups: [
                        'Actor',
                      ],
                      personId: '229085224368',
                    },
                    {
                      name: 'Alan Starzinski',
                      groups: [
                        'Actor',
                      ],
                      personId: '229085224370',
                    },
                    {
                      name: 'R. Marcos Taylor',
                      groups: [
                        'Actor',
                      ],
                      personId: '196635176150',
                    },
                    {
                      name: 'Michael Vlamis',
                      groups: [
                        'Actor',
                      ],
                      personId: '229085224373',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: 'Simi Valley',
                  synopsis: 'Gymnasieeleven Chase är missnöjd med sina framtidsutsikter och startar en drogkurirtjänst tillsammans med sina vänner Brendan och Mia i deras förortsområde.',
                  season: {
                    title: 'Simi Valley',
                    availability: {
                      svod: {
                        start: '2021-09-13T22:00:00.000Z',
                        end: '2023-07-31T22:00:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-simi-valley',
                },
                synopsis: 'Gymnasieeleven Chase är missnöjd med sina framtidsutsikter och startar en drogkurirtjänst tillsammans med sina vänner Brendan och Mia i deras förortsområde.',
                imdb: {
                  id: 'tt7319162',
                  rating: '5.4',
                  votes: '11',
                  url: 'http://www.imdb.com/title/tt7319162?ref_ext_viaplay',
                },
                production: {
                  year: 2017,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-09-13T22:00:00.000Z',
                  end: '2023-07-31T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-09-13T22:00:00.000Z',
                    end: '2023-07-31T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-simi-valley',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Simi Valley',
                  href: 'https://content.viaplay.se/pcdash-se/serier/simi-valley?partial=true',
                },
                'viaplay:page': {
                  title: 'Simi Valley',
                  href: 'https://content.viaplay.se/pcdash-se/serier/simi-valley',
                },
                'viaplay:templatedPage': {
                  title: 'Simi Valley',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/simi-valley',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'Simi Valley',
                  href: 'https://content.viaplay.se/pcdash-se/serier/simi-valley?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'Simi Valley',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/simi-valley?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'spotless',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1591617443-a09fe730b0668fb66c55158c769e10c4358dbf95.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1591617443-a09fe730b0668fb66c55158c769e10c4358dbf95.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1591617441-d7aed757401ae4e96d0158aad31d2b045fd37944.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1591617441-d7aed757401ae4e96d0158aad31d2b045fd37944.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1592315014-82c6b314bb505fadad80b860f1e40e2b4c2b5f14.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1591617443-a09fe730b0668fb66c55158c769e10c4358dbf95.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/560/552/1591617441-d7aed757401ae4e96d0158aad31d2b045fd37944.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Kate Magowan',
                    'Liam Garrigan',
                    'Denis Ménochet',
                    'Ciarán Owens',
                    'Brendan Coyle',
                    'Miranda Raison',
                    'Marc-André Grondin',
                    'Doug Allen',
                    'Naomi Radcliffe',
                    'Lucy Akhurst',
                    'Jemma Donovan',
                    'Tanya Fear',
                    'Niall Hayes',
                  ],
                  directors: [
                    'Colin Teague',
                    'Pascal Chaumeil',
                    'China Moo-Young',
                  ],
                  participants: [
                    'Kate Magowan',
                    'Liam Garrigan',
                    'Denis Ménochet',
                    'Ciarán Owens',
                    'Brendan Coyle',
                    'Miranda Raison',
                    'Marc-André Grondin',
                    'Doug Allen',
                    'Naomi Radcliffe',
                    'Lucy Akhurst',
                    'Jemma Donovan',
                    'Tanya Fear',
                    'Niall Hayes',
                  ],
                  people: [
                    {
                      name: 'Kate Magowan',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536350',
                    },
                    {
                      name: 'Liam Garrigan',
                      groups: [
                        'Actor',
                      ],
                      personId: '121143848268',
                    },
                    {
                      name: 'Denis Ménochet',
                      groups: [
                        'Actor',
                      ],
                      personId: '134445607964',
                    },
                    {
                      name: 'Ciarán Owens',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536348',
                    },
                    {
                      name: 'Brendan Coyle',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536343',
                    },
                    {
                      name: 'Miranda Raison',
                      groups: [
                        'Actor',
                      ],
                      personId: '113046056297',
                    },
                    {
                      name: 'Marc-André Grondin',
                      groups: [
                        'Actor',
                      ],
                      personId: '125563432382',
                    },
                    {
                      name: 'Doug Allen',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536345',
                    },
                    {
                      name: 'Naomi Radcliffe',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536354',
                    },
                    {
                      name: 'Lucy Akhurst',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536356',
                    },
                    {
                      name: 'Jemma Donovan',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536358',
                    },
                    {
                      name: 'Tanya Fear',
                      groups: [
                        'Actor',
                      ],
                      personId: '143274536352',
                    },
                    {
                      name: 'Niall Hayes',
                      groups: [
                        'Actor',
                      ],
                      personId: '130873384151',
                    },
                    {
                      name: 'Colin Teague',
                      groups: [
                        'Director',
                      ],
                      personId: '202976808012',
                    },
                    {
                      name: 'China Moo-Young',
                      groups: [
                        'Director',
                      ],
                      personId: '228582440248',
                    },
                    {
                      name: 'Pascal Chaumeil',
                      groups: [
                        'Director',
                      ],
                      personId: '116273192311',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: 'Spotless',
                  synopsis: '"Spotless" berättar historien om en bekymrad man vars prydliga liv vänds upp och ned när hans kriminella bror kraschar in i hans liv och drar in honom i organiserad brottslighet.',
                  season: {
                    title: 'Spotless',
                    availability: {
                      svod: {
                        start: '2020-07-26T22:01:00.000Z',
                        end: '2022-05-31T21:59:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-spotless',
                },
                synopsis: '"Spotless" berättar historien om en bekymrad man vars prydliga liv vänds upp och ned när hans kriminella bror kraschar in i hans liv och drar in honom i organiserad brottslighet.',
                imdb: {
                  id: 'tt3834000',
                  rating: '7.8',
                  votes: '3 497',
                  url: 'http://www.imdb.com/title/tt3834000?ref_ext_viaplay',
                },
                production: {
                  year: 2015,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2020-07-26T22:01:00.000Z',
                  end: '2022-05-31T21:59:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-07-26T22:01:00.000Z',
                    end: '2022-05-31T21:59:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-spotless',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Spotless',
                  href: 'https://content.viaplay.se/pcdash-se/serier/spotless?partial=true',
                },
                'viaplay:page': {
                  title: 'Spotless',
                  href: 'https://content.viaplay.se/pcdash-se/serier/spotless',
                },
                'viaplay:templatedPage': {
                  title: 'Spotless',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/spotless',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'Spotless',
                  href: 'https://content.viaplay.se/pcdash-se/serier/spotless?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'Spotless',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/spotless?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'all-night',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/168/1589809946-f90a2d2f7de30e21f381e79aa439865800009306.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/168/1589809946-f90a2d2f7de30e21f381e79aa439865800009306.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/668/1589809945-5237812adde144e98ffa5d6ebad0cd7d8ca09041.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/668/1589809945-5237812adde144e98ffa5d6ebad0cd7d8ca09041.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/668/1589806030-ce6ab34271c03d0c409d9491619919c547e0ef07.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/168/1589809946-f90a2d2f7de30e21f381e79aa439865800009306.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/61/668/1589809945-5237812adde144e98ffa5d6ebad0cd7d8ca09041.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Eva Gutowski',
                    'Tom Maden',
                    'Brec Bassinger',
                    'Jake Short',
                    'Jenn McAllister',
                    'Kate Flannery',
                    'Allie Grant',
                    'Christopher Avila',
                    'Dawan Owens',
                    'Caleb Ray Gallegos',
                    'Teala Dunn',
                    'Austin North',
                    'Chanel Celaya',
                    'Tequan Richmond',
                    'Ty Doran',
                    'Gus Kamp',
                    'Caleb Gallegos',
                    'Chance Sutton',
                    'Tetona Jackson',
                    'Chester Rushing',
                    'Christopher Avila',
                    'Noureen DeWulf',
                  ],
                  participants: [
                    'Eva Gutowski',
                    'Tom Maden',
                    'Brec Bassinger',
                    'Jake Short',
                    'Jenn McAllister',
                    'Kate Flannery',
                    'Allie Grant',
                    'Christopher Avila',
                    'Dawan Owens',
                    'Caleb Ray Gallegos',
                    'Teala Dunn',
                    'Austin North',
                    'Chanel Celaya',
                    'Tequan Richmond',
                    'Ty Doran',
                    'Gus Kamp',
                    'Caleb Gallegos',
                    'Chance Sutton',
                    'Tetona Jackson',
                    'Chester Rushing',
                    'Christopher Avila',
                    'Noureen DeWulf',
                  ],
                  people: [
                    {
                      name: 'Eva Gutowski',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664296',
                    },
                    {
                      name: 'Tom Maden',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664298',
                    },
                    {
                      name: 'Brec Bassinger',
                      groups: [
                        'Actor',
                      ],
                      personId: '121142312193',
                    },
                    {
                      name: 'Jake Short',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664284',
                    },
                    {
                      name: 'Jenn McAllister',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664281',
                    },
                    {
                      name: 'Kate Flannery',
                      groups: [
                        'Actor',
                      ],
                      personId: '108669480384',
                    },
                    {
                      name: 'Allie Grant',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664294',
                    },
                    {
                      name: 'Christopher Avila',
                      groups: [
                        'Actor',
                      ],
                      personId: '190950439962',
                    },
                    {
                      name: 'Dawan Owens',
                      groups: [
                        'Actor',
                      ],
                      personId: '228499496343',
                    },
                    {
                      name: 'Caleb Ray Gallegos',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664292',
                    },
                    {
                      name: 'Teala Dunn',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664290',
                    },
                    {
                      name: 'Austin North',
                      groups: [
                        'Actor',
                      ],
                      personId: '228499496345',
                    },
                    {
                      name: 'Chanel Celaya',
                      groups: [
                        'Actor',
                      ],
                      personId: '228499496347',
                    },
                    {
                      name: 'Tequan Richmond',
                      groups: [
                        'Actor',
                      ],
                      personId: '111367208373',
                    },
                    {
                      name: 'Ty Doran',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664288',
                    },
                    {
                      name: 'Gus Kamp',
                      groups: [
                        'Actor',
                      ],
                      personId: '228499496349',
                    },
                    {
                      name: 'Caleb Gallegos',
                      groups: [
                        'Actor',
                      ],
                      personId: '228499496351',
                    },
                    {
                      name: 'Chance Sutton',
                      groups: [
                        'Actor',
                      ],
                      personId: '228499496354',
                    },
                    {
                      name: 'Tetona Jackson',
                      groups: [
                        'Actor',
                      ],
                      personId: '142938664279',
                    },
                    {
                      name: 'Chester Rushing',
                      groups: [
                        'Actor',
                      ],
                      personId: '228468776052',
                    },
                    {
                      name: 'Noureen DeWulf',
                      groups: [
                        'Actor',
                      ],
                      personId: '141217832282',
                    },
                  ],
                },
                parentalRating: '12',
                series: {
                  title: 'All Night',
                  synopsis: 'Efter examen samlas gymnasieeleverna för att fira sin sista kväll tillsammans på en maxad fest där bara en regel gäller - ingen kommer in eller ut på 12 timmar.',
                  season: {
                    title: 'All Night',
                    availability: {
                      svod: {
                        start: '2020-06-28T22:00:00.000Z',
                        end: '2022-05-31T21:59:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-all-night',
                },
                synopsis: 'Efter examen samlas gymnasieeleverna för att fira sin sista kväll tillsammans på en maxad fest där bara en regel gäller - ingen kommer in eller ut på 12 timmar.',
                imdb: {
                  id: 'tt7292950',
                  rating: '5.9',
                  votes: '579',
                  url: 'http://www.imdb.com/title/tt7292950?ref_ext_viaplay',
                },
                production: {
                  year: 2018,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2020-06-28T22:00:00.000Z',
                  end: '2022-05-31T21:59:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2020-06-28T22:00:00.000Z',
                    end: '2022-05-31T21:59:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-all-night',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'All Night',
                  href: 'https://content.viaplay.se/pcdash-se/serier/all-night?partial=true',
                },
                'viaplay:page': {
                  title: 'All Night',
                  href: 'https://content.viaplay.se/pcdash-se/serier/all-night',
                },
                'viaplay:templatedPage': {
                  title: 'All Night',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/all-night',
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pcdash-se/serier/komedi',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'All Night',
                  href: 'https://content.viaplay.se/pcdash-se/serier/all-night?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'All Night',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/all-night?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'shadowplay-directors-cut-of-the-defeated',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1618490696-3a72c5c7c8085514c4f0ae1b957beaa66d950a23.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1618490696-3a72c5c7c8085514c4f0ae1b957beaa66d950a23.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1618490697-991b42f2cf42afbb0bdf96b6b23bdb392f7548d6.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1618490697-991b42f2cf42afbb0bdf96b6b23bdb392f7548d6.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1616749378-2d06e58699f2a3068928df6fae66746a6002dfee.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1618490696-3a72c5c7c8085514c4f0ae1b957beaa66d950a23.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/698/432/1618490697-991b42f2cf42afbb0bdf96b6b23bdb392f7548d6.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Taylor Kitsch',
                    'Michael C. Hall',
                    'Logan Marshall-Green',
                    'Nina Hoss',
                    'Tuppence Middleton',
                    'Sebastian Koch',
                    'Mala Emde',
                  ],
                  directors: [
                    'Måns Mårlind',
                    'Björn Stein',
                  ],
                  participants: [
                    'Taylor Kitsch',
                    'Michael C. Hall',
                    'Logan Marshall-Green',
                    'Nina Hoss',
                    'Tuppence Middleton',
                    'Sebastian Koch',
                    'Mala Emde',
                  ],
                  people: [
                    {
                      name: 'Taylor Kitsch',
                      groups: [
                        'Actor',
                      ],
                      personId: '96304680175',
                    },
                    {
                      name: 'Michael C. Hall',
                      groups: [
                        'Actor',
                      ],
                      personId: '96234536016',
                    },
                    {
                      name: 'Logan Marshall-Green',
                      groups: [
                        'Actor',
                      ],
                      personId: '96232488316',
                    },
                    {
                      name: 'Nina Hoss',
                      groups: [
                        'Actor',
                      ],
                      personId: '116774440022',
                    },
                    {
                      name: 'Tuppence Middleton',
                      groups: [
                        'Actor',
                      ],
                      personId: '101584423995',
                    },
                    {
                      name: 'Sebastian Koch',
                      groups: [
                        'Actor',
                      ],
                      personId: '105358888045',
                    },
                    {
                      name: 'Mala Emde',
                      groups: [
                        'Actor',
                      ],
                      personId: '195897384162',
                    },
                    {
                      name: 'Björn Stein',
                      groups: [
                        'Director',
                      ],
                      personId: '103645736140',
                    },
                    {
                      name: 'Måns Mårlind',
                      groups: [
                        'Director',
                      ],
                      personId: '103645736145',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: "Shadowplay: Director's cut of The Defeated",
                  synopsis: 'New York-polisen Max reser till ett ödelagt Berlin, 1946, för att bilda en ny polisstyrka och samtidigt hitta hans försvunna bror, som i sin jakt på hämnd nu jagar de nazister som gått under jorden.',
                  season: {
                    title: "Shadowplay: Director's cut of The Defeated",
                    availability: {
                      svod: {
                        start: '2021-04-19T22:01:00.000Z',
                        end: '2027-12-12T23:00:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-shadowplay-directors-cut-of-the-defeated',
                },
                synopsis: 'New York-polisen Max reser till ett ödelagt Berlin, 1946, för att bilda en ny polisstyrka och samtidigt hitta hans försvunna bror, som i sin jakt på hämnd nu jagar de nazister som gått under jorden.',
                imdb: {
                  id: 'tt8879894',
                  rating: '7.0',
                  votes: '3 049',
                  url: 'http://www.imdb.com/title/tt8879894?ref_ext_viaplay',
                },
                production: {
                  year: 2021,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-04-19T22:01:00.000Z',
                  end: '2027-12-12T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-04-19T22:01:00.000Z',
                    end: '2027-12-12T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [
                  'originals',
                ],
                guid: 'series-shadowplay-directors-cut-of-the-defeated',
                isKids: false,
              },
              _links: {
                self: {
                  title: "Shadowplay: Director's cut of The Defeated",
                  href: 'https://content.viaplay.se/pcdash-se/serier/shadowplay-directors-cut-of-the-defeated?partial=true',
                },
                'viaplay:page': {
                  title: "Shadowplay: Director's cut of The Defeated",
                  href: 'https://content.viaplay.se/pcdash-se/serier/shadowplay-directors-cut-of-the-defeated',
                },
                'viaplay:templatedPage': {
                  title: "Shadowplay: Director's cut of The Defeated",
                  href: 'https://content.viaplay.se/{deviceKey}/serier/shadowplay-directors-cut-of-the-defeated',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: "Shadowplay: Director's cut of The Defeated",
                  href: 'https://content.viaplay.se/pcdash-se/serier/shadowplay-directors-cut-of-the-defeated?partial=true',
                },
                'viaplay:templatedStream': {
                  title: "Shadowplay: Director's cut of The Defeated",
                  href: 'https://content.viaplay.se/{deviceKey}/serier/shadowplay-directors-cut-of-the-defeated?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'oath-the',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/286/636/1554296123-4bf06baaa931ac2f6f896e4ff9ecc755747288ad.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/286/636/1554296123-4bf06baaa931ac2f6f896e4ff9ecc755747288ad.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/360/204/Theoath2_packshot.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/360/204/Theoath2_packshot.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/286/636/1557838043-6c4a720c015e2300f87a34a7b64b43c153d52c2c.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/286/636/1554296123-4bf06baaa931ac2f6f896e4ff9ecc755747288ad.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/360/204/Theoath2_packshot.jpg{?width,height}',
                  },
                },
                originalTitle: 'Oath, The',
                people: {
                  actors: [
                    'Eve Mauro',
                    'Ryan Kwanten',
                    'Sean Bean',
                    'Joseph Julian Soria',
                    'Arlen Escarpeta',
                    'Linda Purl',
                    'Katrina Law',
                    'Michael Malarkey',
                    'Christina Milian',
                    'Elisabeth Röhm',
                    'Kwame Patterson',
                    'Cory Hardrict',
                    'Joseph Julian Soria',
                  ],
                  participants: [
                    'Eve Mauro',
                    'Ryan Kwanten',
                    'Sean Bean',
                    'Joseph Julian Soria',
                    'Arlen Escarpeta',
                    'Linda Purl',
                    'Katrina Law',
                    'Michael Malarkey',
                    'Christina Milian',
                    'Elisabeth Röhm',
                    'Kwame Patterson',
                    'Cory Hardrict',
                    'Joseph Julian Soria',
                  ],
                  people: [
                    {
                      name: 'Eve Mauro',
                      groups: [
                        'Actor',
                      ],
                      personId: '111086120235',
                    },
                    {
                      name: 'Ryan Kwanten',
                      groups: [
                        'Actor',
                      ],
                      personId: '95831080242',
                    },
                    {
                      name: 'Sean Bean',
                      groups: [
                        'Actor',
                      ],
                      personId: '95512104183',
                    },
                    {
                      name: 'Joseph Julian Soria',
                      groups: [
                        'Actor',
                      ],
                      personId: '194173480023',
                    },
                    {
                      name: 'Arlen Escarpeta',
                      groups: [
                        'Actor',
                      ],
                      personId: '100904488104',
                    },
                    {
                      name: 'Linda Purl',
                      groups: [
                        'Actor',
                      ],
                      personId: '199560744298',
                    },
                    {
                      name: 'Katrina Law',
                      groups: [
                        'Actor',
                      ],
                      personId: '100904488109',
                    },
                    {
                      name: 'Michael Malarkey',
                      groups: [
                        'Actor',
                      ],
                      personId: '186231336103',
                    },
                    {
                      name: 'Christina Milian',
                      groups: [
                        'Actor',
                      ],
                      personId: '158463528282',
                    },
                    {
                      name: 'Elisabeth Röhm',
                      groups: [
                        'Actor',
                      ],
                      personId: '160989736037',
                    },
                    {
                      name: 'Kwame Patterson',
                      groups: [
                        'Actor',
                      ],
                      personId: '214431272448',
                    },
                    {
                      name: 'Cory Hardrict',
                      groups: [
                        'Actor',
                      ],
                      personId: '100904488107',
                    },
                  ],
                },
                parentalRating: '12',
                series: {
                  title: 'The Oath',
                  synopsis: 'Baserat på en sann historia. Då var de hederliga poliser, nu är de centrala spelare i korrupta gäng där bara få släpps in – och där det krävs stora uppoffringar för att hålla sig kvar.',
                  season: {
                    title: 'The Oath',
                    availability: {
                      svod: {
                        start: '2019-12-29T23:00:00.000Z',
                        end: '2022-03-29T22:00:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-oath-the',
                },
                synopsis: 'Baserat på en sann historia. Då var de hederliga poliser, nu är de centrala spelare i korrupta gäng där bara få släpps in – och där det krävs stora uppoffringar för att hålla sig kvar.',
                imdb: {
                  id: 'tt7174764',
                  rating: '6.5',
                  votes: '1 740',
                  url: 'http://www.imdb.com/title/tt7174764?ref_ext_viaplay',
                },
                production: {
                  year: 2018,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2019-12-29T23:00:00.000Z',
                  end: '2022-03-29T22:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2019-12-29T23:00:00.000Z',
                    end: '2022-03-29T22:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-oath-the',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'The Oath',
                  href: 'https://content.viaplay.se/pcdash-se/serier/oath-the?partial=true',
                },
                'viaplay:page': {
                  title: 'The Oath',
                  href: 'https://content.viaplay.se/pcdash-se/serier/oath-the',
                },
                'viaplay:templatedPage': {
                  title: 'The Oath',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/oath-the',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'The Oath',
                  href: 'https://content.viaplay.se/pcdash-se/serier/oath-the?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'The Oath',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/oath-the?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'p-valley',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400978-4fd50809534e2162fc9d9e8afb10c824cac32537.jpg?width=199&height=298&template=starzplay',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400978-4fd50809534e2162fc9d9e8afb10c824cac32537.jpg{?width,height}&template=starzplay',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400977-84f7a610df82db83b095e9a14972e2127e1a7957.jpg?width=960&height=540&template=starzplay',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400977-84f7a610df82db83b095e9a14972e2127e1a7957.jpg{?width,height}&template=starzplay',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400978-0ca5635e280d042e4494a561645b47f9c88a2e06.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400978-4fd50809534e2162fc9d9e8afb10c824cac32537.jpg{?width,height}&template=starzplay',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400977-84f7a610df82db83b095e9a14972e2127e1a7957.jpg{?width,height}&template=starzplay',
                  },
                  coverart11: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/402/948/1616400977-85107c920389b136e62db948a79fa9e4cddeae3a.jpg{?width,height}&template=starzplay',
                  },
                },
                people: {
                  actors: [
                    'Brandee Evans',
                    'Nicco Annan',
                    'Shannon Thornton',
                    'Elarica Johnson',
                    'Skyler Joy',
                    'J. Alphonse Nicholson',
                    'J. Alphonse Nicholson',
                    'Parker Sawyers',
                    'Harriett D. Foy',
                    'Tyler Lepley',
                    'Dan J. Johnson',
                  ],
                  participants: [
                    'Brandee Evans',
                    'Nicco Annan',
                    'Shannon Thornton',
                    'Elarica Johnson',
                    'Skyler Joy',
                    'J. Alphonse Nicholson',
                    'J. Alphonse Nicholson',
                    'Parker Sawyers',
                    'Harriett D. Foy',
                    'Tyler Lepley',
                    'Dan J. Johnson',
                  ],
                  people: [
                    {
                      name: 'Brandee Evans',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680284',
                    },
                    {
                      name: 'Nicco Annan',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680286',
                    },
                    {
                      name: 'Shannon Thornton',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680288',
                    },
                    {
                      name: 'Elarica Johnson',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680290',
                    },
                    {
                      name: 'Skyler Joy',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680292',
                    },
                    {
                      name: 'J. Alphonse Nicholson',
                      groups: [
                        'Actor',
                      ],
                      personId: '191118888415',
                    },
                    {
                      name: 'Parker Sawyers',
                      groups: [
                        'Actor',
                      ],
                      personId: '162939432156',
                    },
                    {
                      name: 'Harriett D. Foy',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680297',
                    },
                    {
                      name: 'Tyler Lepley',
                      groups: [
                        'Actor',
                      ],
                      personId: '190960680299',
                    },
                    {
                      name: 'Dan J. Johnson',
                      groups: [
                        'Actor',
                      ],
                      personId: '127406632137',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: 'P-Valley',
                  synopsis: 'Serien ”P-Valley” handlar om en strippklubb i Mississippideltat och är en mångskiftande berättelse om de som jobbar på klubben, samt de diverse karaktärerna som stiger in genom dess dörrar.',
                  season: {
                    title: 'P-Valley',
                    availability: {
                      svod: {
                        start: '2021-04-12T22:00:00.000Z',
                        end: '2025-12-31T23:00:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-p-valley',
                },
                synopsis: 'Serien ”P-Valley” handlar om en strippklubb i Mississippideltat och är en mångskiftande berättelse om de som jobbar på klubben, samt de diverse karaktärerna som stiger in genom dess dörrar.',
                imdb: {
                  id: 'tt9340526',
                  rating: '7.1',
                  votes: '2 818',
                  url: 'http://www.imdb.com/title/tt9340526?ref_ext_viaplay',
                },
                production: {
                  year: 2020,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2021-04-12T22:00:00.000Z',
                  end: '2025-12-31T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2021-04-12T22:00:00.000Z',
                    end: '2025-12-31T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-p-valley',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'P-Valley',
                  href: 'https://content.viaplay.se/pcdash-se/serier/p-valley?partial=true',
                },
                'viaplay:page': {
                  title: 'P-Valley',
                  href: 'https://content.viaplay.se/pcdash-se/serier/p-valley',
                },
                'viaplay:templatedPage': {
                  title: 'P-Valley',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/p-valley',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'P-Valley',
                  href: 'https://content.viaplay.se/pcdash-se/serier/p-valley?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'P-Valley',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/p-valley?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
            {
              type: 'series',
              publicPath: 'deadly-class',
              content: {
                images: {
                  boxart: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/84/264/1547199947-158f4aaf39f2a85625d88dac57af7b5df91ae0fe.jpg?width=199&height=298',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/84/264/1547199947-158f4aaf39f2a85625d88dac57af7b5df91ae0fe.jpg{?width,height}',
                  },
                  landscape: {
                    url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/84/264/1547652019-761fee38a858244c9269ce053cdbdb345b9ef841.jpg?width=960&height=540',
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/84/264/1547652019-761fee38a858244c9269ce053cdbdb345b9ef841.jpg{?width,height}',
                  },
                  hero169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/508/664/1547469736-1a7efae75f6bc77b4526f4983be2a89dfc3a198e.jpg{?width,height}',
                  },
                  coverart23: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/84/264/1547199947-158f4aaf39f2a85625d88dac57af7b5df91ae0fe.jpg{?width,height}',
                  },
                  coverart169: {
                    template: 'https://i-viaplay-com.akamaized.net/viaplay-prod/84/264/1547652019-761fee38a858244c9269ce053cdbdb345b9ef841.jpg{?width,height}',
                  },
                },
                people: {
                  actors: [
                    'Lana Condor',
                    'Liam James',
                    'Siobhan Williams',
                    'Benedict Wong',
                    'Benjamin Wadsworth',
                    'María Gabriela de Faría',
                    'Luke Tennie',
                    'Michel Duval',
                  ],
                  participants: [
                    'Lana Condor',
                    'Liam James',
                    'Siobhan Williams',
                    'Benedict Wong',
                    'Benjamin Wadsworth',
                    'María Gabriela de Faría',
                    'Luke Tennie',
                    'Michel Duval',
                  ],
                  people: [
                    {
                      name: 'Lana Condor',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488045',
                    },
                    {
                      name: 'Liam James',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488051',
                    },
                    {
                      name: 'Siobhan Williams',
                      groups: [
                        'Actor',
                      ],
                      personId: '212568104422',
                    },
                    {
                      name: 'Benedict Wong',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488043',
                    },
                    {
                      name: 'Benjamin Wadsworth',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488041',
                    },
                    {
                      name: 'María Gabriela de Faría',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488047',
                    },
                    {
                      name: 'Luke Tennie',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488049',
                    },
                    {
                      name: 'Michel Duval',
                      groups: [
                        'Actor',
                      ],
                      personId: '95144488039',
                    },
                  ],
                },
                parentalRating: '15',
                series: {
                  title: 'Deadly Class',
                  synopsis: 'Baserat på serietidningen med samma namn. Den vilsna och hemlösa tonåringen Marcus hittar hem när han rekryteras till en hemlig skola som utbildar i den ädla konsten att döda.',
                  season: {
                    title: 'Deadly Class',
                    availability: {
                      svod: {
                        start: '2019-01-17T19:00:00.000Z',
                        end: '2023-01-16T23:00:00.000Z',
                      },
                    },
                  },
                  seasons: 1,
                  seriesGuid: 'series-deadly-class',
                },
                synopsis: 'Baserat på serietidningen med samma namn. Den vilsna och hemlösa tonåringen Marcus hittar hem när han rekryteras till en hemlig skola som utbildar i den ädla konsten att döda.',
                imdb: {
                  id: 'tt5924572',
                  rating: '7.6',
                  votes: '15 419',
                  url: 'http://www.imdb.com/title/tt5924572?ref_ext_viaplay',
                },
                production: {
                  year: 2019,
                },
              },
              user: {
                starred: false,
              },
              system: {
                availability: {
                  start: '2019-01-17T19:00:00.000Z',
                  end: '2023-01-16T23:00:00.000Z',
                  planInfo: {
                    isRental: false,
                    isPurchase: false,
                  },
                  svod: {
                    start: '2019-01-17T19:00:00.000Z',
                    end: '2023-01-16T23:00:00.000Z',
                    planInfo: {
                      isRental: false,
                      isPurchase: false,
                    },
                  },
                },
                flags: [

                ],
                guid: 'series-deadly-class',
                isKids: false,
              },
              _links: {
                self: {
                  title: 'Deadly Class',
                  href: 'https://content.viaplay.se/pcdash-se/serier/deadly-class?partial=true',
                },
                'viaplay:page': {
                  title: 'Deadly Class',
                  href: 'https://content.viaplay.se/pcdash-se/serier/deadly-class',
                },
                'viaplay:templatedPage': {
                  title: 'Deadly Class',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/deadly-class',
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pcdash-se/serier/drama',
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href: 'https://content.viaplay.se/pcdash-se/serier/kriminaldrama',
                  },
                ],
                'viaplay:peopleSearch': {
                  href: 'https://content.viaplay.se/pcdash-se/search?query="{person}"',
                  templated: true,
                },
                'viaplay:peoplePage': {
                  href: 'https://content.viaplay.se/pcdash-se/people/{name}?personId="{personId}"',
                  templated: true,
                },
                'viaplay:stream': {
                  title: 'Deadly Class',
                  href: 'https://content.viaplay.se/pcdash-se/serier/deadly-class?partial=true',
                },
                'viaplay:templatedStream': {
                  title: 'Deadly Class',
                  href: 'https://content.viaplay.se/{deviceKey}/serier/deadly-class?partial=true',
                },
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true,
                    },
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false,
                  },
                },
              },
            },
          ],
        },
        _links: {
          self: {
            href: 'https://content.viaplay.se/pcdash-se/film/focus-2015?blockId=8540e6fb-3a3b-41f5-a019-2872114e5ec5&partial=1&pageNumber=1',
          },
        },
      },
    ],
  },
  responseCode: {
    httpStatus: 200,
    statusCode: 200,
    code: 1,
  },
};
