## Football Legends

#### React Bootstrap

- https://medium.com/@anthonyharold67/react-bootstrap-react-i%CC%87le-g%C3%BC%C3%A7lendirilmi%C5%9F-bootstrap-a54dc5394145





## Football Legends

### [filter işlemi](./src/components/legend/LegendContainer.jsx)

- İnputa girilen veriye göre ekranda gösterilen datanın değişmesi lazım. Datayı ekrana nerede basıyoruz ? CardContainer içerisinde. O zaman inputuda card container içerisinde oluşturabiliriz.

- Burada biizm örneğimizde filtreleme işlemi oyuncuların name bilgisine göre yapılıyor. Peki name e göre filtrelerken nasıl bir yol izleyeceğiz ?
- String metotlarını hatırlayalım. Bu metotlardan hangisi içerisine verdiğimiz karakterleri içerip içermediğini kontrol ediyordu ? includes() metodu. Bu metot içerisine yazılan veriyi sorguladığımız string içeriyorsa true döner içermiyorsa false döner. 

```javascript
  "araba".includes("a") => true
  "araba".includes("ar") => true
  "araba".includes("ara") => true
  "araba".includes("m") => false
```
- Biz de burada filtreleme işleminde sorgulayacağımız string name bilgisi olacak. name bilgisi inputta yazan veriyi içeriyorsa datayı ona göre filtrelemiş olacak. Ve bu kullanıcı her inputta değişiklik yaptığında olması gerekiyor. 
- Bu nedenle önce bize ne lazım inputtan gelen veri. inputtan veriyi anlık olarak nasıl yakalıyoruz ? onChange eventiyle anlık olarak değişiklikleri yakalayabiliyoruz. onChange de veriyi yakaladık ama her değişikliği algılayıp bunu ekrana yansıtacak bir şey lazım bize ama o ne ? Tabiki useState hooku. useState hooku reactta durum değişikliklerini takip eden ve o değişikliğe göre componenti yeniden render ettiren bir hook. 
```jsx
  const [search,setSearch] = useState("");

  ...

  return (
    <>
      <input type="search" onChange={(e)=> setSearch(e.target.value)}>
    </input>
  )
```
- O zaman biz de inputtan gelen veriyi state e aktarırsak her değişklikte componenti render ettirmiş oluruz. Component her render olduğunda da filteredData yeniden oluşturulacağı için yani yeniden tanımlanacağı için kolaylıkla ekrandaki değişikliği sağlamış oluyoruz.

```jsx
const CardContainer = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(player =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );
   return (
    <>
      <Form.Control
        type="search"
        placeholder="Search player..."
        className="w-50 m-auto"
        onChange={e => setSearch(e.target.value)}
      />
      <Container className="card-container my-4 p-3 rounded-4">
        <Row sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {filteredData.map((player, i) => {
            return (
              <Col key={i}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
```


### [Card Gösterilen Veriyi Değiştirme](./src/components/legend/LegendCard.jsx)

- Bizden beklenen her carda tıklandığında o cardda değişim olması. Bizim örneğimizde resim yerine statistic bilgilerinin cardda gösterilmesi veya tam tersi resmin cardda gösterilmesi. 
- Ve her tıklanıldığında da ilgili cardın yeniden render olması gerekiyor. Bunu da react da yapabilmek için useState hookuna ihtiyacımız var. Ve sadece tıklanan cardın değişmesi ve tekrar o carda tıklanılana kadar değişimin sabit kalması gerektiği için her cardın kendine ait bir durumu olması lazım. 
- Her cardın durumu olması için de datayı maplediğimizde her veri için bir component return edersek her carda ait stateleri o component içerisinde oluşturabiliriz. Çünkü veri sayısı ne kadarsa aslında o kadar component oluşturmuş olacağımız için o component içerisinde oluşturduğumuz stateler fonksiyonlarda her veri için ayrı ayrı tanımlanmış olacak. Böylelikle her carda ait state oluşturabilmiş olacağız. Aksi takdirde veriyi datayı maplediğimiz yerde ekrana bassak elimizde tek bir state olacağı için hangi carda tıklarsak tıklayalım hepsi değişecektir.

- Bu nedenle datayı üst componentte mapleyip returnde her veri için alt component olan PlayerCard componentini çağırığ verileri props yoluyla ona göndereceğiz.

```jsx
const CardContainer = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(player =>
    player.name.toLowerCase().includes(search.trim().toLowerCase())
  );
   return (
    <>
      <Form.Control
        type="search"
        placeholder="Search player..."
        className="w-50 m-auto"
        onChange={e => setSearch(e.target.value)}
      />
      <Container className="card-container my-4 p-3 rounded-4">
        <Row sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {filteredData.map((player, i) => {
            return (
              <Col key={i}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
```

- Şimdi sıra her card için durumları oluşturmaya geldi. Burada nasıl bir durum oluşturacağız ? Carda tıklanıldığında yazılar gelcek tekrar tıklanıldığında resimler gelecek. Bu değişikliği takip etmek için useState e ihtiyacımız var. Ve değşikliği yapabilmemiz için onClick eventına ihtiyacımız var. 

```jsx
  const [showImg,setShowImg] = useState(true)
```

- State değiştikçe ilgili component render edileceği için bu state e göre bir mekanizma oluşturabiliriz. Bu mekanizmanın adı reactta **conditional rendering** . Bunu da JSX içerisinde [ternary operator](https://react.dev/learn/conditional-rendering#conditional-ternary-operator--) ile yapabiliriz. Yani showImg statei true ise resim gösterilecek eğer false ise name,statisticler,year gösterilecek. Peki değişim nasıl olacak ? Yani click olduğunda ne olması gerekiyor. Ve click eventını nereye tanımlayacağız? Resme tıklandığında showImage false olacak, yazılara tıklandığında showImage true olacak. Peki ayrı ayrı onClick tanımlamak yerine bunu tek bir yerden tanımlayıp hem resim olduğunda hem yazı olduğunda aynı click çalışacak ve showImage stateini tam tersine çevirebilir miyiz ? TAbi ki çevirebiliriz. onClick eventına kapsayıcıya verip ve onClick içerisinde de `not !` operatörünün nimetlerinden yararlanırsak tek hamlede bu işlemi bitirebiliriz. Yani `setShowImage(!showImage)` dediğimizde true ise false yapacak, false ise true yapacak.

```jsx
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
const PlayerCard = ({ name, img, statistics,official_career }) => {
  const [showImage, setShowImage] = useState(true);
  const handleToggle = () => setShowImage(!showImage);
  return (
    <Card
        onClick={() => setShowImage(!showImage)}
        className="player-card"
        title={name}
        alt={name + "image"}
        role="button"
      >
        {showImage ? (
          <Card.Img
            variant="top"
            src={img}
            // onClick={() => setShowImage(false)}
          />
        ) : (
          <>
          <Card.Header >
          <Card.Title className="my-2">{name}</Card.Title>
           </Card.Header>
            <ul
              className="m-auto "
              //   onClick={() => setShowImage(true)}
            >
              {statistics.map((item, i) => (
                <li className="list-unstyled h5 text-start" key={i}>
                  {" "}
                  ⚽ {item}
                </li>
              ))}
            </ul>
            <span className="fw-bold my-2">
              Career Years : {official_career}
            </span>
            
          </>
        )}
        
      </Card>
  );
};

export default PlayerCard;
```