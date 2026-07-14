import { User, Scene, ItineraryItem, Clothing, SavedOutfit } from "./types";

export const initialUser: User = {
  id: "user-1",
  nickname: "Urban Nomad",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  recentFeel: "偏冷",
  isLoggedIn: true
};

export const initialScenes: Scene[] = [
  {
    id: "scene-office",
    name: "办公室",
    category: "办公室",
    temperature: 22,
    feel: "偏冷",
    isPreset: true
  },
  {
    id: "scene-home",
    name: "家",
    category: "家",
    temperature: 24,
    feel: "舒适",
    isPreset: true
  },
  {
    id: "scene-metro",
    name: "地铁通勤",
    category: "地铁通勤",
    temperature: 26,
    feel: "闷热",
    isPreset: true
  },
  {
    id: "scene-mall",
    name: "商场",
    category: "商场",
    temperature: 21,
    feel: "微凉",
    isPreset: true
  }
];

export const initialItinerary: ItineraryItem[] = [
  {
    id: "itin-1",
    time: "08:15",
    sceneId: "scene-metro",
    temperature: 26,
    duration: 1
  },
  {
    id: "itin-2",
    time: "09:10",
    sceneId: "scene-office",
    temperature: 22,
    duration: 8
  },
  {
    id: "itin-3",
    time: "18:20",
    sceneId: "scene-mall",
    temperature: 21,
    duration: 2
  }
];

export const initialClothing: Clothing[] = [
  {
    id: "cloth-1",
    name: "蓝色条纹衬衫",
    category: "上衣",
    color: "蓝色",
    image: "/input_file_0.png"
  },
  {
    id: "cloth-2",
    name: "史努比短袖",
    category: "上衣",
    color: "白色",
    image: "/input_file_4.png"
  },
  {
    id: "cloth-3",
    name: "军绿色短裤",
    category: "下装",
    color: "绿色",
    image: "/input_file_3.png"
  },
  {
    id: "cloth-4",
    name: "牛仔长裤",
    category: "下装",
    color: "蓝色",
    image: "/input_file_2.png"
  },
  {
    id: "cloth-5",
    name: "白色运动鞋",
    category: "鞋履",
    color: "白色",
    image: "/input_file_1.png"
  },
  {
    id: "cloth-6",
    name: "灰色针织开衫",
    category: "上衣",
    color: "灰色",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "cloth-7",
    name: "卡其休闲短裤",
    category: "下装",
    color: "卡其色",
    image: "/input_file_5.png"
  },
  {
    id: "cloth-8",
    name: "黑色圆领卫衣",
    category: "上衣",
    color: "黑色",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "cloth-9",
    name: "防风防晒外套",
    category: "上衣",
    color: "白色",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "cloth-10",
    name: "卡其色风衣",
    category: "上衣",
    color: "卡其色",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "cloth-11",
    name: "复古皮质乐福鞋",
    category: "鞋履",
    color: "棕色",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "cloth-12",
    name: "编织托特背包",
    category: "配饰",
    color: "米色",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80"
  }
];

export const initialOutfits: SavedOutfit[] = [
  {
    id: "outfit-1",
    name: "春日通勤Look",
    season: "春天",
    colorTag: "蓝色",
    createdAt: new Date().toLocaleDateString("zh-CN"),
    canvasItems: [
      { id: "ci-1", clothingId: "cloth-1", x: 50, y: 35, scale: 1.1, zIndex: 2 },
      { id: "ci-2", clothingId: "cloth-2", x: 50, y: 35, scale: 0.9, zIndex: 1 },
      { id: "ci-3", clothingId: "cloth-4", x: 50, y: 70, scale: 1.0, zIndex: 3 },
      { id: "ci-4", clothingId: "cloth-5", x: 50, y: 92, scale: 0.7, zIndex: 4 }
    ]
  }
];
