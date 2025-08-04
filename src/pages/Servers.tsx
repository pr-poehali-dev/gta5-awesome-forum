import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Servers = () => {
  const servers = [
    {
      id: 1,
      name: "Los Santos Roleplay",
      description: "Лучший RP сервер с реалистичной экономикой",
      players: 1245,
      maxPlayers: 1500,
      rating: 4.9,
      reviews: 2847,
      gameMode: "Roleplay",
      language: "RU",
      status: "online",
      features: ["Экономика", "Работы", "Дома", "Банды"],
      ip: "server1.gta5rp.ru:7777",
      isPremium: true,
      isVerified: true
    },
    {
      id: 2,
      name: "Vice City Life",
      description: "Атмосферный сервер с уникальными механиками",
      players: 856,
      maxPlayers: 1000,
      rating: 4.7,
      reviews: 1923,
      gameMode: "Roleplay",
      language: "RU/EN",
      status: "online",
      features: ["Кастомные карты", "PvP зоны", "Ивенты"],
      ip: "vice.gta-rp.com:7778",
      isPremium: false,
      isVerified: true
    },
    {
      id: 3,
      name: "Liberty City Adventures",
      description: "Классический GTA сервер для всех возрастов",
      players: 623,
      maxPlayers: 800,
      rating: 4.5,
      reviews: 1456,
      gameMode: "Freeroam",
      language: "RU",
      status: "online",
      features: ["Моды", "Гонки", "Дуэли", "Кооп"],
      ip: "liberty.gtaserver.net:7779",
      isPremium: false,
      isVerified: false
    },
    {
      id: 4,
      name: "San Andreas Racing",
      description: "Специализированный сервер для гонщиков",
      players: 234,
      maxPlayers: 500,
      rating: 4.3,
      reviews: 892,
      gameMode: "Racing",
      language: "RU",
      status: "maintenance",
      features: ["Гонки", "Тюнинг", "Турниры"],
      ip: "racing.sa-servers.ru:7780",
      isPremium: true,
      isVerified: true
    },
    {
      id: 5,
      name: "Mafia Roleplay",
      description: "Темный мир преступности и мафии",
      players: 445,
      maxPlayers: 600,
      rating: 4.2,
      reviews: 1124,
      gameMode: "Roleplay",
      language: "RU",
      status: "online",
      features: ["Мафия", "Преступность", "Бизнес"],
      ip: "mafia.rp-servers.com:7781",
      isPremium: false,
      isVerified: true
    }
  ];

  const gameTypes = [
    { name: "Все", count: 245, active: true },
    { name: "Roleplay", count: 156 },
    { name: "Freeroam", count: 67 },
    { name: "Racing", count: 22 }
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
                <p className="text-sm text-muted-foreground">Сервера</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
              <Link to="/discussions" className="text-foreground hover:text-primary transition-colors">Обсуждения</Link>
              <Link to="/servers" className="text-primary font-medium">Сервера</Link>
              <Link to="/guides" className="text-foreground hover:text-primary transition-colors">Гайды</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Рейтинг серверов</h2>
            <p className="text-muted-foreground">Найдите лучший сервер для игры</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить сервер
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Search" size={20} className="text-primary" />
                  Поиск серверов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input placeholder="Название сервера или IP..." className="flex-1" />
                  <Button variant="outline">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                  <Button variant="outline">
                    <Icon name="BarChart3" size={16} className="mr-2" />
                    Сортировка
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {servers.map((server, index) => (
                <Card key={server.id} className="hover:bg-accent/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold">{server.name}</h3>
                            {server.isPremium && <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600">💎 Premium</Badge>}
                            {server.isVerified && <Badge variant="secondary">✅ Проверен</Badge>}
                            <div className={`w-3 h-3 rounded-full ${server.status === 'online' ? 'bg-primary animate-pulse' : 'bg-yellow-500'}`}></div>
                          </div>
                          <p className="text-muted-foreground mb-2">{server.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <Badge variant="outline">{server.gameMode}</Badge>
                            <Badge variant="outline">{server.language}</Badge>
                            <span className="text-muted-foreground">IP: {server.ip}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Icon name="Star" size={16} className="text-primary" />
                          <span className="text-lg font-bold text-primary">{server.rating}</span>
                          <span className="text-sm text-muted-foreground">({server.reviews})</span>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                          <Icon name="Play" size={14} className="mr-2" />
                          Играть
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Игроки онлайн</span>
                            <span className="text-sm font-medium">{server.players}/{server.maxPlayers}</span>
                          </div>
                          <Progress value={(server.players / server.maxPlayers) * 100} className="h-2" />
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {server.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3">
                        <Button variant="outline" size="sm">
                          <Icon name="Heart" size={14} className="mr-2" />
                          В избранное
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="MessageCircle" size={14} className="mr-2" />
                          Отзывы
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Share2" size={14} className="mr-2" />
                          Поделиться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">
                <Icon name="ChevronDown" size={16} className="mr-2" />
                Показать еще сервера
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gamepad2" size={20} className="text-primary" />
                  Тип игры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {gameTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                      type.active ? 'bg-primary/20 text-primary' : 'hover:bg-accent/50'
                    }`}
                  >
                    <span className="font-medium">{type.name}</span>
                    <Badge variant={type.active ? "default" : "secondary"}>
                      {type.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} className="text-primary" />
                  Статистика
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3,567</div>
                  <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-semibold">245</div>
                    <div className="text-xs text-muted-foreground">Активных серверов</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold">15.6k</div>
                    <div className="text-xs text-muted-foreground">Всего отзывов</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Топ по рейтингу
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {servers.slice(0, 3).map((server, index) => (
                  <div key={server.id} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{server.name}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Users" size={10} />
                        {server.players}
                        <Icon name="Star" size={10} />
                        {server.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  Недавно добавленные
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["NewRP Server", "Fresh Gaming", "Ultimate GTA"].map((name, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <div className="font-medium text-sm">{name}</div>
                      <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 24) + 1} часа назад</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">Новый</Badge>
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

export default Servers;