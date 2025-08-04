import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredTopics = [
    {
      title: "Лучшие моды на GTA 5",
      author: "ProGamer777",
      replies: 234,
      views: "12.5k",
      category: "Моды",
      rating: 4.8,
      isHot: true
    },
    {
      title: "Топ серверов RP 2024",
      author: "AdminKing",
      replies: 156,
      views: "8.2k", 
      category: "Сервера",
      rating: 4.9,
      isPinned: true
    },
    {
      title: "Как заработать в GTA Online",
      author: "MoneyMaster",
      replies: 89,
      views: "5.1k",
      category: "Гайды", 
      rating: 4.6
    }
  ];

  const serverStats = [
    { name: "Los Santos RP", players: "1,245", rating: 4.9, status: "online" },
    { name: "Vice City Roleplay", players: "856", rating: 4.7, status: "online" },
    { name: "Liberty City Life", players: "623", rating: 4.5, status: "online" },
    { name: "San Andreas Adventures", players: "234", rating: 4.3, status: "maintenance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GTA 5 ФОРУМ
                </h1>
                <p className="text-sm text-muted-foreground">Игровое сообщество</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-primary font-medium">Главная</Link>
              <Link to="/discussions" className="text-foreground hover:text-primary transition-colors">Обсуждения</Link>
              <Link to="/servers" className="text-foreground hover:text-primary transition-colors">Сервера</Link>
              <Link to="/guides" className="text-foreground hover:text-primary transition-colors">Гайды</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Star" size={24} className="text-primary" />
                  Добро пожаловать в GTA 5 сообщество!
                </CardTitle>
                <CardDescription className="text-base">
                  Лучшее место для обсуждения модов, серверов и получения помощи по игре
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link to="/discussions">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Начать обсуждение
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/servers">
                      <Icon name="Server" size={16} className="mr-2" />
                      Найти сервер
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/guides">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить гайды
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Популярные темы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredTopics.map((topic, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {topic.isHot && <Badge variant="destructive">🔥 HOT</Badge>}
                        {topic.isPinned && <Badge variant="secondary">📌 Закреплено</Badge>}
                        <Badge variant="outline">{topic.category}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Icon name="Star" size={12} />
                        {topic.rating}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>by {topic.author}</span>
                      <span className="flex items-center gap-1">
                        <Icon name="MessageCircle" size={12} />
                        {topic.replies}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Eye" size={12} />
                        {topic.views}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} className="text-primary" />
                  Статистика форума
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2,847</div>
                  <div className="text-sm text-muted-foreground">Участников онлайн</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-semibold">12.5k</div>
                    <div className="text-xs text-muted-foreground">Всего тем</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">156k</div>
                    <div className="text-xs text-muted-foreground">Сообщений</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Server" size={20} className="text-primary" />
                  Топ серверов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {serverStats.map((server, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${server.status === 'online' ? 'bg-primary' : 'bg-yellow-500'}`}></div>
                        <span className="font-medium text-sm">{server.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={10} />
                          {server.players}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Star" size={10} />
                          {server.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Plus" size={14} className="mr-2" />
                  Посмотреть все сервера
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={20} className="text-primary" />
                  Топ игроков
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['GamerPro2024', 'ModMaster', 'RPKing', 'ServerAdmin'].map((player, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{player}</div>
                      <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 5000) + 1000} очков</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={12} className={i < 4 ? 'text-primary' : 'text-muted-foreground'} />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-12 py-8 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 GTA 5 Форум. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;