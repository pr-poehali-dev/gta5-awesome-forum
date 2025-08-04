import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Discussions = () => {
  const discussions = [
    {
      id: 1,
      title: "Новые читы в GTA Online - как защититься?",
      author: "SecurityPro",
      category: "Безопасность",
      replies: 45,
      views: "2.3k",
      lastActivity: "5 мин назад",
      rating: 4.2,
      isHot: true,
      tags: ["античит", "онлайн", "защита"]
    },
    {
      id: 2,
      title: "Лучшие моды на транспорт 2024",
      author: "CarMaster",
      category: "Моды",
      replies: 128,
      views: "8.7k",
      lastActivity: "12 мин назад",
      rating: 4.8,
      isPinned: true,
      tags: ["моды", "машины", "транспорт"]
    },
    {
      id: 3,
      title: "Проблемы с запуском после обновления",
      author: "GameFixer",
      category: "Техподдержка",
      replies: 23,
      views: "1.2k",
      lastActivity: "30 мин назад",
      rating: 3.9,
      tags: ["баги", "обновление", "помощь"]
    },
    {
      id: 4,
      title: "Обзор нового DLC - стоит ли покупать?",
      author: "ReviewKing",
      category: "Обзоры",
      replies: 89,
      views: "5.4k",
      lastActivity: "1 час назад",
      rating: 4.5,
      tags: ["dlc", "обзор", "покупка"]
    },
    {
      id: 5,
      title: "Создание собственного сервера RP",
      author: "ServerAdmin",
      category: "Сервера",
      replies: 67,
      views: "3.1k",
      lastActivity: "2 часа назад",
      rating: 4.3,
      tags: ["rp", "сервер", "создание"]
    }
  ];

  const categories = [
    { name: "Все", count: 1247, active: true },
    { name: "Моды", count: 342 },
    { name: "Сервера", count: 189 },
    { name: "Техподдержка", count: 156 },
    { name: "Обзоры", count: 98 },
    { name: "Безопасность", count: 67 }
  ];

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
                <p className="text-sm text-muted-foreground">Обсуждения</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
              <Link to="/discussions" className="text-primary font-medium">Обсуждения</Link>
              <Link to="/servers" className="text-foreground hover:text-primary transition-colors">Сервера</Link>
              <Link to="/guides" className="text-foreground hover:text-primary transition-colors">Гайды</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Обсуждения</h2>
            <p className="text-muted-foreground">Общайтесь с игроками и делитесь опытом</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать тему
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Search" size={20} className="text-primary" />
                    Поиск по темам
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input placeholder="Найти обсуждение..." className="flex-1" />
                  <Button variant="outline">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        {discussion.isPinned && <Badge variant="secondary">📌 Закреплено</Badge>}
                        {discussion.isHot && <Badge variant="destructive">🔥 HOT</Badge>}
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Star" size={14} className="text-primary" />
                        <span className="text-primary font-medium">{discussion.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                      {discussion.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={12} />
                          {discussion.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={12} />
                          {discussion.replies} ответов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={12} />
                          {discussion.views} просмотров
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        {discussion.lastActivity}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">
                <Icon name="ChevronDown" size={16} className="mr-2" />
                Загрузить еще
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
                    <span className="font-medium">{category.name}</span>
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
                  {["моды", "rp", "онлайн", "баги", "помощь", "dlc", "сервер", "гайд"].map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  Активные участники
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["ProGamer777", "ModExpert", "HelpMaster", "RPKing"].map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {user[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user}</div>
                      <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 100) + 10} сообщений</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={12} className="text-primary" />
                      <span className="text-xs text-primary">{(Math.random() * 2 + 3).toFixed(1)}</span>
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

export default Discussions;