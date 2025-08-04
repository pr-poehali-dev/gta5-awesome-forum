import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "Полный гайд по началу игры в GTA Online",
      description: "Все что нужно знать новичку для успешного старта в мире преступности",
      author: "GameMaster2024",
      category: "Для новичков",
      difficulty: "Легко",
      readTime: "15 мин",
      rating: 4.9,
      views: "45.2k",
      likes: 2847,
      datePublished: "2 дня назад",
      tags: ["новичок", "онлайн", "деньги", "старт"],
      isFeatured: true,
      thumbnail: "guide1.jpg"
    },
    {
      id: 2,
      title: "Как быстро заработать деньги в GTA Online 2024",
      description: "Лучшие способы заработка для игроков любого уровня",
      author: "MoneyExpert",
      category: "Заработок",
      difficulty: "Средне",
      readTime: "12 мин",
      rating: 4.8,
      views: "38.7k",
      likes: 2156,
      datePublished: "5 дней назад",
      tags: ["деньги", "заработок", "онлайн", "бизнес"],
      isFeatured: true,
      thumbnail: "guide2.jpg"
    },
    {
      id: 3,
      title: "Установка и настройка модов для GTA 5",
      description: "Пошаговое руководство по установке популярных модификаций",
      author: "ModInstaller",
      category: "Моды",
      difficulty: "Сложно",
      readTime: "25 мин",
      rating: 4.6,
      views: "29.1k",
      likes: 1823,
      datePublished: "1 неделю назад",
      tags: ["моды", "установка", "настройка", "пк"],
      isFeatured: false,
      thumbnail: "guide3.jpg"
    },
    {
      id: 4,
      title: "Лучшие настройки графики для максимального FPS",
      description: "Оптимизация игры для слабых и мощных компьютеров",
      author: "TechOptimizer",
      category: "Оптимизация",
      difficulty: "Средне",
      readTime: "18 мин",
      rating: 4.5,
      views: "22.4k",
      likes: 1456,
      datePublished: "2 недели назад",
      tags: ["фпс", "графика", "оптимизация", "настройки"],
      isFeatured: false,
      thumbnail: "guide4.jpg"
    },
    {
      id: 5,
      title: "Гайд по созданию собственного RP персонажа",
      description: "Как создать уникального и интересного персонажа для ролевых серверов",
      author: "RPMaster",
      category: "Roleplay",
      difficulty: "Средне",
      readTime: "20 мин",
      rating: 4.7,
      views: "18.9k",
      likes: 1234,
      datePublished: "3 недели назад",
      tags: ["rp", "персонаж", "ролевая", "сервер"],
      isFeatured: false,
      thumbnail: "guide5.jpg"
    }
  ];

  const categories = [
    { name: "Все гайды", count: 156, active: true, icon: "BookOpen" },
    { name: "Для новичков", count: 45, icon: "Users" },
    { name: "Заработок", count: 32, icon: "DollarSign" },
    { name: "Моды", count: 28, icon: "Wrench" },
    { name: "Оптимизация", count: 23, icon: "Settings" },
    { name: "Roleplay", count: 18, icon: "Drama" },
    { name: "PvP", count: 10, icon: "Sword" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко": return "text-green-500";
      case "Средне": return "text-yellow-500";
      case "Сложно": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-primary-foreground" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GTA 5 ФОРУМ
                </h1>
                <p className="text-sm text-muted-foreground">Гайды</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
              <Link to="/discussions" className="text-foreground hover:text-primary transition-colors">Обсуждения</Link>
              <Link to="/servers" className="text-foreground hover:text-primary transition-colors">Сервера</Link>
              <Link to="/guides" className="text-primary font-medium">Гайды</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Гайды и обучение</h2>
            <p className="text-muted-foreground">Изучайте игру с лучшими руководствами</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать гайд
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Search" size={20} className="text-primary" />
                  Поиск гайдов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input placeholder="Найти руководство..." className="flex-1" />
                  <Button variant="outline">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                  <Button variant="outline">
                    <Icon name="ArrowUpDown" size={16} className="mr-2" />
                    Сортировка
                  </Button>
                </div>
              </CardContent>
            </Card>

            {guides.filter(guide => guide.isFeatured).length > 0 && (
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Star" size={20} className="text-primary" />
                    Рекомендуемые гайды
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {guides.filter(guide => guide.isFeatured).map((guide) => (
                      <Card key={guide.id} className="hover:bg-accent/50 transition-colors cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <Badge className="bg-gradient-to-r from-primary to-secondary">
                              ⭐ Рекомендуем
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-primary" />
                              <span className="text-sm font-medium text-primary">{guide.rating}</span>
                            </div>
                          </div>
                          <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                            {guide.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {guide.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={10} />
                              {guide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Eye" size={10} />
                              {guide.views}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="space-y-4">
              {guides.map((guide) => (
                <Card key={guide.id} className="hover:bg-accent/30 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <Icon name="BookOpen" size={24} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline">{guide.category}</Badge>
                            <Badge variant="secondary" className={getDifficultyColor(guide.difficulty)}>
                              {guide.difficulty}
                            </Badge>
                            {guide.isFeatured && (
                              <Badge className="bg-gradient-to-r from-primary to-secondary">
                                ⭐ Топ
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-primary" />
                            <span className="text-lg font-bold text-primary">{guide.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-3">
                          {guide.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {guide.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="User" size={12} />
                              {guide.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={12} />
                              {guide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Eye" size={12} />
                              {guide.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Heart" size={12} />
                              {guide.likes}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">{guide.datePublished}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">
                <Icon name="ChevronDown" size={16} className="mr-2" />
                Загрузить еще гайды
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Folder" size={20} className="text-primary" />
                  Категории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      category.active ? 'bg-primary/20 text-primary' : 'hover:bg-accent/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon name={category.icon as any} size={16} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant={category.active ? "default" : "secondary"}>
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Популярные теги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["новичок", "деньги", "моды", "онлайн", "rp", "настройки", "фпс", "пк", "заработок", "оптимизация"].map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  Топ авторов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["GameMaster2024", "MoneyExpert", "ModInstaller", "TechOptimizer"].map((author, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {author[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{author}</div>
                      <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 20) + 5} гайдов</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={12} className="text-primary" />
                      <span className="text-xs text-primary">{(Math.random() * 1 + 4).toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  Недавно обновленные
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {guides.slice(0, 3).map((guide) => (
                  <div key={guide.id} className="p-3 rounded-lg border border-border">
                    <div className="font-medium text-sm mb-1 line-clamp-1">{guide.title}</div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{guide.author}</span>
                      <span>{guide.datePublished}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guides;