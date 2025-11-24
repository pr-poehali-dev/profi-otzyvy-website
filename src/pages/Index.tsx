import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openTelegram = () => {
    window.open('https://t.me/sneznyy', '_blank');
  };

  const openWhatsApp = () => {
    window.open('http://wa.me/+79278477772', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Star" className="text-primary" size={32} />
            <span className="text-xl font-bold">StarProfi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">
              Примеры
            </button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <Button onClick={openTelegram} variant="ghost" size="icon">
              <Icon name="Send" size={20} />
            </Button>
            <Button onClick={openWhatsApp} variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Купить отзывы на{" "}
                <span className="text-primary">профи ру</span>{" "}
                (profi.ru) от 70 рублей
              </h1>
              <p className="text-lg text-muted-foreground">
                Повысьте доверие клиентов и увеличьте количество заказов с качественными отзывами на вашем профиле
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={openTelegram}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 animate-pulse-glow"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Заказать в Telegram
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={openWhatsApp}
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 py-6"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="text-sm">Быстро</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span className="text-sm">Безопасно</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="ThumbsUp" className="text-primary" size={24} />
                  <span className="text-sm">Качественно</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ae208bde-3430-4c88-a37d-4bbb3926c065/files/91ebaecb-4c4a-42ed-952e-6414b62405a4.jpg"
                alt="Hero"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">70₽</div>
                <div className="text-sm">за отзыв</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">
              Выберите оптимальный пакет для вашего профиля
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Старт</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">300₽</span>
                  </div>
                  <p className="text-muted-foreground mt-2">1 отзыв</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Живой аккаунт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Уникальный текст</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>5 звезд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Быстрая публикация</span>
                  </li>
                </ul>
                <Button 
                  onClick={openTelegram}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="lg"
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-primary shadow-lg shadow-primary/20">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-secondary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Популярный
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Оптима</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">499₽</span>
                  </div>
                  <p className="text-muted-foreground mt-2">3 отзыва</p>
                  <p className="text-sm text-primary mt-1">166₽ за отзыв</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Живые аккаунты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Уникальные тексты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>5 звезд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Разные IP адреса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Приоритетная обработка</span>
                  </li>
                </ul>
                <Button 
                  onClick={openTelegram}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-pulse-glow"
                  size="lg"
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Максимум</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">999₽</span>
                  </div>
                  <p className="text-muted-foreground mt-2">7 отзывов</p>
                  <p className="text-sm text-primary mt-1">142₽ за отзыв</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Живые аккаунты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Уникальные тексты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>5 звезд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Разные IP адреса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Максимальная надежность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={18} />
                    <span>Гарантия качества</span>
                  </li>
                </ul>
                <Button 
                  onClick={openTelegram}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="lg"
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Примеры наших работ</h2>
            <p className="text-muted-foreground text-lg">
              Реальные отзывы, которые мы разместили на Profi.ru
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/ae208bde-3430-4c88-a37d-4bbb3926c065/files/56acf910-3002-4d1a-9f40-3a3e3b08cc75.jpg"
                alt="Пример отзыва"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Отличный мастер! Выполнил работу качественно и в срок. Очень доволен результатом. Рекомендую!
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/ae208bde-3430-4c88-a37d-4bbb3926c065/files/c1f330f5-0e01-4452-8eeb-d35c8e1e68ee.jpg"
                alt="Довольный клиент"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Профессиональный подход к делу. Ответил на все вопросы, подсказал лучшее решение. Буду обращаться еще!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">
              Мы работаем для вашего успеха
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="Zap" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрая работа</h3>
              <p className="text-muted-foreground">
                Размещаем отзывы в течение 24 часов после оплаты
              </p>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Безопасность</h3>
              <p className="text-muted-foreground">
                Используем только проверенные аккаунты с историей
              </p>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество</h3>
              <p className="text-muted-foreground">
                Уникальные тексты отзывов, написанные людьми
              </p>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Опыт</h3>
              <p className="text-muted-foreground">
                Более 3 лет успешной работы и тысячи довольных клиентов
              </p>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="TrendingUp" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Результат</h3>
              <p className="text-muted-foreground">
                Повышение рейтинга и увеличение количества заказов
              </p>
            </Card>

            <Card className="p-6 hover:scale-105 transition-transform duration-300 animate-fade-in border-2 border-border hover:border-primary/50">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Icon name="HeadphonesIcon" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Поддержка</h3>
              <p className="text-muted-foreground">
                Всегда на связи в Telegram и WhatsApp для ваших вопросов
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами удобным способом и получите первые отзывы уже завтра
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={openTelegram}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-7 animate-pulse-glow"
              >
                <Icon name="Send" size={24} className="mr-3" />
                Написать в Telegram
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={openWhatsApp}
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-10 py-7"
              >
                <Icon name="MessageCircle" size={24} className="mr-3" />
                Написать в WhatsApp
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span>Онлайн 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MessageSquare" size={18} className="text-primary" />
                <span>Быстрые ответы</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={18} className="text-primary" />
                <span>Конфиденциальность</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 StarProfi. Все права защищены.</p>
          <p className="mt-2">Качественные отзывы для вашего успеха на Profi.ru</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
