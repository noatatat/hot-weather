export interface IWeather {
  type: string;
  water: number;
  temperature: number;
}

export interface ISocial {
  subtitle: string;
  image: string;
  followers: number;
  following: number;
}

export interface IPlaces {
  title: string;
  image: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocial;
  type: string;
}

const data: Array<any> = [{
  'title': 'Синяя борода',
  'image': 'images/boroda1.jpg',
  'address': 'улица Пушкина, дом Колотушкина',
  'phone': '+4 432 344 32 44',
  'weather': {
    'type': 'cloudy',
    'water': 2,
    'temperature': 12
  },
  'social_info': {
    'subtitle': 'Никто не уходил',
    'image': 'images/boroda2.jpg',
    'followers': 132,
    'following': 231,
   },
  'type': 'hotel'
},
  {
    'title': 'Ну, за рыбалку!',
    'image': 'images/kuzmich1.jpg',
    'address': 'в Темно-синем лесу, где трепещут осины',
    'phone': '+7 893 843 93 90',
    'weather': {
      'type': 'sunny', // cloudy windy snowy rainy
      'water': 12,
      'temperature': 27
    },
    'social_info': {
      'subtitle': 'Лайки Кузьмичу',
      'image': 'images/kuzmich2.jpg',
      'followers': 234,
      'following': 634,
    },
    'type': 'fishing'
  },
  {
    'title': 'Охота на лося',
    'image': 'images/hunt1.jpg',
    'address': 'Охотничье хозяйство «Зайцева Гора»',
    'phone': '+5 666 983 00 93',
    'weather': {
      'type': 'rainy',
      'water': 8,
      'temperature': 25
    },
    'social_info': {
      'subtitle': 'Лось Лось',
      'image': 'images/hunt2.jpg',
      'followers': 834,
      'following': 1234,
    },
    'type': 'hunt'
  },
  {
    'title': 'Пеший тур',
    'image': 'images/tour1.jpg',
    'address': 'Налево пойдешь - коня потеряешь',
    'phone': '+5 666 983 00 93',
    'weather': {
      'type': 'snowy', // cloudy windy snowy rainy
      'water': 2,
      'temperature': 2
    },
    'social_info': {
      'subtitle': 'Экскурсия',
      'image': 'images/tour2.jpg',
      'followers': 34,
      'following': 234,
    },
    'type': 'tour'
  }
];
