<h1 align="center">TRANSITION</h1>
CSS Transition Özelliği, bir elemanın iki state’i arasında transition, yani geçiş yapmanızı sağlar. Genellikle hover gibi psuedo sınıfları ile kullanılır.

<p color = 'red'>transition: property name | duration | easing function | delay;
</p>
transition-property: transition’ı uygulamak istediğimiz bir veya birden fazla CSS property’sini belirtiriz.
transition-duration: Transition işleminin ne kadar sürede gerçekleşeceğini belirtiriz. Tanımladığınız her bir transition-property için dilerseniz tek bir duration belirtebilirsiniz. Yada her bir property için ayrı ayrı transition süresi belirtebilirsiniz.
transition-timing-function: transition’ın süresince hangi hızda ve hangi aşamada olacağını belirtiriz.
ease: Transition-timing-functionın default değeridir. Transition yavaş başlar ortalarına doğru hızlanır ve yavaşlayarak sona erer.
ease-in: Yavaş başlar ve transition sonuna kadar hızlanarak devam eder.
ease-out: Transition hızlı başlar ve transition sonuna doğru yavaşlar.
linear: Transition sabit hızda başlar. Öyle devam eder ve aynı hızda sona erer.
cubic-bezier: cubic-bezier ile kendi transition efektinizi belirleyebilirsiniz.
transition-delay: Bir geçişin başlamadan önce ne kadar süre bekletileceğini belirleyebilirsiniz.
TRANSFORM
CSS Transform Özelliği, Türkçesiyle Dönüştürme özelliği sayesinde div bloklarına veya görsellere çeşitli görsel efektler uygulayabiliriz.

rotateX() işlevi: bir öğeyi deforme etmeden apsis (yatay eksen - x ekseni) etrafında döndüren bir dönüşümü tanımlar.Nesnenin kaç derece döneceğini deg türünde belirtmeliyiz.90 ve 270 deerelecelerde yazılar tam dik olduklarından ve 3 boyutlu olarak bakamadığımız için gözükmezler.
rotateY() işlevi: bir öğeyi ordinat (dikey eksen - y ekseni) etrafında deforme etmeden döndüren bir dönüşümü tanımlar.Nesnenin kaç derece döneceğini deg türünde belirtmeliyiz.
rotate() işlevi: adından da anlaşılacağı üzere nesneyi döndürmek için kullanılan bir parametre türüdür. Nesnenin kaç derece döneceğini deg türünde belirtmeliyiz.
skew() işlevi: 2B düzlemde bir öğeyi eğen bir dönüşümü tanımlar.skew() işlevi, her yönde uygulanacak eğriltme miktarını temsil eden bir veya iki parametre ile belirtilir. Yalnızca bir parametre verilirse x ekseni için kullanılır ve y ekseninde eğrilik olmaz. Parametre olarak vereceğimiz değer angel(açı) formatında olmalıdır.Yamultma işlemini yaparken derece ile ne miktarda yamulacağını belirtmekteyiz.
scaleX() işlevi: bir HTML elementinin yatay (x) eksende ölçeklendirilmesini sağlar. Bu özellik, elementin genişliğini veya daraltmasını kontrol etmek için kullanılır.Bu fonksiyona verilen parametre, ölçeklendirme değerini belirtir. Ölçeklendirme değeri 1 ise elementin orijinal genişliği korunur. Değer 1'den büyük ise element genişletilir, değer 1'den küçük ise daraltılır. Negatif değerlerde verilebilir. Örneğin -1 değeri verirsek x ekseninde simetrik olarak yansıtır.
scaleY() işlevi:bir HTML elementinin dikey (y) eksende ölçeklendirilmesini sağlar. Bu özellik, elementin yüksekliğini veya daraltmasını kontrol etmek için kullanılır. Verilen ölçeklendirme değerleri scaleX ile aynıdır.
scale() işlevi:bir HTML elementini hem yatay (x) hem de dikey (y) eksende aynı oranda ölçeklendirmek için kullanılır.Tek parametre verirske eşit oranda ölçeklendirir.İlk parametre x ekseni,ikinci parametre y eksenini temsil eder.
translateX() işlevi: bir HTML elementini yalnızca yatay (x) eksende belirli bir mesafede hareket ettirmek için kullanılır. Bu özellik, elementin yatay konumunu değiştirmek ve yatay yönde hareket etmek için kullanılır. Fonksiyona verilen parametreler, elementin yatay hareket miktarını belirtir. Parametreler px (piksel), % (yüzde) veya em (ems) gibi birimlerle ifade edilebilir. Negatif değerler alabilir.
translateY() işlevi: bir HTML elementini yalnızca dikey (y) eksende belirli bir mesafede hareket ettirmek için kullanılır. Bu özellik, elementin dikey konumunu değiştirmek ve dikey yönde hareket etmek için kullanılır. Fonksiyona verilen parametreler, elementin dikey hareket miktarını belirtir. Parametreler px (piksel), % (yüzde) veya em (ems) gibi birimlerle ifade edilebilir. Negatif değerler alabilir.
translate() işlevi: bir HTML elementini belirli bir mesafede yatay (x) ve dikey (y) eksende hareket ettirmek için kullanılır. Bu özellik, elementin konumunu değiştirmek ve hareket etmek için kullanılır.. Fonksiyona verilen parametreler, elementin yatay ve dikey hareket miktarını belirtir. Parametreler px (piksel), % (yüzde) veya em (ems) gibi birimlerle ifade edilebilir. Negatif değerler alabilir. İlk parametre x eksenini, ikinci parametre de y eksenini temsil eder.
ANIMATION
CSS animasyonları ile HTML öğelerini animasyonu hale getirerek farklı ve eğlenceli senaryolar oluşturabilirsiniz.

CSS animation ile bir HTML öğesinin başlangıç stilinden bitiş stiline kadar olan süreçte efektli bir şekilde geçiş yapmasıdır. @keyframes kuralı ile animasyon sürecini yapılandırmamız gerekmektedir.

animation: @keyframes name | duration | easing-function | delay | iteration-count | direction | fill-mode | play-state
animation-name: Kullanmak istediğimiz animasyonun ismi. Yukarıda @keyframes ornek-animasyon olarak tanımladığımız ornek-animasyon değerini buraya yazıyoruz.
animation-duration: CSS animasyonun gerçekleşme süresini belirtir. saniye birimi s ve mili-saniye birimi ms 1s = 1000ms kullanılabilir.
animation-timing-function: Bu özellik animasyonun zamanlamasını daha esnek hale getirerek yapılandırır. İvmelenmeler ekleyerek animasyonda geçişleri daha estetik bir hale getirmek için bir çok web geliştirici tarafından kullanılmaktadır.
ease:cubic-bezier(0.25, 0.1, 0.25, 1.0) değerine eşittir. ease-in değerinde animasyon ortaya doğru hızlanır ve sonrasında yavaşlayarak durur.
ease-in:cubic-bezier(0.42, 0, 1.0, 1.0) değerine eşittir. ease-in değerinde animasyon yavaş bir şekilde başlar ve tamamlanana kadar hızlanır.
ease-out:cubic-bezier(0, 0, 0.58, 1.0) değerine eşittir. Animasyon hızlı bir şekilde başlar ve yavaşlayarak sonlanır.
ease-in-out:cubic-bezier(0.42, 0, 0.58, 1.0) değerine eşittir. Animasyon yavşça başlar ve hızlanarak geçiş yapar, sonra tekrar yavaşlayarak animasyonu tamamlar.
linear:cubic-bezier(0.0, 0.0, 1.0, 1.0) değerine eşittir. Animasyonun başından sonuna kadar animasyon hızı eşit bir şekilde devam eder.
steps:Adımlı olarak animasyonu çalıştırır, animasyon akmaz belirlenen sayıya göre bölerek çalışır.
animation-iteration-count: Animasyonun tekrar sayısı; kaç kez tekrar edeceğini belirtebilirsiniz. 3 olarak belirttiğimizde animasyon 3 defa çalışacaktır. Yada infinite diyerek sonsuz çalışmasını isteyebiliriz.
animation-direction: Animasyonun yönü. Varsayılan olarak animasyon, baştan sonra doğru çalışacaktır. Animasyonun yönünü, yön değiştirip değiştirmeyeceğini, başlangıç noktasında kendini tekrar edip etmeyeceği animation-direction ile belirlenir.
normal: Animasyon normal sürecinde oynar.
reverse Animasyon geriden oynatılmaya başlanır.Son adımdan ilk adıma gelir.
alternate: Animasyon ilk kareden başlar, son kareye geldiğinde bu sefer tam tersine son kareden başlar ve tekrar ilk karede biter.
alternate-reverse: Animasyon son kareden başlar, ilk kareye geldiğinde bu sefer tam tersine ilk kareden başlar ve son karede biter.
animation-delay: özelliği animasyonun nekadar gecikmeli olacak başlayacağını belirtir. saniye birimi s ve mili-saniye birimi ms. Örneğin, 2s olarak belirttiğimizde animasyon 2 saniye gecikmeli olarak başlayacaktır.
animation-fill-mode: CSS animasyonları animasyon başlamadan önce ve animasyon tamamlandıktan sonra normal şartlar altında animasyonun eklendiği HTML öğesini etkilemez. Normal şartlarda animasyondan tamamlandıktan sonra HTML öğesi animasyondan önceki stiline döner. İşte bu durumda bazı istenmeyen sert geçişler yaşanabilir. Örnek: Eğer animasyon bittiğinde arka plan renginiz bir anda kırmızdan yeşile sert bir geçiş yapıyor ise bu tarz durumlardan kurtulmak için animation-fill-mode özelliğini kullanmanız gerekecektir.
none:Animasyon yürütülmediği takdirde öğeye her hangi bir stil uygulanmaz. Öğe animasyon tamamlandıktan sonra eski stiline geri döner.
forwards:Animasyon uygulanan HTML öğesi animasyonun son kademesindeki stillere sahip olarak animasyonu bitirecektir. Animasyon tamamlandıktan sonra orjinal stilinde göstermez animasyonun son karesindeki stiller onu değiştirir.
backwards:Animasyondaki ilk sahnenin stillerine sahip olacaktır. Animasyon başladığı noktada bitecektir. Ancak bu değerler animation-direction değerlerine bağlı değişir.
both:hem başlangıç hem de son karede animasyonun stillerini takip edecek ve animasyonun özelliklerini bu sayede genişletmiş olursunuz.
keyframes: animasyonun kademeli olarak oluşturlmasını sağlayan bir kuraldır. Tüm animasyon sahnelerini @kayframes animationName içerisinde tanımlıyoruz.
  @keyframes animationName {
              from{/*başlangıç noktası*/
                  *istenilen özellikler*
              }
              to {/*bitiş noktası*/
                  *istenilen özellikler*
              }
          }
          
  @keyframes animationName {
              0%{/*başlangıç noktası*/
                  *istenilen özellikler*
              }   
              ...
              100% {/*bitiş noktası*/
                  *istenilen özellikler*
              }
          }
          