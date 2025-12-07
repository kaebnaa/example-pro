import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { CodeBlock } from "@/components/code-block"
import { Quiz } from "@/components/quiz"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Lightbulb, Code, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - In production, this would come from an API
const subjectsData: Record<string, any> = {
  html: {
    slug: "html",
    title: "HTML",
    icon: "🌐",
    description: "HyperText Markup Language - Вэб хуудасны үндэс суурь",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `HTML буюу HyperText Markup Language нь вэб хуудасны бүтцийг тодорхойлоход хэрэглэгддэг markup хэл юм. HTML нь вэб хөгжүүлэлтийн үндэс бөгөөд бүх вэб хуудас HTML-ээр бичигддэг.

HTML элементүүд нь вэб хуудсанд текст, зураг, холбоос, хүснэгт болон бусад контентыг байршуулах боломжийг олгодог. Хөтөч нь HTML кодыг уншиж, хэрэглэгчид харагдах хуудсыг үүсгэдэг.

HTML-ийн анхны хувилбар нь 1993 онд гарсан бөгөөд одоо HTML5 хувилбар хамгийн сүүлийн стандарт болоод байна. HTML5 нь видео, аудио, график зэрэг орчин үеийн вэб функцуудыг дэмждэг.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**HTML суралцах шалтгаанууд:**

• Вэб хөгжүүлэлтийн үндэс суурь юм - Бүх вэб хуудас HTML ашигладаг
• Хамгийн түгээмэл ашигладаг технологи - Интернет дээрх бүх сайт
• Бусад вэб технологиудын (CSS, JavaScript) үндэс
• Карьерын өргөн боломж нээдэг - Вэб хөгжүүлэгч, Front-end developer
• Өөрийн вэбсайт, блог үүсгэх боломж
• Сурахад хялбар - Програмчлалын ур чадваргүй хүмүүст тохиромжтой
• Бусад технологиудтай хялбар нийцдэг`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**HTML Элементүүд:**
HTML элемент нь opening tag, контент, closing tag-аас бүрдэнэ.
Жишээ нь: <p>Энэ бол параграф</p>

**HTML Таг:**
HTML таг нь angle brackets (<>) хоорондох кодын хэсэг юм. Ихэнх тагууд хос (opening, closing) байдаг.

**HTML Атрибутууд:**
Атрибутууд нь элементүүдийн нэмэлт мэдээллийг агуулдаг:
- id: Элементийн өвөрмөц таних тэмдэг
- class: Элементийн ангилал (стайл хийхэд ашиглагдана)
- src: Зураг, скриптийн эх сурвалж
- href: Холбоосын хаяг
- alt: Зургийн тайлбар текст

**Семантик HTML:**
Семантик тагууд нь контентын утга санааг илэрхийлдэг:
- <header>: Хуудасны толгой хэсэг
- <nav>: Навигацийн цэс
- <main>: Үндсэн контент
- <article>: Бие даасан контент
- <section>: Контентын бүлэг
- <aside>: Хажуугийн контент
- <footer>: Хуудасны доод хэсэг

**Блок болон Inline элементүүд:**
- Блок элементүүд: Шинэ мөрөөс эхэлж бүтэн өргөн эзэлдэг (div, p, h1)
- Inline элементүүд: Контентын урсгалд байрладаг (span, a, img)`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `HTML-ийг цаашид гүнзгий судлахын тулд дараах эх сурвалжуудыг ашиглаарай:

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/)
- [W3C HTML Specification](https://www.w3.org/TR/html52/)

Эдгээр баримтжуулалтаас та:
- Form элементүүд ба валидаци
- Accessibility ба ARIA атрибутууд
- Media элементүүд (audio, video, track)
- SEO-д ээлтэй семантик бүтэц
зэргийг дэлгэрэнгүй суралцаж болно.`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `<!DOCTYPE html>
<html lang="mn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="HTML-ийн дэлгэрэнгүй жишээ">
    <title>Миний Анхны HTML Хуудас</title>
</head>
<body>
    <header>
        <h1>Сайн уу! HTML-д тавтай морил!</h1>
        <nav>
            <ul>
                <li><a href="#home">Нүүр</a></li>
                <li><a href="#about">Бидний тухай</a></li>
                <li><a href="#contact">Холбоо барих</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <article>
                <h2>HTML гэж юу вэ?</h2>
                <p>HTML нь вэб хуудасны бүтцийг тодорхойлдог markup хэл юм.</p>
                <img src="/images/html-logo.png" alt="HTML лого" width="200">
            </article>
        </section>

        <section id="about">
            <h2>Бидний тухай</h2>
            <p>Бид <strong>Amjilt Cyber School</strong> сургалтын төв бөгөөд 
            <em>программчлал</em> сургадаг.</p>
            
            <h3>Сургалтууд:</h3>
            <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Холбоо барих</h2>
            <form action="/submit" method="POST">
                <label for="name">Нэр:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">И-мэйл:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Мессеж:</label>
                <textarea id="message" name="message" rows="4"></textarea>
                
                <button type="submit">Илгээх</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Amjilt Cyber School. Бүх эрх хуулиар хамгаалагдсан.</p>
    </footer>
</body>
</html>`,
      language: "html",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Өөрийн хувийн мэдээлэл агуулсан HTML хуудас үүсгэх (нэр, нас, хобби)",
          "Heading (h1-h6), paragraph, list (ul, ol) ашиглах",
          "Зураг болон холбоос нэмэх (img, a тагууд)",
          "HTML хүснэгт (table) ашиглан хичээлийн хуваарь үүсгэх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Семантик тагууд ашиглан блог хуудас үүсгэх (header, nav, main, article, footer)",
          "HTML form элементүүд ашиглан бүртгэлийн форм үүсгэх",
          "Хүснэгт ашиглан өгөгдөл харуулах (colspan, rowspan ашиглах)",
          "Audio болон Video тагууд ашиглан мультимедиа контент нэмэх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Бүрэн functional хувийн portfolio вэбсайт үүсгэх",
          "HTML5 шинэ элементүүдийг ашиглах (canvas, svg, details)",
          "Accessible (хүртээмжтэй) вэб хуудас үүсгэх (ARIA атрибутууд)",
        ],
      },
    ],
    quiz: [
      {
        question: "HTML нь юу гэсэн утгатай вэ?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperText Modern Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: 0,
        explanation:
          "HTML нь HyperText Markup Language гэсэн утгатай бөгөөд вэб хуудасны бүтцийг тодорхойлдог markup хэл юм.",
      },
      {
        question: "HTML документ ямар тагаар эхэлдэг вэ?",
        options: ["<html>", "<body>", "<!DOCTYPE html>", "<head>"],
        correctAnswer: 2,
        explanation: "HTML5 документ заавал <!DOCTYPE html> зарлалаар эхлэх ёстой.",
      },
      {
        question: "Хамгийн том heading таг аль нь вэ?",
        options: ["<h6>", "<h1>", "<heading>", "<h0>"],
        correctAnswer: 1,
        explanation: "<h1> нь хамгийн том heading таг бөгөөд хуудасны үндсэн гарчигт ашигладаг.",
      },
      {
        question: "Зураг оруулахад ямар таг хэрэглэдэг вэ?",
        options: ["<image>", "<img>", "<picture>", "<photo>"],
        correctAnswer: 1,
        explanation: "<img> таг нь HTML-д зураг оруулахад хэрэглэгддэг стандарт таг юм.",
      },
      {
        question: "Семантик таг биш нь аль нь вэ?",
        options: ["<header>", "<nav>", "<div>", "<footer>"],
        correctAnswer: 2,
        explanation:
          "<div> нь семантик биш container таг бөгөөд ямар нэг утга санааг илэрхийлдэггүй. Харин header, nav, footer нь семантик тагууд.",
      },
    ],
  },
  css: {
    slug: "css",
    title: "CSS",
    icon: "🎨",
    description: "Cascading Style Sheets - Вэб хуудасны загвар",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `CSS буюу Cascading Style Sheets нь HTML элементүүдийн харагдах байдлыг тодорхойлдог stylesheet хэл юм. CSS нь өнгө, font, зай, зохион байгуулалт зэрэг харагдах байдлын бүх шинж чанарыг удирддаг.

CSS-ийн тусламжтайгаар HTML-ийн бүтэцтэй хуудсыг үзэсгэлэнтэй болгож чаддаг. Орчин үеийн вэб дизайныг CSS-гүйгээр төсөөлөх боломжгүй.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**CSS суралцах шалтгаанууд:**

• Вэб хуудсыг үзэсгэлэнтэй болгодог
• Хариуцлагатай дизайн (responsive design) үүсгэдэг
• Код засвар үйлчилгээг хялбар болгодог
• Олон хуудсанд нэг загварыг ашиглах боломжтой
• Хөдөлгөөн ба animation нэмэх боломжтой`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**CSS Селектор:**
HTML элементүүдийг сонгох арга (tag, class, id).

**CSS Шинж чанарууд:**
Өнгө, хэмжээ, зай, font зэрэг харагдах байдлын тохиргоо.

**Box Model:**
Margin, border, padding, content-ийн загвар.

**Flexbox ба Grid:**
Орчин үеийн layout системүүд.

**Media Queries:**
Янз бүрийн дэлгэцийн хэмжээнд тохирсон загвар.`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `CSS-ийг илүү гүнзгий түвшинд судлахдаа дараах баримтжуулалт, заавруудыг ашиглаарай:

- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3C CSS Specifications](https://www.w3.org/Style/CSS/Overview.en.html)
- [web.dev - Responsive Design](https://web.dev/learn/design/)

Эдгээрээс дараах дэвшилтэт сэдвүүдийг судалж болно:
- CSS Grid, Flexbox-ийн нарийвчилсан боломжууд
- Responsive typography ба layout
- Transitions, transforms, animations
- CSS variables (custom properties) ба dark mode`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `/* Үндсэн CSS жишээ */

/* Tag selector */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

/* Class selector */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* ID selector */
#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    text-align: center;
}

/* Flexbox ашиглах */
.card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 300px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

/* Media query */
@media (max-width: 768px) {
    .card {
        min-width: 100%;
    }
}`,
      language: "css",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "HTML хуудсандаа өнгө, font өөрчлөх",
          "Class ба ID selector ашиглах",
          "Box model-ийн margin, padding ашиглах",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Flexbox ашиглан card layout үүсгэх",
          "Hover эффект нэмэх",
          "Responsive design үүсгэх (mobile, tablet, desktop)",
        ],
      },
    ],
    quiz: [
      {
        question: "CSS нь юу гэсэн утгатай вэ?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        correctAnswer: 0,
        explanation: "CSS нь Cascading Style Sheets гэсэн утгатай бөгөөд HTML элементүүдийн загварыг тодорхойлдог.",
      },
      {
        question: "Class selector хэрхэн бичигддэг вэ?",
        options: ["#classname", ".classname", "*classname", "@classname"],
        correctAnswer: 1,
        explanation: "CSS-д class selector нь цэг (.) ашиглан бичигддэг. Жишээ нь: .container",
      },
      {
        question: "Flexbox-ийг идэвхжүүлэх шинж чанар аль нь вэ?",
        options: ["display: block", "display: flex", "layout: flex", "flex: true"],
        correctAnswer: 1,
        explanation: "display: flex; гэж тохируулснаар элемент flex container болж flexbox layout идэвхждэг.",
      },
    ],
  },
  javascript: {
    slug: "javascript",
    title: "JavaScript",
    icon: "⚡",
    description: "Интерактив вэб програмчлалын хэл",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `JavaScript нь вэбийн програмчлалын хэл бөгөөд вэб хуудсыг интерактив болгох боломжийг олгодог. Энэ нь HTML, CSS-тай хамт вэб хөгжүүлэлтийн гурван үндсэн технологийн нэг юм.

JavaScript-ийн тусламжтайгаар та товч дарах, form илгээх, animation үүсгэх, серверт өгөгдөл илгээх зэрэг бүх интерактив үйлдлийг хийж чаддаг. Одоогийн вэб апликейшнууд бараг бүгд JavaScript ашигладаг.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**JavaScript суралцах шалтгаанууд:**

• Хамгийн түгээмэл програмчлалын хэл
• Front-end болон back-end хөгжүүлэлтэд ашигладаг
• Асар олон framework, library байдаг (React, Vue, Node.js)
• Интерактив вэб апликейшн үүсгэдэг
• Өндөр цалинтай мэргэжил`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Хувьсагч (Variables):**
Өгөгдөл хадгалах (let, const, var).

**Өгөгдлийн төрөл:**
String, Number, Boolean, Array, Object гэх мэт.

**Функц (Functions):**
Дахин ашиглагдах код блок.

**DOM Manipulation:**
HTML элементүүдтэй ажиллах.

**Events:**
Хэрэглэгчийн үйлдэлд хариу үйлдэл үзүүлэх.

**Асинхрон програмчлал:**
Promises, async/await ашиглан өгөгдөл татах.`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `JavaScript-ийг илүү сайн эзэмшихийн тулд дараах эх сурвалжуудыг ашиглаарай:

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
- [JavaScript.info сургалт](https://javascript.info/)

Судлах нэмэлт сэдвүүд:
- Modern ES6+ боломжууд (arrow functions, destructuring, modules)
- Error handling (try/catch), async/await, fetch API
- Browser APIs (localStorage, History API, Canvas)
- Functional programming ойлголтууд (map, filter, reduce)`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Хувьсагч зарлах
const name = 'Амжилт';
let age = 16;

// Функц үүсгэх
function greet(person) {
    return \`Сайн уу, \${person}!\`;
}

console.log(greet(name)); // Сайн уу, Амжилт!

// Array ашиглах
const subjects = ['HTML', 'CSS', 'JavaScript', 'Python'];

subjects.forEach(subject => {
    console.log(\`Би \${subject} сурч байна\`);
});

// DOM Manipulation
const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    document.querySelector('#output').textContent = 'Товч дарагдлаа!';
});

// Async/Await ашиглах
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Алдаа гарлаа:', error);
    }
}

// Object ашиглах
const student = {
    name: 'Болд',
    age: 17,
    subjects: ['Math', 'Physics'],
    introduce() {
        console.log(\`Намайг \${this.name} гэдэг, \${this.age} настай\`);
    }
};

student.introduce();`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: ["Хувьсагч зарлаж консол руу хэвлэх", "Энгийн функц бичиж дуудах", "Array үүсгэж forEach ашиглах"],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Товч дарахад текст өөрчлөгдөх програм бичих",
          "Form validation хийх",
          "API-аас өгөгдөл татаж харуулах",
        ],
      },
    ],
    quiz: [
      {
        question: "JavaScript-д хувьсагч зарлахад ямар түлхүүр үг хэрэглэдэг вэ?",
        options: ["var, let, const", "int, float, string", "variable, value", "define, declare"],
        correctAnswer: 0,
        explanation: "JavaScript-д var, let, const гэсэн түлхүүр үгсийг ашиглан хувьсагч зарладаг.",
      },
      {
        question: "DOM нь юу гэсэн утгатай вэ?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Digital Online Method",
          "Direct Output Mechanism",
        ],
        correctAnswer: 0,
        explanation:
          "DOM (Document Object Model) нь HTML документыг JavaScript-ээр удирдах боломж олгодог интерфейс юм.",
      },
      {
        question: "Event listener нэмэхэд ямар функц хэрэглэдэг вэ?",
        options: ["attachEvent()", "addEventListener()", "addListener()", "onEvent()"],
        correctAnswer: 1,
        explanation: "addEventListener() функц нь элементэд event listener нэмэхэд хэрэглэгддэг стандарт арга юм.",
      },
    ],
  },
  nodejs: {
    slug: "nodejs",
    title: "Node.js",
    icon: "💚",
    description: "JavaScript серверийн орчин",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Node.js нь Chrome V8 JavaScript хөдөлгүүр дээр суурилсан серверийн JavaScript runtime орчин юм. Node.js-ийг ашигласнаар та JavaScript хэлээр серверийн програм бичиж болно.

Node.js нь 2009 онд Ryan Dahl үүсгэсэн бөгөөд одоо хамгийн түгээмэл ашиглагддаг серверийн технологиудын нэг болсон. Netflix, PayPal, LinkedIn зэрэг том компаниуд Node.js ашигладаг.

Node.js-ийн гол давуу тал нь асинхрон, event-driven архитектур бөгөөд олон хэрэглэгчийг хүлээн авч чаддаг high-performance апликейшн үүсгэх боломжтой.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Node.js суралцах шалтгаанууд:**

• Full-stack JavaScript хөгжүүлэгч болох - Front-end болон back-end аль алинд JavaScript
• Хурдан ба scalable апликейшн - Олон concurrent холболтыг боловсруулдаг
• NPM package ecosystem - 1 сая гаруй package ашиглах боломжтой
• Real-time апликейшн үүсгэх - Chat, gaming, collaboration tool
• Microservices архитектур үүсгэх
• Өндөр эрэлттэй ур чадвар - Олон компани Node.js хөгжүүлэгч хайж байдаг
• API болон REST services үүсгэх`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Event-Driven Architecture:**
Node.js нь event emitter pattern ашигладаг. Event гарвал тухайн listener function ажиллана.

**Non-Blocking I/O:**
Node.js нь асинхрон I/O ажиллагаа гүйцэтгэдэг. Өгөгдөл уншихыг хүлээхгүйгээр дараагийн код ажиллана.

**Single-Threaded:**
Node.js нь нэг thread дээр ажилладаг боловч event loop-ийн тусламжтайгаар олон ажлыг зэрэг гүйцэтгэж чаддаг.

**Modules:**
Node.js дотор код бичихдээ modules ашиглан ангилдаг. CommonJS (require) болон ES Modules (import) хэрэглэдэг.

**NPM (Node Package Manager):**
Node.js-ийн package manager бөгөөд гаднаас бэлэн library татаж ашиглах боломжтой.

**Buffer:**
Binary өгөгдөлтэй ажиллахад ашиглагддаг Node.js-ийн тусгай класс.

**Streams:**
Том өгөгдөлтэй chunk-аар ажиллах механизм (Readable, Writable, Duplex, Transform).`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `Node.js-ийг мэргэжлийн түвшинд ашиглахын тулд дараах баримтжуулалтыг тогтмол ашиглаарай:

- [Node.js Official Docs](https://nodejs.org/en/docs)
- [Node.js API Reference](https://nodejs.org/api/)
- [npm Registry](https://www.npmjs.com/)

Нэмэлтээр судлах сэдвүүд:
- Event loop ба call stack-ийн нарийвчилсан ажиллагаа
- Streams ба Buffer-уудыг ашиглан их хэмжээний өгөгдөл боловсруулах
- Cluster, worker threads ашиглан гүйцэтгэл сайжруулах
- Config, environment variables, logging ба monitoring`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Энгийн HTTP сервер үүсгэх
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Сайн уу! Node.js сервер!</h1>');
});

server.listen(3000, () => {
    console.log('Сервер 3000 порт дээр ажиллаж байна');
});

// File system ашиглах
const fs = require('fs');

// Файл унших (асинхрон)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Алдаа:', err);
        return;
    }
    console.log('Файлын агуулга:', data);
});

// Файл бичих
fs.writeFile('output.txt', 'Сайн уу Node.js!', (err) => {
    if (err) throw err;
    console.log('Файл амжилттай хадгалагдлаа');
});

// Event Emitter ашиглах
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (message) => {
    console.log('Event-д:', message);
});

myEmitter.emit('event', 'Сайн уу!');

// Modules үүсгэж ашиглах
// math.js файл
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Тэгд хуваах боломжгүй'
};

// app.js файл
const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.multiply(4, 7)); // 28

// Асинхрон Promise ашиглах
const readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

// Async/Await ашиглах
async function processFile() {
    try {
        const data = await readFilePromise('data.txt');
        console.log('Өгөгдөл:', data);
    } catch (error) {
        console.error('Алдаа гарлаа:', error);
    }
}

processFile();`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Энгийн HTTP сервер үүсгэж 'Hello World' гэсэн мессеж харуулах",
          "Файл унших, бичих програм бичих",
          "Өөрийн модуль үүсгэж эксport/import хийх",
          "Console-д өнгөтэй текст хэвлэх програм (chalk package ашиглах)",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "JSON файлаас өгөгдөл уншиж боловсруулах програм",
          "Event Emitter ашиглан custom event system үүсгэх",
          "CLI tool үүсгэх (command line arguments ашиглах)",
          "Файлын системтэй ажиллах програм (folder үүсгэх, устгах)",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Stream ашиглан том файл уншиж боловсруулах",
          "Child process ашиглан өөр програм ажиллуулах",
          "Cluster module ашиглан multi-core ашиглах програм",
          "RESTful API үүсгэх (Express ашиглахгүйгээр цэвэр Node.js)",
        ],
      },
    ],
    quiz: [
      {
        question: "Node.js нь ямар хөдөлгүүр дээр суурилдаг вэ?",
        options: ["SpiderMonkey", "V8 Engine", "JavaScriptCore", "Chakra"],
        correctAnswer: 1,
        explanation: "Node.js нь Google Chrome-ийн V8 JavaScript хөдөлгүүр дээр суурилдаг.",
      },
      {
        question: "Node.js дээр package суулгахад ямар команд хэрэглэдэг вэ?",
        options: ["npm install", "node install", "package install", "get package"],
        correctAnswer: 0,
        explanation: "npm install (эсвэл npm i) команд нь Node.js-д шаардлагатай package суулгахад хэрэглэгддэг.",
      },
      {
        question: "Node.js-ийн асинхрон кодыг удирдахад юу хэрэглэдэг вэ?",
        options: ["Callbacks, Promises, Async/Await", "Threads", "Loops", "Timers"],
        correctAnswer: 0,
        explanation: "Node.js-д асинхрон код бичихдээ callbacks, promises, болон async/await pattern ашигладаг.",
      },
      {
        question: "Node.js-д файл унших module нь аль нь вэ?",
        options: ["http", "fs", "path", "os"],
        correctAnswer: 1,
        explanation: "fs (File System) module нь Node.js-д файл унших, бичих үйлдлүүдэд хэрэглэгддэг.",
      },
    ],
  },
  expressjs: {
    slug: "expressjs",
    title: "Express.js",
    icon: "🚀",
    description: "Node.js-ийн вэб апликейшн framework",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Express.js нь Node.js-ийн хамгийн алдартай вэб апликейшн framework юм. Express нь вэб сервер болон API үүсгэхэд хэрэгтэй олон хэрэгцээтэй функцуудыг хялбар хэлбэрээр өгдөг.

Express нь minimal ба уян хатан бөгөөд вэб ба mobile апликейшнүүдэд зориулсан robust функцууд олгодог. Express нь Node.js дээр суурилдаг учраас та бүх Node.js-ийн давуу талуудыг ашиглаж чадна.

Express.js-ийг IBM, Accenture, Uber зэрэг томоохон компаниуд production-д ашигладаг. Энэ нь RESTful API, MVC апликейшн, single page апликейшн үүсгэхэд маш тохиромжтой.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Express.js суралцах шалтгаанууд:**

• Хурдан хөгжүүлэлт - Цэвэр Node.js-с хамаагүй хялбар
• Routing систем - URL болон HTTP method-уудыг удирдахад хялбар
• Middleware ecosystem - Олон бэлэн middleware package
• Template engine дэмжлэг - EJS, Pug, Handlebars зэрэг
• RESTful API үүсгэх - Standard REST architecture
• Database integration - MongoDB, PostgreSQL, MySQL зэрэгтэй хялбар холбогдоно
• Том community - Асуудалд хариулт хурдан олдоно
• Production-ready - Олон том компани ашигладаг найдвартай framework`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Routing:**
Express дээр route үүсгэж янз бүрийн URL болон HTTP method-д хариу өгөх.
app.get(), app.post(), app.put(), app.delete() гэх мэт.

**Middleware:**
Request болон Response объектуудтай ажиллах функцууд. Middleware нь дараалалаар ажилладаг.
- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

**Request & Response Objects:**
req нь client-аас ирсэн мэдээлэл агуулна (body, params, query, headers)
res нь client-д буцаах хариу илгээнэ (json, send, render, status)

**Template Engines:**
Динамик HTML хуудас үүсгэхэд ашиглагдана. EJS, Pug, Handlebars.

**Static Files:**
express.static() middleware ашиглан CSS, JS, зураг зэргийг serve хийнэ.

**Error Handling:**
Express дээр error handling middleware ашиглан алдааг барьж боловсруулна.

**Router:**
Express Router ашиглан route-уудыг модуляар хуваана.`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `Express.js-ийг илүү гүнзгий судлахын тулд:

- [Express Official Website](https://expressjs.com/)
- [Express API Reference](https://expressjs.com/en/4x/api.html)

Нэмэлтээр судлах дэвшилтэт сэдвүүд:
- Authentication ба authorization (JWT, sessions, cookies)
- Request validation (celebrate, joi, express-validator)
- Security best practices (helmet, rate limiting, CORS)
- File upload, pagination, error handling patterns`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Express апп үүсгэх
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // JSON body parser
app.use(express.static('public')); // Static файлууд

// Үндсэн route
app.get('/', (req, res) => {
    res.send('<h1>Сайн уу Express!</h1>');
});

// JSON хариу
app.get('/api/data', (req, res) => {
    res.json({ 
        message: 'Амжилттай', 
        data: [1, 2, 3, 4, 5] 
    });
});

// Route parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId, name: 'Болд' });
});

// Query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.json({ searchTerm: query });
});

// POST request
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log('Шинэ хэрэглэгч:', newUser);
    res.status(201).json({ 
        success: true, 
        user: newUser 
    });
});

// Middleware функц
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // Дараагийн middleware руу дамжуулах
};

app.use(logger);

// Router ашиглах
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({ users: ['Дорж', 'Болд', 'Сүх'] });
});

userRouter.get('/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Дорж' });
});

userRouter.post('/', (req, res) => {
    res.status(201).json({ message: 'Хэрэглэгч үүслээ' });
});

app.use('/api/users', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Серверийн алдаа',
        message: err.message 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Хуудас олдсонгүй' });
});

// Серверийг эхлүүлэх
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Сервер http://localhost:\${PORT} дээр ажиллаж байна\`);
});`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Энгийн Express сервер үүсгэх (/, /about, /contact route-тай)",
          "JSON API endpoint үүсгэх (хэрэглэгчдийн жагсаалт)",
          "Static файл serve хийх (HTML, CSS, JS)",
          "Route parameters ашиглан динамик route үүсгэх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "CRUD API үүсгэх (Create, Read, Update, Delete)",
          "Middleware ашиглан logger болон authentication үүсгэх",
          "Express Router ашиглан модуляр route үүсгэх",
          "Template engine (EJS) ашиглан динамик хуудас үүсгэх",
          "Form өгөгдөл хүлээн авч боловсруулах",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "RESTful API үүсгэх (бүх HTTP method-тай)",
          "JWT authentication систем нэмэх",
          "File upload функц нэмэх (multer ашиглах)",
          "MongoDB-тай холбож бодит database ашиглах",
          "Error handling болон validation (express-validator)",
          "API documentation (Swagger/OpenAPI)",
        ],
      },
    ],
    quiz: [
      {
        question: "Express.js нь юу дээр суурилдаг вэ?",
        options: ["Python", "Node.js", "PHP", "Ruby"],
        correctAnswer: 1,
        explanation: "Express.js нь Node.js дээр суурилсан вэб апликейшн framework юм.",
      },
      {
        question: "Express дээр GET route үүсгэхэд ямар функц хэрэглэдэг вэ?",
        options: ["app.route()", "app.get()", "app.request()", "app.fetch()"],
        correctAnswer: 1,
        explanation: "app.get() функц нь GET HTTP method-тай route үүсгэхэд хэрэглэгддэг.",
      },
      {
        question: "Middleware функцэд дараагийн middleware руу шилжихэд юу дууддаг вэ?",
        options: ["continue()", "next()", "forward()", "proceed()"],
        correctAnswer: 1,
        explanation:
          "next() функцийг дуудсанаар Express дараагийн middleware руу шилжинэ. Дуудаагүй бол request зогсоно.",
      },
      {
        question: "Express дээр JSON өгөгдөл parse хийхэд ямар middleware хэрэглэдэг вэ?",
        options: ["express.json()", "express.parser()", "bodyParser.json()", "json.parse()"],
        correctAnswer: 0,
        explanation: "express.json() нь built-in middleware бөгөөд JSON өгөгдөлтэй request body-г parse хийдэг.",
      },
      {
        question: "Static файл serve хийхэд ямар middleware хэрэглэдэг вэ?",
        options: ["express.files()", "express.static()", "express.serve()", "express.public()"],
        correctAnswer: 1,
        explanation: "express.static() middleware нь CSS, JavaScript, зураг зэрэг static файлуудыг serve хийдэг.",
      },
    ],
  },
  github: {
    slug: "github",
    title: "GitHub",
    icon: "🐙",
    description: "Кодын хамтын ажиллагааны платформ",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `GitHub нь Git version control system ашигладаг кодын хадгалалт ба хамтын ажиллагааны платформ юм. Microsoft-ийн эзэмшдэг энэхүү платформ нь дэлхийн хамгийн том программистуудын нийгэмлэг болоод байна.

GitHub нь 2008 онд байгуулагдсан бөгөөд одоо 100 сая гаруй хэрэглэгчтэй болсон. Бүх том компаниуд болон хувиараа хөгжүүлэгчид GitHub ашигладаг. Linux, React, VS Code зэрэг алдартай төслүүд бүгд GitHub дээр байрладаг.

GitHub нь зөвхөн код хадгалах төдийгүй багаар ажиллах, code review хийх, төслийн менежмент хийх, CI/CD ажиллуулах зэрэг олон функцтэй.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**GitHub суралцах шалтгаанууд:**

• Мэргэжлийн портфолио - Ажил олоход таны GitHub profile чухал
• Хамтран ажиллах - Багийн гишүүдтэй кодоо хуваалцах
• Кодын түүх хадгалах - Бүх өөрчлөлтийг хянах, буцаах боломжтой
• Open source төслүүд - Дэлхийн аль ч төсөлд хувь нэмэр оруулах
• Backup - Кодоо найдвартай хадгалах
• Code review - Бусдын кодыг шалгах, сайжруулах
• Job opportunities - Ихэнх компаниуд GitHub profile харна
• Collaboration skills - Багаар ажиллах чадвар хөгжүүлнэ`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Repository (Repo):**
Төслийн кодыг агуулсан folder. Public буюу Private байж болно.

**Commit:**
Кодын өөрчлөлтийг хадгалах үйлдэл. Commitын бүр тайлбар (message) байна.

**Branch:**
Кодын салаа. Main код өөрчлөлтгүй шинэ функц хөгжүүлэх боломжтой.

**Pull Request (PR):**
Өөрийн өөрчлөлтийг үндсэн кодод нэмэх хүсэлт. Бусад хүмүүс code review хийнэ.

**Merge:**
Branch-ийг үндсэн кодод нэгтгэх үйлдэл.

**Fork:**
Бусдын repository-г өөрийн account руу хуулах.

**Clone:**
Repository-г өөрийн компьютер руу татах.

**Issue:**
Асуудал эсвэл санал хэлэлцэх хэсэг.

**Git Commands:**
git clone, git add, git commit, git push, git pull, git branch гэх мэт командууд.

**.gitignore:**
Git-д хамруулахгүй байх файлуудын жагсаалт.

**README.md:**
Төслийн тайлбар, заавар агуулсан markdown файл.`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `Git ба GitHub-ийг гүнзгий сурахад:

- [Pro Git Book (official)](https://git-scm.com/book/en/v2)
- [GitHub Docs](https://docs.github.com/)
- [Git Reference](https://git-scm.com/docs)

Нэмэлт сэдвүүд:
- Advanced branching стратеги (Git Flow, trunk-based)
- Rebasing, cherry-picking, interactive rebase
- Protected branches, CODEOWNERS, review rules
- GitHub Actions ашиглан CI/CD төсөл дээрээ нэмэх`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# Git үндсэн командууд

# Git тохируулах (анх удаа)
git config --global user.name "Таны Нэр"
git config --global user.email "tany-email@example.com"

# Repository үүсгэх
git init

# Эсвэл GitHub-аас татах
git clone https://github.com/username/repository.git

# Файлуудыг stage area руу нэмэх
git add index.html
git add .  # Бүх өөрчлөлтийг нэмэх

# Commit хийх
git commit -m "Анхны commit: HTML хуудас нэмлээ"

# Commit түүх харах
git log
git log --oneline  # Товч хэлбэрээр

# Remote repository нэмэх
git remote add origin https://github.com/username/repo.git

# GitHub руу push хийх
git push origin main

# GitHub-аас шинэчлэл татах
git pull origin main

# Branch үүсгэх
git branch feature-login
git checkout feature-login
# Эсвэл нэг командаар
git checkout -b feature-login

# Branch-ууд харах
git branch

# Main branch руу буцах
git checkout main

# Branch merge хийх
git merge feature-login

# Branch устгах
git branch -d feature-login

# Өөрчлөлтийн статус харах
git status

# Diff харах (өөрчлөлт юу байгааг)
git diff

# Commit-г буцаах
git revert <commit-hash>

# Сүүлийн commit-г засах
git commit --amend -m "Засварласан commit message"

# .gitignore файл жишээ
# node_modules/
# .env
# *.log
# dist/
# .DS_Store

# README.md файл жишээ
# Төслийн нэр

## Тайлбар
Энэ бол миний анхны GitHub төсөл юм.

## Суулгах заавар
\`\`\`bash
npm install
\`\`\`

## Ажиллуулах
\`\`\`bash
npm start
\`\`\`

## License
MIT`,
      language: "bash",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "GitHub account үүсгэх",
          "Анхны repository үүсгэх (public)",
          "README.md файл нэмж commit хийх",
          "Git command line ашиглан өөрчлөлт push хийх",
          ".gitignore файл үүсгэх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Branch үүсгэж шинэ функц нэмэх",
          "Pull Request үүсгэх",
          "Бусдын repository-г fork хийж өөрчлөлт оруулах",
          "GitHub Issues ашиглах",
          "Өөрийн portfolio repository үүсгэх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Merge conflict шийдвэрлэх",
          "GitHub Actions ашиглан CI/CD тохируулах",
          "Git rebase ашиглах",
          "Open source төсөлд contribute хийх",
          "GitHub Pages ашиглан вэбсайт deploy хийх",
          "Git hooks ашиглах",
        ],
      },
    ],
    quiz: [
      {
        question: "Git commit хийхээс өмнө ямар команд хэрэглэдэг вэ?",
        options: ["git push", "git add", "git pull", "git save"],
        correctAnswer: 1,
        explanation:
          "git add команд нь файлуудыг staging area руу нэмдэг бөгөөд commit хийхээс өмнө заавал хийх ёстой.",
      },
      {
        question: "GitHub-аас repository татахад ямар команд хэрэглэдэг вэ?",
        options: ["git download", "git clone", "git copy", "git fetch"],
        correctAnswer: 1,
        explanation: "git clone команд нь GitHub дээрх repository-г өөрийн компьютер руу хуулж авдаг.",
      },
      {
        question: "Branch үүсгэхэд ямар команд хэрэглэдэг вэ?",
        options: ["git new branch", "git branch <name>", "git create <name>", "git add branch"],
        correctAnswer: 1,
        explanation: "git branch <name> гэж бичснээр шинэ branch үүсгэж болно.",
      },
      {
        question: "Pull Request гэж юу вэ?",
        options: ["Код татах хүсэлт", "Өөрчлөлтийг нэгтгэх хүсэлт", "Repository хуулах", "Issue үүсгэх"],
        correctAnswer: 1,
        explanation:
          "Pull Request нь өөрийн өөрчлөлтийг үндсэн кодод нэмэх хүсэлт бөгөөд code review хийгдсэний дараа merge хийгдэнэ.",
      },
      {
        question: ".gitignore файлын зориулалт юу вэ?",
        options: [
          "Git тохиргоо хадгалах",
          "Хамааралтай файлууд жагсаах",
          "Git-д хамруулахгүй байх файлууд заах",
          "Commit message бичих",
        ],
        correctAnswer: 2,
        explanation:
          ".gitignore файл нь Git-д хамруулахгүй байх файл болон folder-уудыг заадаг (node_modules, .env гэх мэт).",
      },
    ],
  },
  "python-ai": {
    slug: "python-ai",
    title: "Python with AI",
    icon: "🤖",
    description: "Python ашиглан хиймэл оюун ухаан",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Python with AI нь хиймэл оюун ухаан болон машин сургалтын апликейшнүүд хөгжүүлэхэд Python хэл ашиглах талаар юм. Python нь AI хөгжүүлэлтийн хамгийн түгээмэл хэрэглэгддэг хэл бөгөөд TensorFlow, PyTorch, Scikit-learn зэрэг хүчирхэг library-тай.

AI нь өнөө үед маш эрэлттэй салбар бөгөөд ChatGPT, Google Translate, Face Recognition зэрэг технологиуд AI дээр суурилдаг. Python-ийн тусламжтайгаар та өөрийн AI model-ийг сургаж, ашиглаж чадна.

Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision зэрэг AI-ийн бүх чиглэлийг Python ашиглан хөгжүүлж болно.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Python with AI суралцах шалтгаанууд:**

• Ирээдүйн технологи - AI нь бүх салбарт хэрэглэгдэж байна
• Өндөр цалин - AI хөгжүүлэгчид дэлхийн хамгийн өндөр цалинтай мэргэжилтнүүд
• Бодит асуудал шийдэх - Өвчлөл оношлох, хөдөлгөөнт тээвэр, сошиал медиа
• Creativity - AI ашиглан бүтээлч ажил хийх (зураг, хөгжим, текст үүсгэх)
• Automation - Давтагдах ажлыг автоматжуулах
• Олон салбарт хэрэглэгдэнэ - Эрүүл мэнд, санхүү, худалдаа, боловсрол
• Эрэлт өндөр - AI хөгжүүлэгч хайж байгаа компани олон`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Machine Learning:**
Компьютерт программчлалгүйгээр өгөгдлөөс суралцаж дадлага хийх боломж олгох.

**Supervised Learning:**
Label-тэй өгөгдлөөс суралцах. Жишээ нь: Зургаас нохой, муур таних.

**Unsupervised Learning:**
Label-гүй өгөгдлөөс pattern олох. Жишээ нь: Хэрэглэгчдийг бүлэглэх.

**Deep Learning:**
Neural network ашигласан machine learning. Зураг, дуу хоолой таних.

**Neural Networks:**
Хүний тархины загварчилсан сүлжээ. Neurons (node) болон layer-ээс бүрдэнэ.

**Natural Language Processing (NLP):**
Хүний хэлийг ойлгож боловсруулах. ChatGPT, орчуулга, sentiment analysis.

**Computer Vision:**
Зураг, видеог ойлгох. Нүүр таних, объект илрүүлэх, autonomous driving.

**Popular Libraries:**
- NumPy: Математик тооцоолол
- Pandas: Өгөгдөл боловсруулах
- Matplotlib/Seaborn: Visualization
- Scikit-learn: Machine learning
- TensorFlow/Keras: Deep learning
- PyTorch: Deep learning
- OpenCV: Computer vision
- NLTK/spaCy: NLP`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `AI, ML, DL-ийг Python хэлээр сурахад ашиглах чухал эх сурвалжууд:

- [Scikit-learn Docs](https://scikit-learn.org/stable/user_guide.html)
- [TensorFlow Guide](https://www.tensorflow.org/learn)
- [PyTorch Tutorials](https://pytorch.org/tutorials/)
- [Keras Documentation](https://keras.io/)

Нэмэлтээр судлах сэдвүүд:
- Model evaluation (train/validation/test split, cross-validation, metrics)
- Overfitting, regularization, early stopping
- Deployment (FastAPI, Flask, Streamlit ашиглан model publish хийх)
- Responsible AI (bias, fairness, explainability)`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# NumPy ба Pandas ашиглах
import numpy as np
import pandas as pd

# NumPy array үүсгэх
arr = np.array([1, 2, 3, 4, 5])
print("Array:", arr)
print("Дундаж:", np.mean(arr))

# Pandas DataFrame үүсгэх
data = {
    'Нэр': ['Болд', 'Дорж', 'Сүх'],
    'Нас': [17, 16, 18],
    'Оноо': [95, 87, 92]
}
df = pd.DataFrame(data)
print(df)

# Simple Linear Regression (Scikit-learn)
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Өгөгдөл бэлтгэх
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Model сургах
model = LinearRegression()
model.fit(X_train, y_train)

# Таамаглал хийх
predictions = model.predict(X_test)
print("Таамаглал:", predictions)

# Neural Network (TensorFlow/Keras)
import tensorflow as tf
from tensorflow import keras

# Sequential model үүсгэх
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

# Model compile хийх
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Model-ийн бүтцийг харах
model.summary()

# Image classification (CNN)
from tensorflow.keras import layers

cnn_model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Natural Language Processing
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Текст өгөгдөл
texts = ['Би Python дуртай', 'Python хялбар', 'JavaScript сайн']
labels = [1, 1, 0]  # 1 = эерэг, 0 = сөрөг

# Vectorization
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# Model сургах
classifier = MultinomialNB()
classifier.fit(X, labels)

# Шинэ текст таамаглах
new_text = ['Python програмчлал']
new_X = vectorizer.transform(new_text)
prediction = classifier.predict(new_X)
print("Таамаглал:", prediction)`,
      language: "python",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "NumPy ашиглан математик үйлдлүүд хийх",
          "Pandas ашиглан CSV файл унших, боловсруулах",
          "Matplotlib ашиглан график зурах",
          "Энгийн Linear Regression model сургах",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Scikit-learn ашиглан classification model сургах",
          "MNIST dataset дээр гарын бичээс таних model сургах",
          "Text classification хийх (spam эсвэл ham)",
          "K-Means clustering ашиглан өгөгдөл бүлэглэх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "CNN ашиглан зураг ангилах (cats vs dogs)",
          "RNN/LSTM ашиглан текст үүсгэх",
          "Transfer Learning ашиглах (pre-trained models)",
          "OpenCV ашиглан face detection",
          "Chatbot үүсгэх (NLP ашиглан)",
          "Real-time object detection (YOLO)",
        ],
      },
    ],
    quiz: [
      {
        question: "Machine Learning гэж юу вэ?",
        options: [
          "Компьютер суралцаж дадлага хийх",
          "Машин засах технологи",
          "Интернетийн хурд нэмэгдүүлэх",
          "Программ бичих арга",
        ],
        correctAnswer: 0,
        explanation:
          "Machine Learning нь компьютерт программчлалгүйгээр өгөгдлөөс суралцаж дадлага хийх боломж олгодог.",
      },
      {
        question: "Python дээр хамгийн түгээмэл Deep Learning library аль нь вэ?",
        options: ["NumPy", "Pandas", "TensorFlow", "Matplotlib"],
        correctAnswer: 2,
        explanation: "TensorFlow (мөн PyTorch) нь Python дээрх хамгийн түгээмэл Deep Learning framework юм.",
      },
      {
        question: "Supervised Learning гэж юу вэ?",
        options: [
          "Label-тэй өгөгдлөөс суралцах",
          "Label-гүй өгөгдлөөс суралцах",
          "Багш заадаг систем",
          "Автоматаар ажилладаг систем",
        ],
        correctAnswer: 0,
        explanation: "Supervised Learning нь label (answer) бүхий өгөгдлөөс суралцах machine learning төрөл юм.",
      },
      {
        question: "Computer Vision гэж юу вэ?",
        options: ["Компьютерийн дэлгэц", "Зураг, видеог ойлгох AI", "Нүдний шинжилгээ", "3D график"],
        correctAnswer: 1,
        explanation: "Computer Vision нь зураг болон видеог ойлгож боловсруулах AI-ийн салбар юм.",
      },
      {
        question: "NLP ямар зүйлд ашиглагддаг вэ?",
        options: ["Зураг таних", "Текст ойлгох", "Тоо тооцоолох", "Өгөгдөл хадгалах"],
        correctAnswer: 1,
        explanation:
          "NLP (Natural Language Processing) нь хүний хэлийг ойлгож боловсруулахад ашиглагддаг. ChatGPT, орчуулга зэрэгт.",
      },
    ],
  },
  cpp: {
    slug: "cpp",
    title: "C++",
    icon: "⚙️",
    description: "Өндөр гүйцэтгэлтэй програмчлалын хэл",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `C++ нь Bjarne Stroustrup 1979 онд үүсгэсэн өндөр гүйцэтгэлтэй, general-purpose програмчлалын хэл юм. C хэлний өргөтгөл болгон үүсгэсэн бөгөөд Object-Oriented Programming (OOP) дэмждэг.

C++ нь operating system, game engine, embedded system, database зэрэгт ашиглагддаг. Windows, Linux, MacOS-ийн ихэнх хэсэг C++ дээр бичигдсэн. Google Chrome, Adobe Photoshop, MySQL зэрэг алдартай программууд C++ ашигладаг.

C++ нь хурдан ажилладаг учраас real-time систем, game development, AI engine зэрэгт тохиромжтой. Хэцүү боловч хүчирхэг хэл бөгөөд системийн түвшний програмчлалд давуу талтай.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**C++ суралцах шалтгаанууд:**

• Өндөр гүйцэтгэл - Хамгийн хурдан програмчлалын хэлүүдийн нэг
• Game development - Unreal Engine, Unity зэрэг game engine-үүд C++ ашигладаг
• System programming - Operating system, driver, embedded system
• Competitive programming - Олимпиад, competition-д түгээмэл ашигладаг
• Мэдлэгийн суурь - C++ мэдвэл бусад хэл сурахад хялбар
• Low-level control - Санах ой, hardware-тай ойр ажилладаг
• Эрэлт өндөр - Системийн програмист, game developer өндөр цалинтай
• Олон салбарт - Finance, AI, robotics, automotive`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Variables & Data Types:**
int, float, double, char, bool, string зэрэг өгөгдлийн төрлүүд.

**Operators:**
Arithmetic (+, -, *, /), comparison (==, !=, <, >), logical (&&, ||, !).

**Control Flow:**
if-else, switch, for loop, while loop, do-while loop.

**Functions:**
Код дахин ашиглах, return type, parameters, function overloading.

**Arrays & Vectors:**
Олон өгөгдөл хадгалах, dynamic array (vector).

**Pointers:**
Санах ойн хаягтай ажиллах. C++-ийн хүчирхэг боловч хэцүү хэсэг.

**Object-Oriented Programming:**
- Class & Objects: Объект үүсгэх загвар
- Encapsulation: Өгөгдөл далдлах
- Inheritance: Өв залгамжлал
- Polymorphism: Олон хэлбэрийн байдал
- Abstraction: Хийсвэр байдал

**STL (Standard Template Library):**
vector, map, set, queue, stack зэрэг бэлэн өгөгдлийн бүтэц.

**Memory Management:**
new, delete, stack vs heap, memory leak.

**Exception Handling:**
try-catch block ашиглан алдаа барих.`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `C++-ийг системийн түвшинд сайн сурахад:

- [cppreference.com](https://en.cppreference.com/w/)
- [C++ Standard Drafts](https://isocpp.org/std/the-standard)
- [ISO C++ сайт](https://isocpp.org/)

Нэмэлт судлах сэдвүүд:
- Modern C++ (C++11/14/17/20) боломжууд (auto, smart pointers, move semantics)
- Templates ба generic programming
- Concurrency ба multithreading (std::thread, async, mutex)
- Performance optimization, profiling, memory sanitizer хэрэгслүүд`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Энгийн Hello World
#include <iostream>
using namespace std;

int main() {
    cout << "Сайн уу, C++!" << endl;
    return 0;
}

// Variables & Data Types
#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 17;
    double score = 95.5;
    char grade = 'A';
    string name = "Болд";
    bool isPassed = true;
    
    cout << "Нэр: " << name << endl;
    cout << "Нас: " << age << endl;
    cout << "Оноо: " << score << endl;
    
    return 0;
}

// Functions
#include <iostream>
using namespace std;

// Function зарлах
int add(int a, int b) {
    return a + b;
}

double calculateAverage(int arr[], int size) {
    int sum = 0;
    for(int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (double)sum / size;
}

int main() {
    int result = add(5, 3);
    cout << "Нийлбэр: " << result << endl;
    
    int scores[] = {90, 85, 92, 88};
    double avg = calculateAverage(scores, 4);
    cout << "Дундаж: " << avg << endl;
    
    return 0;
}

// Class & Objects (OOP)
#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    double gpa;

public:
    // Constructor
    Student(string n, int a, double g) {
        name = n;
        age = a;
        gpa = g;
    }
    
    // Methods
    void displayInfo() {
        cout << "Нэр: " << name << endl;
        cout << "Нас: " << age << endl;
        cout << "GPA: " << gpa << endl;
    }
    
    void setGPA(double g) {
        gpa = g;
    }
    
    double getGPA() {
        return gpa;
    }
};

int main() {
    Student student1("Дорж", 17, 3.8);
    student1.displayInfo();
    
    student1.setGPA(3.9);
    cout << "Шинэ GPA: " << student1.getGPA() << endl;
    
    return 0;
}

// STL Vector ашиглах
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers;
    
    // Элемент нэмэх
    numbers.push_back(5);
    numbers.push_back(2);
    numbers.push_back(8);
    numbers.push_back(1);
    
    // Эрэмбэлэх
    sort(numbers.begin(), numbers.end());
    
    // Хэвлэх
    for(int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}

// Pointers
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x;  // Pointer зарлах
    
    cout << "Утга: " << x << endl;
    cout << "Хаяг: " << &x << endl;
    cout << "Pointer-ийн утга: " << *ptr << endl;
    
    *ptr = 20;  // Pointer-ээр утгыг өөрчлөх
    cout << "Шинэ утга: " << x << endl;
    
    return 0;
}`,
      language: "cpp",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Hello World програм бичих",
          "Хоёр тоо нэмэх, хасах, үржүүлэх, хуваах програм",
          "For loop ашиглан 1-100 хүртэл тоо хэвлэх",
          "Массивын элементүүдийн нийлбэр олох функц бичих",
          "Тэгш эсвэл сондгой тоо шалгах програм",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Calculator class үүсгэх (OOP)",
          "Vector ашиглан оюутны мэдээлэл хадгалах програм",
          "Bubble sort эсвэл Selection sort хэрэгжүүлэх",
          "Файл унших, бичих програм",
          "Bank Account class үүсгэх (deposit, withdraw methods)",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Linked List хэрэгжүүлэх (insert, delete, search)",
          "Binary Search Tree хийх",
          "Pointer ашиглан dynamic memory allocation",
          "Template class үүсгэх",
          "Exception handling ашиглан robust програм",
          "Multi-file project үүсгэх (header files ашиглах)",
        ],
      },
    ],
    quiz: [
      {
        question: "C++ програм компьютер дээр ажиллахын өмнө юу хийх ёстой вэ?",
        options: ["Интерпретлэх", "Компайл хийх", "Татаж авах", "Зөвхөн ажиллуулах"],
        correctAnswer: 1,
        explanation:
          "C++ нь compiled хэл бөгөөд програмыг ажиллуулахаас өмнө compiler ашиглан machine code руу хөрвүүлэх (compile) хэрэгтэй.",
      },
      {
        question: "C++ дээр текст хэвлэхэд ямар команд хэрэглэдэг вэ?",
        options: ["print()", "cout <<", "echo", "printf()"],
        correctAnswer: 1,
        explanation: "C++ дээр cout << операторыг ашиглан текст хэвлэнэ. Жишээ нь: cout << 'Hello' << endl;",
      },
      {
        question: "Class гэж юу вэ?",
        options: ["Өгөгдлийн төрөл", "Объект үүсгэх загвар", "Функцийн нэр", "Хувьсагчийн төрөл"],
        correctAnswer: 1,
        explanation:
          "Class нь Object-Oriented Programming-д объект үүсгэх загвар (blueprint) юм. Class-аас олон объект үүсгэж болно.",
      },
      {
        question: "Pointer нь юу вэ?",
        options: [
          "Тоо хадгалах хувьсагч",
          "Санах ойн хаяг хадгалах хувьсагч",
          "Текст хадгалах хувьсагч",
          "Логик утга хадгалах хувьсагч",
        ],
        correctAnswer: 1,
        explanation: "Pointer нь санах ойн хаяг хадгалах тусгай хувьсагч юм. Өөр хувьсагчийн хаягийг заадаг.",
      },
      {
        question: "Vector нь array-с ямар ялгаатай вэ?",
        options: ["Ялгаагүй", "Vector нь dynamic хэмжээтэй", "Vector илүү удаан", "Array нь дахин ашиглагддаггүй"],
        correctAnswer: 1,
        explanation: "Vector нь dynamic array бөгөөд хэмжээ нь автоматаар өөрчлөгддөг. Array нь fixed хэмжээтэй.",
      },
    ],
  },
  python: {
    slug: "python",
    title: "Python",
    icon: "🐍",
    description: "Хялбар бөгөөд хүчирхэг програмчлалын хэл",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Python нь Guido van Rossum 1991 онд үүсгэсэн өндөр түвшний, уншихад хялбар програмчлалын хэл юм. Python нь анхлагчдад хамгийн тохиромжтой хэл бөгөөд мөн мэргэжлийн хөгжүүлэгчид өргөнөөр ашигладаг.

Python нь web development, data science, artificial intelligence, automation, scientific computing зэрэг олон салбарт хэрэглэгддэг. Google, Facebook, Netflix, Spotify зэрэг томоохон компаниуд Python ашигладаг.

Python-ийн философи нь "бичихэд хялбар, уншихэд хялбар" гэсэн үзэл санаа дээр суурилдаг. Энэ нь code-ийг ойлгоход хялбар болгодог бөгөөд багаар ажиллахад тохиромжтой.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Python суралцах шалтгаанууд:**

• Хялбар синтакс - Ойлгоход бөгөөд бичихэд хялбар
• Өргөн хэрэглээ - Web, AI, Data Science, automation
• Том library ecosystem - 300,000+ package PyPI дээр
• Эрэлт өндөр - Олон компани Python хөгжүүлэгч хайдаг
• Beginner-friendly - Анхлагчдад хамгийн тохиромжтой
• Cross-platform - Windows, Mac, Linux дээр ажилладаг
• Олон нийтийн дэмжлэг - Хамгийн том программистуудын нийгэмлэг
• Карьерын боломж - Data scientist, ML engineer, backend developer`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Variables & Data Types:**
Python-д хувьсагчийн төрөл зарлах шаардлагагүй (dynamic typing).
- int, float, str, bool, list, tuple, dict, set

**Operators:**
Arithmetic (+, -, *, /, //, %, **), comparison (==, !=, <, >), logical (and, or, not).

**Control Flow:**
if-elif-else, for loop, while loop, break, continue.

**Functions:**
def keyword ашиглан функц үүсгэнэ. Lambda functions (anonymous functions).

**Lists:**
Ordered, mutable collection. [1, 2, 3, 'text']

**Tuples:**
Ordered, immutable collection. (1, 2, 3)

**Dictionaries:**
Key-value pairs. {'name': 'Болд', 'age': 17}

**Sets:**
Unordered, unique elements. {1, 2, 3, 4}

**List Comprehension:**
Товч хэлбэрээр list үүсгэх: [x*2 for x in range(10)]

**File I/O:**
Файл унших, бичих: open(), read(), write(), close()

**Exception Handling:**
try-except-finally block ашиглан алдаа барих.

**Modules & Packages:**
import keyword ашиглан бусад кодыг ашиглах.

**OOP (Object-Oriented Programming):**
Class, objects, inheritance, encapsulation, polymorphism.`,
      },
      {
        id: "resources",
        title: "Албан ёсны баримтжуулалт ба эх сурвалжууд",
        icon: <Code className="h-5 w-5" />,
        content: `Python-ыг хүчтэй түвшинд эзэмшихийн тулд:

- [Python Official Docs](https://docs.python.org/3/)
- [The Python Tutorial](https://docs.python.org/3/tutorial/)
- [Real Python нийтлэлүүд](https://realpython.com/)

Нэмэлтээр судлах сэдвүүд:
- Virtualenv, pip, dependency management
- Asyncio, concurrency (threads, processes)
- Popular frameworks: Django, Flask, FastAPI
- Testing (unittest, pytest) ба type hints (mypy, pyright)`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# Hello World
print("Сайн уу, Python!")

# Variables & Data Types
name = "Болд"
age = 17
height = 1.75
is_student = True

print(f"Нэр: {name}, Нас: {age}")

# Lists
fruits = ["алим", "банана", "жүрж", "усан үзэм"]
print(fruits[0])  # алим
fruits.append("лийр")
print(fruits)

# Dictionaries
student = {
    "name": "Дорж",
    "age": 16,
    "grade": 11,
    "subjects": ["Математик", "Физик", "Хими"]
}

print(student["name"])
print(student.get("age"))

# Control Flow
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Үнэлгээ: {grade}")

# For Loop
for i in range(1, 6):
    print(f"Тоо: {i}")

for fruit in fruits:
    print(f"Жимс: {fruit}")

# While Loop
count = 0
while count < 5:
    print(f"Тоолуур: {count}")
    count += 1

# Functions
def greet(name):
    return f"Сайн уу, {name}!"

def add(a, b):
    return a + b

def calculate_average(numbers):
    return sum(numbers) / len(numbers)

print(greet("Сүх"))
print(add(5, 3))
print(calculate_average([90, 85, 92, 88]))

# List Comprehension
squares = [x**2 for x in range(1, 11)]
print(squares)  # [1, 4, 9, 16, 25, ...]

even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)

# Lambda Functions
multiply = lambda x, y: x * y
print(multiply(4, 5))  # 20

# File I/O
# Файл бичих
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("Сайн уу Python!\\n")
    file.write("Энэ бол жишээ файл.\\n")

# Файл унших
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# Exception Handling
try:
    number = int(input("Тоо оруулна уу: "))
    result = 100 / number
    print(f"Үр дүн: {result}")
except ValueError:
    print("Зөв тоо оруулна уу!")
except ZeroDivisionError:
    print("Тэгд хуваах боломжгүй!")
finally:
    print("Програм дууссан")

# Class & OOP
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.speed = 0
    
    def accelerate(self, increase):
        self.speed += increase
        print(f"Хурд: {self.speed} км/ц")
    
    def brake(self):
        self.speed = 0
        print("Машин зогссон")
    
    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

# Object үүсгэх
my_car = Car("Toyota", "Camry", 2023)
my_car.display_info()
my_car.accelerate(50)
my_car.accelerate(30)
my_car.brake()`,
      language: "python",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Өөрийн нэр, нас хэвлэх програм бичих",
          "Хоёр тооны нийлбэр, ялгавар, үржвэр олох калькулятор",
          "List ашиглан жимсний жагсаалт үүсгэж хэвлэх",
          "Тэгш эсвэл сондгой тоо шалгах програм",
          "1-ээс 100 хүртэл тоонуудын нийлбэр олох",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Dictionary ашиглан оюутны мэдээлэл хадгалах програм",
          "List comprehension ашиглан өгөгдөл боловсруулах",
          "Файл уншиж үг тоолох програм",
          "Quiz програм үүсгэх (dict ашиглах)",
          "Temperature converter (Celsius ↔ Fahrenheit)",
          "Palindrome шалгах функц бичих",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Student Management System (OOP ашиглах)",
          "Вэб scraping хийх (requests, BeautifulSoup)",
          "Command-line Todo list програм",
          "CSV файл унших, боловсруулах (pandas)",
          "API-аас өгөгдөл татах програм (requests)",
          "Recursive функц ашиглан Fibonacci дараалал",
        ],
      },
    ],
    quiz: [
      {
        question: "Python нь interpreted эсвэл compiled хэл вэ?",
        options: ["Compiled", "Interpreted", "Hybrid", "Assembly"],
        correctAnswer: 1,
        explanation: "Python нь interpreted хэл бөгөөд кодыг шууд гүйцэтгэдэг. Compile хийх шаардлагагүй.",
      },
      {
        question: "Python дээр коммент бичихэд ямар тэмдэг хэрэглэдэг вэ?",
        options: ["//", "/* */", "#", "<!--"],
        correctAnswer: 2,
        explanation: "Python дээр # тэмдэг ашиглан нэг мөрийн коммент бичнэ.",
      },
      {
        question: "List болон Tuple-ийн ялгаа юу вэ?",
        options: [
          "Ялгаагүй",
          "List нь mutable, Tuple нь immutable",
          "List нь удаан, Tuple нь хурдан",
          "Tuple нь зөвхөн тоо хадгална",
        ],
        correctAnswer: 1,
        explanation: "List нь mutable (өөрчлөгдөж болох) бол Tuple нь immutable (өөрчлөгдөхгүй) байдаг.",
      },
      {
        question: "Python дээр функц үүсгэхэд ямар түлхүүр үг хэрэглэдэг вэ?",
        options: ["function", "def", "func", "define"],
        correctAnswer: 1,
        explanation: "Python дээр def түлхүүр үг ашиглан функц үүсгэнэ. Жишээ нь: def my_function():",
      },
      {
        question: "Dictionary-д хандахдаа юу ашигладаг вэ?",
        options: ["Index number", "Key", "Position", "ID"],
        correctAnswer: 1,
        explanation: "Dictionary-д key ашиглан value-д хандана. Жишээ нь: student['name']",
      },
    ],
  },
  reactjs: {
    slug: "reactjs",
    title: "ReactJS",
    icon: "⚛️",
    description: "Frontend хөгжүүлэлтийн хүчирхэг framework",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `React нь Facebook (одоо Meta) компаниас 2013 онд гаргасан JavaScript library юм. React нь user interface (UI) үүсгэхэд зориулагдсан бөгөөд одоо дэлхийн хамгийн алдартай frontend framework болоод байна.

React-ийн гол онцлог нь component-based архитектур бөгөөд дахин ашиглах боломжтой UI хэсгүүд үүсгэх боломжийг олгодог. React нь virtual DOM ашигладаг учраас хурдан, хэмжээтэй апликейшн үүсгэхэд тохиромжтой.

Netflix, Facebook, Instagram, Airbnb, Uber зэрэг томоохон компаниуд React ашигладаг. React нь одоогийн вэб хөгжүүлэлтийн стандарт болоод байна.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**React суралцах шалтгаанууд:**

• Хамгийн алдартай frontend framework - Олон компани React хөгжүүлэгч хайдаг
• Component-based - Код дахин ашиглах, засвар үйлчилгээ хялбар
• Virtual DOM - Хурдан, хэмжээтэй апликейшн
• Том ecosystem - Олон library, tool байдаг
• Job opportunities - Өндөр цалинтай мэргэжил
• React Native - Mobile app хөгжүүлэх боломж
• Community support - Асуудалд хариулт хурдан олдоно
• Modern development - Hooks, Context API зэрэг орчин үеийн функцууд`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Components:**
React дээр UI-ийг component-уудаар бүтээдэг. Component нь дахин ашиглагдах UI хэсэг.

**JSX:**
JavaScript-д HTML-тэй төстэй синтакс. JSX нь React элементүүд үүсгэхэд ашиглагдана.

**Props:**
Component-уудын хооронд өгөгдөл дамжуулах арга. Parent component-аас child component руу.

**State:**
Component-ийн өөрчлөгдөж болох өгөгдөл. useState hook ашиглан удирдана.

**Hooks:**
useState, useEffect, useContext зэрэг функцууд. Class component-ийн оронд функц component ашиглах.

**Virtual DOM:**
React-ийн хурдан ажиллагааны нууц. DOM-ийн виртуал хувилбар үүсгэж, зөвхөн өөрчлөлт хийсэн хэсгийг шинэчилнэ.

**Event Handling:**
onClick, onChange зэрэг event-уудтай ажиллах.

**Conditional Rendering:**
if/else, ternary operator ашиглан нөхцөлт UI харуулах.`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Functional Component with Hooks
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Нэмэх
      </button>
      <button onClick={() => setCount(count - 1)}>
        Хасах
      </button>
    </div>
  );
}

// Component with Props
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Сайн уу, {name}!</h2>
      <p>Та {age} настай байна.</p>
    </div>
  );
}

// List Component
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Хийх зүйлээ оруулна уу"
      />
      <button onClick={addTodo}>Нэмэх</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// Conditional Rendering
function UserProfile({ user }) {
  if (!user) {
    return <div>Хэрэглэгч олдсонгүй</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {user.isAdmin && <p>Админ эрхтэй</p>}
    </div>
  );
}

// Event Handling
function Button() {
  const handleClick = () => {
    alert('Товч дарагдлаа!');
  };

  return (
    <button onClick={handleClick}>
      Дарах
    </button>
  );
}

export default Counter;`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Hello World component үүсгэх",
          "useState ашиглан counter component хийх",
          "Props ашиглан Card component үүсгэх",
          "List component үүсгэх (массив харуулах)",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Todo list app үүсгэх (нэмэх, устгах)",
          "Form component үүсгэх (input, validation)",
          "useEffect ашиглан API-аас өгөгдөл татах",
          "Conditional rendering ашиглах",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Context API ашиглан state management",
          "Custom hooks үүсгэх",
          "React Router ашиглан multi-page app",
          "Performance optimization (useMemo, useCallback)",
        ],
      },
    ],
    quiz: [
      {
        question: "React нь юу вэ?",
        options: ["Programming language", "JavaScript library", "Database", "Server"],
        correctAnswer: 1,
        explanation: "React нь JavaScript library бөгөөд user interface үүсгэхэд ашиглагдана.",
      },
      {
        question: "React дээр state удирдахад ямар hook хэрэглэдэг вэ?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useState hook нь React дээр state удирдахад хэрэглэгддэг.",
      },
      {
        question: "JSX гэж юу вэ?",
        options: [
          "JavaScript extension",
          "JavaScript XML - HTML-тэй төстэй синтакс",
          "JSON extension",
          "Java syntax",
        ],
        correctAnswer: 1,
        explanation: "JSX нь JavaScript XML бөгөөд React дээр HTML-тэй төстэй синтакс ашиглан элементүүд үүсгэдэг.",
      },
      {
        question: "Props гэж юу вэ?",
        options: [
          "Component-ийн state",
          "Parent-аас child руу өгөгдөл дамжуулах",
          "Event handler",
          "CSS class",
        ],
        correctAnswer: 1,
        explanation: "Props нь parent component-аас child component руу өгөгдөл дамжуулах арга юм.",
      },
      {
        question: "Virtual DOM-ийн давуу тал юу вэ?",
        options: [
          "Хурдан ажиллагаа",
          "Бага санах ой ашиглах",
          "Хурдан render хийх, зөвхөн өөрчлөлт хийсэн хэсгийг шинэчлэх",
          "Илүү хялбар код",
        ],
        correctAnswer: 2,
        explanation: "Virtual DOM нь зөвхөн өөрчлөлт хийсэн хэсгийг шинэчилдэг учраас хурдан ажилладаг.",
      },
    ],
  },
  nextjs: {
    slug: "nextjs",
    title: "NextJS",
    icon: "▲",
    description: "React production framework - Server-side rendering болон static site generation",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Next.js нь Vercel компаниас 2016 онд гаргасан React-д суурилсан production-ready framework юм. Next.js нь React-ийн бүх давуу талуудыг ашиглахын зэрэгцээ server-side rendering (SSR), static site generation (SSG), API routes зэрэг production-д шаардлагатай функцуудыг өгдөг.

Next.js нь SEO-friendly, хурдан, хэмжээтэй вэб апликейшн үүсгэхэд тохиромжтой. Netflix, TikTok, Hulu, Twitch зэрэг томоохон компаниуд Next.js ашигладаг.

Next.js-ийн гол онцлогууд:
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes (backend функц)
- Automatic code splitting
- Image optimization
- Built-in CSS support
- TypeScript support`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Next.js суралцах шалтгаанууд:**

• Production-ready - Бүх шаардлагатай функц бэлэн
• SEO-friendly - Server-side rendering SEO-д сайн
• Хурдан - Automatic optimization, code splitting
• Full-stack - API routes ашиглан backend хийх боломж
• Vercel deployment - Хялбар deploy (Vercel компаниас)
• Image optimization - Автоматаар зураг optimize хийх
• TypeScript support - Type safety
• File-based routing - Folder structure = routes
• Hot reload - Development хурдан
• Олон компани ашигладаг - Job opportunities`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**File-based Routing:**
pages/ эсвэл app/ folder доторх файлууд автоматаар route болдог.

**Server-side Rendering (SSR):**
getServerSideProps ашиглан сервер дээр render хийх.

**Static Site Generation (SSG):**
getStaticProps ашиглан build хийх үед static HTML үүсгэх.

**API Routes:**
pages/api/ эсвэл app/api/ доторх файлууд API endpoint болдог.

**Image Optimization:**
next/image component ашиглан зураг автоматаар optimize хийх.

**Link Component:**
next/link ашиглан client-side navigation хийх.

**Metadata:**
SEO-д зориулсан metadata тохируулах.

**Middleware:**
Request-ийг боловсруулах middleware.

**Dynamic Routes:**
[slug], [id] зэрэг dynamic route параметр.

**Layouts:**
_app.js эсвэл layout.tsx ашиглан global layout үүсгэх.`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// pages/index.js (App Router: app/page.tsx)
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <h1>Next.js Апп</h1>
      <Link href="/about">Бидний тухай</Link>
      <Image
        src="/logo.png"
        alt="Лого"
        width={200}
        height={200}
      />
    </div>
  );
}

// pages/about.js
export default function AboutPage() {
  return (
    <div>
      <h1>Бидний тухай</h1>
      <p>Энэ бол Next.js хуудас</p>
    </div>
  );
}

// Dynamic Route: pages/posts/[id].js
export default function PostPage({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = await fetchPost(params.id);
  return {
    props: { post },
  };
}

// Static Generation: pages/posts/[id].js
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: { post },
  };
}

// API Route: pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: ['Болд', 'Дорж'] });
  } else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(201).json({ message: 'Хэрэглэгч үүслээ', name });
  }
}

// App Router: app/api/users/route.js
export async function GET() {
  return Response.json({ users: ['Болд', 'Дорж'] });
}

export async function POST(request) {
  const { name } = await request.json();
  return Response.json({ message: 'Хэрэглэгч үүслээ', name });
}

// Metadata: app/layout.js
export const metadata = {
  title: 'Amjilt Cyber School',
  description: 'Програмчлалын сургалт',
};

// Middleware: middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Authentication check
  return NextResponse.next();
}`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Next.js project үүсгэх (create-next-app)",
          "File-based routing ашиглан хуудас үүсгэх",
          "Link component ашиглан navigation хийх",
          "Image component ашиглан зураг харуулах",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Dynamic routes үүсгэх ([slug])",
          "API route үүсгэх (GET, POST)",
          "getServerSideProps ашиглан SSR хийх",
          "getStaticProps ашиглан SSG хийх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "App Router ашиглах (Next.js 13+)",
          "Server Components болон Client Components",
          "Middleware ашиглан authentication",
          "Vercel дээр deploy хийх",
        ],
      },
    ],
    quiz: [
      {
        question: "Next.js нь юу дээр суурилдаг вэ?",
        options: ["Vue", "React", "Angular", "Svelte"],
        correctAnswer: 1,
        explanation: "Next.js нь React-д суурилсан framework юм.",
      },
      {
        question: "Next.js дээр route үүсгэхэд юу ашигладаг вэ?",
        options: [
          "Router configuration",
          "File-based routing (folder structure)",
          "Route.js файл",
          "Config file",
        ],
        correctAnswer: 1,
        explanation: "Next.js нь file-based routing ашигладаг. pages/ эсвэл app/ folder доторх файлууд автоматаар route болдог.",
      },
      {
        question: "SSR гэж юу вэ?",
        options: [
          "Static Site Rendering",
          "Server-Side Rendering",
          "Single Page Rendering",
          "Server State Rendering",
        ],
        correctAnswer: 1,
        explanation: "SSR нь Server-Side Rendering бөгөөд сервер дээр HTML үүсгэж илгээдэг.",
      },
      {
        question: "Next.js дээр API route хаана байрладаг вэ?",
        options: [
          "pages/api/ эсвэл app/api/",
          "api/",
          "routes/",
          "server/",
        ],
        correctAnswer: 0,
        explanation: "Next.js дээр API route нь pages/api/ (Pages Router) эсвэл app/api/ (App Router) folder дотор байрладаг.",
      },
      {
        question: "next/image component-ийн давуу тал юу вэ?",
        options: [
          "Зураг автоматаар optimize хийх",
          "Зураг томруулах",
          "Зураг шүүх",
          "Зураг хадгалах",
        ],
        correctAnswer: 0,
        explanation: "next/image component нь зураг автоматаар optimize хийж, хурдан ачааллахад тусалдаг.",
      },
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: "🔒",
    description: "Кибер аюулгүй байдал ба хамгаалалт",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Cybersecurity (Кибер аюулгүй байдал) нь компьютер систем, сүлжээ, программуудыг хакер, вирус, мэдээллийн алдагдлаас хамгаалах практик юм. Орчин үед бүх зүйл интернеттэй холбогдож байгаа тул cybersecurity маш чухал болоод байна.

Cybersecurity нь:
- Хувийн мэдээллийг хамгаалах
- Бизнесийн өгөгдлийг хамгаалах
- Үндэсний аюулгүй байдлыг хамгаалах
- Сүлжээний халдлагаас сэргийлэх

Хакер, malware, phishing, ransomware зэрэг аюул заналхийлэл өдөр бүр нэмэгдэж байна. Тиймээс cybersecurity мэргэжилтэнүүдийн эрэлт маш өндөр байна.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Cybersecurity суралцах шалтгаанууд:**

• Өндөр эрэлт - Олон компани cybersecurity мэргэжилтэн хайж байдаг
• Өндөр цалин - Хамгийн өндөр цалинтай мэргэжилтнүүдийн нэг
• Аюул заналхийлэл нэмэгдэж байна - Хакер, вирус өдөр бүр шинэчлэгдэж байна
• Бүх салбарт хэрэгтэй - Банк, эрүүл мэнд, засгийн газар, компани
• Карьерын боломж - Security analyst, penetration tester, security engineer
• Хувийн мэдээлэл хамгаалах - Өөрийн мэдээллийг хамгаалах чадвар
• Үндэсний аюулгүй байдал - Улс орны мэдээллийг хамгаалах`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Аюул заналхийлэл (Threats):**
- Malware: Вирус, trojan, ransomware
- Phishing: Хуурамч email, website
- DDoS: Distributed Denial of Service attack
- SQL Injection: Database халдлага
- XSS: Cross-Site Scripting

**Хамгаалалт (Protection):**
- Firewall: Сүлжээний хамгаалалт
- Antivirus: Вирус сэргийлэх
- Encryption: Өгөгдөл шифрлэх
- Authentication: Хэрэглэгч баталгаажуулах
- Authorization: Эрх удирдах

**Хамгаалалтын арга:**
- Password security: Хүчирхэг нууц үг
- Two-factor authentication (2FA)
- Regular updates: Систем шинэчлэх
- Backup: Өгөгдөл нөөцлөх
- Security awareness: Мэдлэг тараах

**Ethical Hacking:**
- Penetration testing: Системийн сул талыг олох
- Vulnerability assessment: Аюул заналхийлэл үнэлэх`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Password validation
function validatePassword(password) {
  // Хамгийн багадаа 8 тэмдэгт
  if (password.length < 8) {
    return false;
  }
  
  // Том үсэг агуулах
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  
  // Жижиг үсэг агуулах
  if (!/[a-z]/.test(password)) {
    return false;
  }
  
  // Тоо агуулах
  if (!/[0-9]/.test(password)) {
    return false;
  }
  
  // Тусгай тэмдэгт агуулах
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }
  
  return true;
}

// Password hashing (bcrypt)
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function verifyPassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

// SQL Injection prevention
// ❌ Буруу (vulnerable)
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;

// ✅ Зөв (parameterized query)
const query = 'SELECT * FROM users WHERE username = ?';
db.query(query, [username]);

// XSS prevention
function sanitizeInput(input) {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Encryption example (Node.js crypto)
const crypto = require('crypto');

function encrypt(text, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Rate limiting (DDoS prevention)
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100 // Хамгийн ихдээ 100 request
});

app.use('/api/', limiter);`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Хүчирхэг нууц үг үүсгэх функц бичих",
          "Password validation хийх (том, жижиг үсэг, тоо, тусгай тэмдэгт)",
          "Input sanitization хийх (XSS prevention)",
          "Basic encryption/decryption функц бичих",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "SQL injection prevention (parameterized queries)",
          "Rate limiting хэрэгжүүлэх",
          "JWT token authentication систем",
          "HTTPS connection тохируулах",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Penetration testing tool үүсгэх",
          "Vulnerability scanner хийх",
          "Security audit хийх",
          "Incident response plan бэлтгэх",
        ],
      },
    ],
    quiz: [
      {
        question: "Cybersecurity гэж юу вэ?",
        options: [
          "Компьютер засах",
          "Кибер аюулгүй байдал - систем хамгаалах",
          "Програм суулгах",
          "Интернет ашиглах",
        ],
        correctAnswer: 1,
        explanation: "Cybersecurity нь компьютер систем, сүлжээ, программуудыг хакер, вирус, мэдээллийн алдагдлаас хамгаалах практик юм.",
      },
      {
        question: "Phishing гэж юу вэ?",
        options: [
          "Загас барих",
          "Хуурамч email, website ашиглан мэдээлэл авах",
          "Вирус устгах",
          "Нууц үг солих",
        ],
        correctAnswer: 1,
        explanation: "Phishing нь хакерууд хуурамч email эсвэл website ашиглан хэрэглэгчдийн мэдээлэл (нууц үг, банкны мэдээлэл) авах арга юм.",
      },
      {
        question: "DDoS attack гэж юу вэ?",
        options: [
          "Database халдлага",
          "Distributed Denial of Service - олон газраас хамтдаа request илгээж серверийг унтраах",
          "Вирус тараах",
          "Нууц үг таах",
        ],
        correctAnswer: 1,
        explanation: "DDoS (Distributed Denial of Service) нь олон компьютерээс нэгэн зэрэг request илгээж серверийг унтраах халдлага юм.",
      },
      {
        question: "SQL Injection-оос хамгаалах хамгийн сайн арга юу вэ?",
        options: [
          "Нууц үг хүчирхэг болгох",
          "Parameterized queries ашиглах",
          "Firewall ашиглах",
          "Antivirus суулгах",
        ],
        correctAnswer: 1,
        explanation: "SQL Injection-оос хамгаалах хамгийн сайн арга нь parameterized queries (prepared statements) ашиглах юм.",
      },
      {
        question: "XSS (Cross-Site Scripting) гэж юу вэ?",
        options: [
          "CSS файл нэмэх",
          "Хакер JavaScript код оруулж хэрэглэгчдийн мэдээлэл авах",
          "Зураг нэмэх",
          "Video татах",
        ],
        correctAnswer: 1,
        explanation: "XSS нь хакерууд вэб хуудас руу JavaScript код оруулж, хэрэглэгчдийн cookie, session мэдээлэл авах халдлага юм.",
      },
    ],
  },
  "machine-learning": {
    slug: "machine-learning",
    title: "Machine Learning",
    icon: "🤖",
    description: "Машин сургалт ба хиймэл оюун ухаан",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Machine Learning (Машин сургалт) нь компьютерт программчлалгүйгээр өгөгдлөөс суралцаж, таамаглал хийх боломж олгодог AI-ийн салбар юм. Machine Learning нь өгөгдлөөс pattern олж, ирээдүйн өгөгдөл дээр таамаглал хийх чадвартай.

Machine Learning-ийн төрлүүд:
- Supervised Learning: Label-тэй өгөгдлөөс суралцах
- Unsupervised Learning: Label-гүй өгөгдлөөс pattern олох
- Reinforcement Learning: Туршлагаас суралцах

Machine Learning нь:
- Зураг таних (Image recognition)
- Дуу хоолой таних (Speech recognition)
- Орчуулга (Translation)
- Зөөлөн зөвлөх систем (Recommendation systems)
- Автомашины удирдлага (Self-driving cars)
- Эмнэлгийн оношлогоо (Medical diagnosis)

Google, Facebook, Netflix, Amazon зэрэг компаниуд Machine Learning өргөнөөр ашигладаг.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Machine Learning суралцах шалтгаанууд:**

• Ирээдүйн технологи - AI нь бүх салбарт хэрэглэгдэж байна
• Өндөр цалин - ML engineer-үүд дэлхийн хамгийн өндөр цалинтай
• Бодит асуудал шийдэх - Эмнэлгийн оношлогоо, хөдөлгөөнт тээвэр
• Олон салбарт хэрэглэгдэнэ - Эрүүл мэнд, санхүү, худалдаа, боловсрол
• Том компаниуд ашигладаг - Google, Facebook, Netflix
• Automation - Давтагдах ажлыг автоматжуулах
• Creativity - Зураг, хөгжим, текст үүсгэх
• Эрэлт өндөр - ML мэргэжилтэн хайж байгаа компани олон`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Supervised Learning:**
Label-тэй өгөгдлөөс суралцах. Жишээ: Зургаас нохой, муур таних.

**Unsupervised Learning:**
Label-гүй өгөгдлөөс pattern олох. Жишээ: Хэрэглэгчдийг бүлэглэх.

**Reinforcement Learning:**
Туршлагаас суралцах. Жишээ: Шог, шатар тоглох AI.

**Neural Networks:**
Хүний тархины загварчилсан сүлжээ. Neurons (node) болон layer-ээс бүрдэнэ.

**Deep Learning:**
Олон layer-тэй neural network. Зураг, дуу хоолой таних.

**Training vs Testing:**
Training set: Model сургах өгөгдөл
Testing set: Model шалгах өгөгдөл

**Overfitting:**
Model training өгөгдөлд хэт сайн, шинэ өгөгдөлд муу.

**Popular Libraries:**
- Scikit-learn: Machine learning
- TensorFlow/Keras: Deep learning
- PyTorch: Deep learning
- Pandas: Өгөгдөл боловсруулах
- NumPy: Математик тооцоолол`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# Linear Regression (Scikit-learn)
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# Өгөгдөл бэлтгэх
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Model сургах
model = LinearRegression()
model.fit(X_train, y_train)

# Таамаглал хийх
predictions = model.predict(X_test)
print("Таамаглал:", predictions)

# Classification (Decision Tree)
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

# Iris dataset ашиглах
iris = load_iris()
X, y = iris.data, iris.target

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Model сургах
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

# Шалгах
accuracy = clf.score(X_test, y_test)
print(f"Нарийвчлал: {accuracy * 100:.2f}%")

# Neural Network (TensorFlow/Keras)
import tensorflow as tf
from tensorflow import keras

# Sequential model үүсгэх
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(10,)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

# Model compile хийх
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Model сургах
# model.fit(X_train, y_train, epochs=10, batch_size=32)

# Clustering (K-Means)
from sklearn.cluster import KMeans
import numpy as np

# Өгөгдөл
X = np.array([[1, 2], [1, 4], [1, 0],
              [10, 2], [10, 4], [10, 0]])

# K-Means clustering
kmeans = KMeans(n_clusters=2, random_state=0)
kmeans.fit(X)

# Бүлэглэл
labels = kmeans.labels_
print("Бүлэглэл:", labels)

# Text Classification
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Текст өгөгдөл
texts = ['Би Python дуртай', 'Python хялбар', 'JavaScript сайн']
labels = [1, 1, 0]  # 1 = эерэг, 0 = сөрөг

# Vectorization
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# Model сургах
classifier = MultinomialNB()
classifier.fit(X, labels)

# Шинэ текст таамаглах
new_text = ['Python програмчлал']
new_X = vectorizer.transform(new_text)
prediction = classifier.predict(new_X)
print("Таамаглал:", prediction)`,
      language: "python",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Linear Regression model сургах",
          "Classification model (Decision Tree) хийх",
          "K-Means clustering ашиглан өгөгдөл бүлэглэх",
          "Text classification хийх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Neural Network үүсгэх (TensorFlow/Keras)",
          "Model evaluation хийх (accuracy, precision, recall)",
          "Overfitting-оос сэргийлэх (regularization)",
          "Cross-validation ашиглах",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "CNN ашиглан зураг ангилах",
          "RNN/LSTM ашиглан текст үүсгэх",
          "Transfer Learning ашиглах",
          "Model deployment хийх",
        ],
      },
    ],
    quiz: [
      {
        question: "Machine Learning гэж юу вэ?",
        options: [
          "Компьютер суралцаж дадлага хийх",
          "Машин засах технологи",
          "Интернетийн хурд нэмэгдүүлэх",
          "Программ бичих арга",
        ],
        correctAnswer: 0,
        explanation: "Machine Learning нь компьютерт программчлалгүйгээр өгөгдлөөс суралцаж дадлага хийх боломж олгодог.",
      },
      {
        question: "Supervised Learning гэж юу вэ?",
        options: [
          "Label-тэй өгөгдлөөс суралцах",
          "Label-гүй өгөгдлөөс суралцах",
          "Багш заадаг систем",
          "Автоматаар ажилладаг систем",
        ],
        correctAnswer: 0,
        explanation: "Supervised Learning нь label (answer) бүхий өгөгдлөөс суралцах machine learning төрөл юм.",
      },
      {
        question: "Neural Network гэж юу вэ?",
        options: [
          "Интернетийн сүлжээ",
          "Хүний тархины загварчилсан сүлжээ",
          "Компьютерийн сүлжээ",
          "WiFi сүлжээ",
        ],
        correctAnswer: 1,
        explanation: "Neural Network нь хүний тархины загварчилсан сүлжээ бөгөөд neurons (node) болон layer-ээс бүрдэнэ.",
      },
      {
        question: "Overfitting гэж юу вэ?",
        options: [
          "Model хэт сайн суралцсан",
          "Model training өгөгдөлд хэт сайн, шинэ өгөгдөлд муу",
          "Model муу суралцсан",
          "Model суралцаагүй",
        ],
        correctAnswer: 1,
        explanation: "Overfitting нь model training өгөгдөлд хэт сайн ажилладаг боловч шинэ өгөгдөлд муу ажилладаг асуудал юм.",
      },
      {
        question: "Python дээр хамгийн түгээмэл Machine Learning library аль нь вэ?",
        options: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
        correctAnswer: 2,
        explanation: "Scikit-learn нь Python дээрх хамгийн түгээмэл Machine Learning library юм.",
      },
    ],
  },
  "computer-vision": {
    slug: "computer-vision",
    title: "Computer Vision",
    icon: "👁️",
    description: "Компьютерийн хараа ба зураг боловсруулалт",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Computer Vision (Компьютерийн хараа) нь компьютерт зургийг ойлгож, боловсруулах, таних чадвар олгох AI-ийн салбар юм. Computer Vision нь хүний харааны системийг загварчилж, компьютерт зургийг ойлгох, таних, шинжилгээ хийх боломжийг олгодог.

Computer Vision-ийн хэрэглээ:
- Нүүр таних (Face recognition)
- Объект илрүүлэх (Object detection)
- Зураг ангилах (Image classification)
- Автомашины удирдлага (Self-driving cars)
- Эмнэлгийн зураг шинжилгээ (Medical imaging)
- QR code, barcode унших
- Зураг засварлах (Image editing)
- Augmented Reality (AR)

Google, Facebook, Tesla, Amazon зэрэг компаниуд Computer Vision өргөнөөр ашигладаг.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Computer Vision суралцах шалтгаанууд:**

• Ирээдүйн технологи - AR, VR, self-driving cars
• Өндөр цалин - CV engineer-үүд өндөр цалинтай
• Олон салбарт хэрэглэгдэнэ - Эрүүл мэнд, хөдөлгөөнт тээвэр, худалдаа
• Бодит асуудал шийдэх - Нүүр таних, объект илрүүлэх
• Automation - Зураг автоматаар боловсруулах
• Том компаниуд ашигладаг - Google, Tesla, Amazon
• Эрэлт өндөр - CV мэргэжилтэн хайж байгаа компани олон
• Creativity - Зураг үүсгэх, засварлах AI`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Image Processing:**
Зураг боловсруулах - шүүх, өнгө өөрчлөх, хэмжээ өөрчлөх.

**Image Classification:**
Зураг ямар ангилалд хамаарах таних. Жишээ: Нохой эсвэл муур.

**Object Detection:**
Зураг доторх объектуудыг олох, байрлал тодорхойлох.

**Face Recognition:**
Нүүр таних, хүнийг таних.

**Convolutional Neural Networks (CNN):**
Зураг танихдаа хамгийн сайн ажилладаг neural network.

**Image Segmentation:**
Зураг доторх хэсгүүдийг тусгаарлах.

**Feature Extraction:**
Зургийн онцлог шинж чанарыг олох.

**Popular Libraries:**
- OpenCV: Зураг боловсруулах
- TensorFlow/Keras: Deep learning
- PyTorch: Deep learning
- PIL/Pillow: Зураг унших, засварлах
- YOLO: Real-time object detection`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# Image Processing with OpenCV
import cv2
import numpy as np

# Зураг унших
img = cv2.imread('image.jpg')

# Зургийн хэмжээ
height, width = img.shape[:2]
print(f"Хэмжээ: {width}x{height}")

# Зураг хэмжээ өөрчлөх
resized = cv2.resize(img, (800, 600))

# Хар цагаан болгох
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Зураг шүүх (blur)
blurred = cv2.GaussianBlur(img, (15, 15), 0)

# Edge detection (Canny)
edges = cv2.Canny(gray, 100, 200)

# Зураг хадгалах
cv2.imwrite('output.jpg', resized)

# Image Classification with TensorFlow/Keras
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# CNN Model үүсгэх
model = keras.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Model compile
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Face Detection with OpenCV
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Нүүр илрүүлэх
faces = face_cascade.detectMultiScale(gray, 1.1, 4)

# Нүүр дээр тэгш өнцөгт зурах
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

# Object Detection with YOLO
from ultralytics import YOLO

# YOLO model ачаалах
model = YOLO('yolov8n.pt')

# Объект илрүүлэх
results = model('image.jpg')

# Үр дүн харуулах
for result in results:
    boxes = result.boxes
    for box in boxes:
        # Объектын ангилал
        cls = int(box.cls[0])
        # Нарийвчлал
        conf = float(box.conf[0])
        print(f"Объект: {model.names[cls]}, Нарийвчлал: {conf:.2f}")

# Image Augmentation
from tensorflow.keras.preprocessing.image import ImageDataGenerator

datagen = ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True,
    zoom_range=0.2
)

# Зураг өөрчлөх
augmented = datagen.flow_from_directory('data/', save_to_dir='augmented/')`,
      language: "python",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "OpenCV ашиглан зураг унших, хадгалах",
          "Зураг хэмжээ өөрчлөх, хар цагаан болгох",
          "Edge detection хийх (Canny)",
          "Basic image filtering хийх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "CNN ашиглан зураг ангилах",
          "Face detection хийх",
          "Object detection (YOLO) ашиглах",
          "Image augmentation хийх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Real-time video processing",
          "Image segmentation хийх",
          "Transfer learning ашиглан custom model сургах",
          "AR application үүсгэх",
        ],
      },
    ],
    quiz: [
      {
        question: "Computer Vision гэж юу вэ?",
        options: [
          "Компьютерийн дэлгэц",
          "Зураг, видеог ойлгох AI",
          "Нүдний шинжилгээ",
          "3D график",
        ],
        correctAnswer: 1,
        explanation: "Computer Vision нь зураг болон видеог ойлгож боловсруулах AI-ийн салбар юм.",
      },
      {
        question: "CNN гэж юу вэ?",
        options: [
          "Computer Network",
          "Convolutional Neural Network - зураг танихдаа сайн",
          "Central Network",
          "Cloud Network",
        ],
        correctAnswer: 1,
        explanation: "CNN (Convolutional Neural Network) нь зураг танихдаа хамгийн сайн ажилладаг neural network юм.",
      },
      {
        question: "Object Detection гэж юу вэ?",
        options: [
          "Объект үүсгэх",
          "Зураг доторх объектуудыг олох, байрлал тодорхойлох",
          "Объект устгах",
          "Объект хадгалах",
        ],
        correctAnswer: 1,
        explanation: "Object Detection нь зураг доторх объектуудыг олох, байрлал тодорхойлох технологи юм.",
      },
      {
        question: "OpenCV гэж юу вэ?",
        options: [
          "Open Computer Vision - зураг боловсруулах library",
          "Open Code",
          "Open Cloud",
          "Open Codebase",
        ],
        correctAnswer: 0,
        explanation: "OpenCV (Open Source Computer Vision Library) нь зураг болон видеог боловсруулах хамгийн алдартай library юм.",
      },
      {
        question: "YOLO гэж юу вэ?",
        options: [
          "You Only Live Once",
          "You Only Look Once - real-time object detection algorithm",
          "Your Own Language Object",
          "Young Online Learning Object",
        ],
        correctAnswer: 1,
        explanation: "YOLO (You Only Look Once) нь real-time object detection хийх хурдан алгоритм юм.",
      },
    ],
  },
  nlp: {
    slug: "nlp",
    title: "Neural Language Model",
    icon: "💬",
    description: "Байгалийн хэл боловсруулалт ба neural language models",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `NLP (Natural Language Processing) буюу Байгалийн хэл боловсруулалт нь хүний хэлийг компьютер ойлгож, боловсруулах, үүсгэх чадвар олгох AI-ийн салбар юм. Neural Language Models нь NLP-ийн хамгийн дэвшилтэт технологи бөгөөд transformer архитектур ашиглан текст ойлгож, үүсгэх чадвартай.

NLP-ийн хэрэглээ:
- ChatGPT, GPT-4 зэрэг chatbot
- Орчуулга (Google Translate)
- Sentiment analysis (Сэтгэл санаа шинжилгээ)
- Text summarization (Текст хураангуйлах)
- Question answering
- Text generation
- Named Entity Recognition (NER)
- Speech recognition

OpenAI, Google, Microsoft зэрэг компаниуд NLP-ийн дэвшилтэт model-ууд үүсгэж байна.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**NLP суралцах шалтгаанууд:**

• ChatGPT, GPT-4 - Одоогийн хамгийн алдартай AI
• Орчуулга - Хэл орчуулах систем
• Chatbot - Хэрэглэгчтэй харилцах AI
• Sentiment analysis - Сошиал медиа дээрх сэтгэл санаа шинжилгээ
• Text generation - Текст автоматаар үүсгэх
• Өндөр цалин - NLP engineer-үүд өндөр цалинтай
• Олон салбарт хэрэглэгдэнэ - Бизнес, эрүүл мэнд, боловсрол
• Эрэлт өндөр - NLP мэргэжилтэн хайж байгаа компани олон`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Tokenization:**
Текст-ийг жижиг хэсэг (token) болгон хуваах.

**Word Embeddings:**
Үгсийг тоон вектор хэлбэрт шилжүүлэх. Word2Vec, GloVe.

**Transformer Architecture:**
Attention mechanism ашигласан neural network. GPT, BERT-ийн үндэс.

**Language Models:**
Текст үүсгэх, таамаглах model. GPT, BERT, T5.

**Fine-tuning:**
Pre-trained model-ийг тодорхой даалгаварт тохируулах.

**Prompt Engineering:**
AI-д зөв зааварчилгаа өгөх.

**Text Classification:**
Текст ямар ангилалд хамаарах таних.

**Named Entity Recognition (NER):**
Текст доторх нэр, байршил, огноо зэргийг олох.

**Popular Libraries:**
- Transformers (Hugging Face): Pre-trained models
- spaCy: NLP library
- NLTK: Natural Language Toolkit
- OpenAI API: GPT models
- LangChain: LLM applications`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# Text Classification with spaCy
import spacy

# spaCy model ачаалах
nlp = spacy.load("en_core_web_sm")

# Текст боловсруулах
text = "I love programming with Python"
doc = nlp(text)

# Үг, tag, entity харах
for token in doc:
    print(f"{token.text} - {token.pos_} - {token.tag_}")

# Named Entity Recognition
text = "Apple is looking at buying U.K. startup for $1 billion"
doc = nlp(text)
for ent in doc.ents:
    print(f"{ent.text} - {ent.label_}")

# Sentiment Analysis
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
result = classifier("I love this product!")
print(result)

# Text Generation with GPT
from transformers import GPT2LMHeadModel, GPT2Tokenizer

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

text = "The future of AI is"
inputs = tokenizer.encode(text, return_tensors="pt")
outputs = model.generate(inputs, max_length=50, num_return_sequences=1)
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(generated_text)

# OpenAI API (ChatGPT)
import openai

openai.api_key = "your-api-key"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is Python?"}
    ]
)

print(response.choices[0].message.content)

# Text Summarization
from transformers import pipeline

summarizer = pipeline("summarization")
text = """
Artificial intelligence is transforming the world...
[long text]
"""

summary = summarizer(text, max_length=100, min_length=30)
print(summary[0]['summary_text'])

# Tokenization
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
text = "Hello, how are you?"
tokens = tokenizer.tokenize(text)
print(tokens)

# Word Embeddings
import gensim.downloader as api

# Pre-trained Word2Vec model
word_vectors = api.load("word2vec-google-news-300")

# Үгтэй төстэй үгс
similar_words = word_vectors.most_similar("python")
print(similar_words)

# Text Translation
from transformers import pipeline

translator = pipeline("translation", model="Helsinki-NLP/opus-mt-en-mn")
text = "Hello, how are you?"
translated = translator(text)
print(translated[0]['translation_text'])`,
      language: "python",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "spaCy ашиглан текст боловсруулах",
          "Tokenization хийх",
          "Named Entity Recognition хийх",
          "Basic sentiment analysis хийх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Text classification model сургах",
          "Text generation (GPT) ашиглах",
          "Text summarization хийх",
          "Translation model ашиглах",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Chatbot үүсгэх (OpenAI API)",
          "Fine-tuning pre-trained model",
          "LangChain ашиглан LLM application",
          "RAG (Retrieval Augmented Generation) систем",
        ],
      },
    ],
    quiz: [
      {
        question: "NLP гэж юу вэ?",
        options: [
          "Network Language Protocol",
          "Natural Language Processing - хүний хэлийг ойлгох AI",
          "New Language Program",
          "Natural Learning Process",
        ],
        correctAnswer: 1,
        explanation: "NLP (Natural Language Processing) нь хүний хэлийг компьютер ойлгож, боловсруулах AI-ийн салбар юм.",
      },
      {
        question: "Transformer architecture-ийн гол онцлог юу вэ?",
        options: [
          "Convolutional layers",
          "Attention mechanism",
          "Recurrent layers",
          "Linear layers",
        ],
        correctAnswer: 1,
        explanation: "Transformer architecture нь attention mechanism ашигладаг бөгөөд энэ нь GPT, BERT зэрэг model-уудын үндэс юм.",
      },
      {
        question: "GPT гэж юу вэ?",
        options: [
          "General Purpose Technology",
          "Generative Pre-trained Transformer - текст үүсгэх model",
          "General Programming Tool",
          "Graph Processing Technology",
        ],
        correctAnswer: 1,
        explanation: "GPT (Generative Pre-trained Transformer) нь OpenAI-аас гаргасан текст үүсгэх neural language model юм.",
      },
      {
        question: "Tokenization гэж юу вэ?",
        options: [
          "Токен үүсгэх",
          "Текст-ийг жижиг хэсэг (token) болгон хуваах",
          "Токен хадгалах",
          "Токен шалгах",
        ],
        correctAnswer: 1,
        explanation: "Tokenization нь текст-ийг жижиг хэсэг (token) болгон хуваах процесс юм.",
      },
      {
        question: "Fine-tuning гэж юу вэ?",
        options: [
          "Model-ийг бүрэн дахин сургах",
          "Pre-trained model-ийг тодорхой даалгаварт тохируулах",
          "Model-ийг устгах",
          "Model-ийг хадгалах",
        ],
        correctAnswer: 1,
        explanation: "Fine-tuning нь аль хэдийн сургасан (pre-trained) model-ийг тодорхой даалгаварт тохируулах процесс юм.",
      },
    ],
  },
  "prompt-engineering": {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    icon: "🎯",
    description: "AI prompt инженерчлэл - ChatGPT, GPT-4-т зөв зааварчилгаа өгөх",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Prompt Engineering (Зааварчилгааны инженерчлэл) нь AI model-уудад (ChatGPT, GPT-4, Claude зэрэг) зөв зааварчилгаа (prompt) өгөж, хамгийн сайн үр дүн авах ур чадвар юм. Prompt Engineering нь AI-тай хамтран ажиллах хамгийн чухал ур чадвар болоод байна.

Prompt Engineering-ийн хэрэглээ:
- ChatGPT, GPT-4-т зөв асуулт асуух
- AI-д нарийн зааварчилгаа өгөх
- Code generation - Программ код үүсгэх
- Content creation - Текст, блог, нийтлэл үүсгэх
- Data analysis - Өгөгдөл шинжилгээ хийх
- Translation - Орчуулга хийх
- Summarization - Хураангуйлах

Орчин үед олон компани Prompt Engineer-үүд ажилд авч байна. Энэ нь ирээдүйн хамгийн эрэлттэй ур чадваруудын нэг болоод байна.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Prompt Engineering суралцах шалтгаанууд:**

• AI-тай үр дүнтэй ажиллах - Зөв prompt = сайн үр дүн
• Өндөр цалин - Prompt Engineer-үүд өндөр цалинтай
• Бүх салбарт хэрэгтэй - Програмчлал, маркетинг, боловсрол
• Productivity нэмэгдүүлэх - Ажлыг хурдан, үр дүнтэй хийх
• Code generation - Программ код хурдан үүсгэх
• Content creation - Текст, нийтлэл автоматаар үүсгэх
• Эрэлт өндөр - Олон компани Prompt Engineer хайж байна
• Ирээдүйн ур чадвар - AI-тай ажиллах стандарт болоод байна`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Prompt Structure:**
- Context: Нөхцөл байдал, мэдээлэл
- Task: Хийх зүйл
- Format: Үр дүнгийн хэлбэр
- Examples: Жишээ

**Prompt Techniques:**
- Zero-shot: Жишээгүйгээр зааварчилгаа өгөх
- Few-shot: Цөөн жишээ өгөх
- Chain-of-Thought: Алхам алхмаар бодох
- Role-playing: Тодорхой дүр үүсгэх

**Best Practices:**
- Тодорхой, нарийн зааварчилгаа
- Context нэмэх
- Format заах
- Examples өгөх
- Iterative refinement

**Common Patterns:**
- "Act as..." - Дүр үүсгэх
- "Step by step" - Алхам алхмаар
- "Let's think..." - Бодох процесс
- "Format as..." - Хэлбэр заах

**Tools:**
- OpenAI Playground
- ChatGPT
- Claude
- LangChain
- Prompt templates`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `# OpenAI API ашиглан Prompt Engineering
import openai

openai.api_key = "your-api-key"

# 1. Basic Prompt
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Python гэж юу вэ?"}
    ]
)

# 2. Role-playing Prompt
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Та бол туршлагатай программист."},
        {"role": "user", "content": "React component хэрхэн үүсгэх вэ?"}
    ]
)

# 3. Few-shot Prompt (Жишээ өгөх)
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": """
Жишээ:
Input: "HTML"
Output: "HTML нь вэб хуудасны бүтэц юм."

Input: "CSS"
Output: "CSS нь вэб хуудасны загвар юм."

Input: "JavaScript"
Output:
"""}
    ]
)

# 4. Chain-of-Thought Prompt
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": """
Асуудал: 5 хүн 5 өдөрт 5 ажил хийвэл, 10 хүн 10 өдөрт хэдэн ажил хийх вэ?

Алхам алхмаар бодоорой:
1. Нэг хүн нэг өдөрт хэдэн ажил хийх вэ?
2. 10 хүн нэг өдөрт хэдэн ажил хийх вэ?
3. 10 хүн 10 өдөрт хэдэн ажил хийх вэ?
"""}
    ]
)

# 5. Format-specific Prompt
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": """
Дараах өгөгдлийг JSON форматтайгаар буцаа:
- Нэр: Болд
- Нас: 17
- Хичээл: Python, JavaScript
"""}
    ]
)

# 6. Code Generation Prompt
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Та бол туршлагатай Python программист."},
        {"role": "user", "content": """
Python ашиглан calculator class үүсгэ. 
- add, subtract, multiply, divide method-ууд байх
- Error handling хийх
- Docstring нэмэх
"""}
    ]
)

# 7. Iterative Refinement
# Эхний prompt
prompt1 = "Блог бич"
response1 = openai.ChatCompletion.create(...)

# Сайжруулсан prompt
prompt2 = """
Блог бич: "Python суралцах 5 шалтгаан"
- 500-800 үг
- SEO-friendly
- Жишээ код агуулах
- Дүгнэлт хэсэг байх
"""
response2 = openai.ChatCompletion.create(...)

# Prompt Template
def create_prompt(topic, format_type, length):
    return f"""
Сэдэв: {topic}
Формат: {format_type}
Урт: {length} үг

Дараах бүтэцтэй байх:
1. Оршил
2. Гол хэсэг
3. Дүгнэлт
"""
`,
      language: "python",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "ChatGPT-д энгийн асуулт асуух",
          "Role-playing prompt ашиглах",
          "Format-specific prompt (JSON, markdown) хийх",
          "Few-shot prompt (жишээ өгөх) хийх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Chain-of-Thought prompt хийх",
          "Code generation prompt үүсгэх",
          "Content creation prompt (блог, нийтлэл)",
          "Data analysis prompt хийх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Prompt template систем үүсгэх",
          "LangChain ашиглан prompt chain хийх",
          "A/B testing хийх (өөр өөр prompt-ууд)",
          "Production-ready prompt system",
        ],
      },
    ],
    quiz: [
      {
        question: "Prompt Engineering гэж юу вэ?",
        options: [
          "Программ бичих",
          "AI model-уудад зөв зааварчилгаа өгөж сайн үр дүн авах",
          "Компьютер засах",
          "Интернет ашиглах",
        ],
        correctAnswer: 1,
        explanation: "Prompt Engineering нь AI model-уудад (ChatGPT, GPT-4) зөв зааварчилгаа өгөж, хамгийн сайн үр дүн авах ур чадвар юм.",
      },
      {
        question: "Few-shot prompt гэж юу вэ?",
        options: [
          "Жишээгүйгээр зааварчилгаа өгөх",
          "Цөөн жишээ өгөх",
          "Олон жишээ өгөх",
          "Жишээ шаардлагагүй",
        ],
        correctAnswer: 1,
        explanation: "Few-shot prompt нь AI-д цөөн жишээ өгөж, хүссэн формат, хэв маягийг заах арга юм.",
      },
      {
        question: "Chain-of-Thought prompt-ийн давуу тал юу вэ?",
        options: [
          "Хурдан хариулах",
          "Алхам алхмаар бодох процесс харуулах, илүү нарийвчилсан хариу авах",
          "Бага санах ой ашиглах",
          "Илүү хялбар",
        ],
        correctAnswer: 1,
        explanation: "Chain-of-Thought prompt нь AI-д алхам алхмаар бодох процесс зааж, илүү нарийвчилсан, зөв хариу авах боломжийг олгодог.",
      },
      {
        question: "Role-playing prompt-ийн зорилго юу вэ?",
        options: [
          "Тоглоом тоглох",
          "AI-д тодорхой дүр үүсгэж, тухайн дүрт тохирсон хариу авах",
          "Дүр солих",
          "Дүр үүсгэхгүй",
        ],
        correctAnswer: 1,
        explanation: "Role-playing prompt нь AI-д тодорхой дүр (жишээ: туршлагатай программист, багш) үүсгэж, тухайн дүрт тохирсон мэргэжлийн хариу авах арга юм.",
      },
      {
        question: "Prompt-ийг сайжруулах хамгийн сайн арга юу вэ?",
        options: [
          "Богино prompt",
          "Тодорхой, нарийн зааварчилгаа, context нэмэх, iterative refinement",
          "Олон удаа асуух",
          "Том prompt",
        ],
        correctAnswer: 1,
        explanation: "Prompt-ийг сайжруулах хамгийн сайн арга нь тодорхой, нарийн зааварчилгаа өгөх, context нэмэх, format заах, iterative refinement (дараа дараа сайжруулах) хийх юм.",
      },
    ],
  },
  "web-app-structure": {
    slug: "web-app-structure",
    title: "Web/App Structure and Technology",
    icon: "🏗️",
    description: "Вэб болон апликейшний бүтэц, архитектур, технологиуд",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `Web/App Structure and Technology нь вэб болон мобайл апликейшний бүтэц, архитектур, технологийн стек, design pattern-уудыг судалдаг сэдэв юм. Орчин үеийн апликейшн үүсгэхэд зөв архитектур, технологийн сонголт маш чухал.

Вэб апликейшний бүтэц:
- Frontend: Хэрэглэгчийн интерфейс (React, Vue, Angular)
- Backend: Серверийн логик (Node.js, Python, Java)
- Database: Өгөгдөл хадгалах (MongoDB, PostgreSQL, MySQL)
- API: Frontend болон Backend хоорондын холбоо

Мобайл апликейшний бүтэц:
- Native: iOS (Swift), Android (Kotlin)
- Cross-platform: React Native, Flutter
- Hybrid: Ionic, Cordova

Architecture Patterns:
- MVC (Model-View-Controller)
- RESTful API
- Microservices
- Serverless
- Monolithic vs Microservices`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**Web/App Structure суралцах шалтгаанууд:**

• Full-stack хөгжүүлэгч болох - Frontend болон Backend мэдэх
• Зөв архитектур сонгох - Scalable, maintainable апликейшн
• Технологийн стек сонгох - Төсөлд тохирох технологи
• Design patterns мэдэх - Код зохион байгуулалт
• Performance optimization - Хурдан, хэмжээтэй апликейшн
• Security best practices - Аюулгүй апликейшн
• DevOps мэдэх - Deploy, CI/CD
• Карьерын боломж - Full-stack developer, architect`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**Frontend Technologies:**
- HTML, CSS, JavaScript
- React, Vue, Angular
- Next.js, Nuxt.js
- Tailwind CSS, Bootstrap

**Backend Technologies:**
- Node.js, Express
- Python (Django, Flask)
- Java (Spring Boot)
- PHP (Laravel)

**Database:**
- SQL: PostgreSQL, MySQL
- NoSQL: MongoDB, Redis
- GraphQL

**API:**
- RESTful API
- GraphQL
- WebSocket

**Architecture Patterns:**
- MVC: Model-View-Controller
- MVP: Model-View-Presenter
- MVVM: Model-View-ViewModel
- Microservices
- Serverless

**Deployment:**
- Vercel, Netlify (Frontend)
- AWS, Google Cloud, Azure
- Docker, Kubernetes
- CI/CD: GitHub Actions, Jenkins`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// Full-stack App Structure Example

// 1. Frontend (React + Next.js)
// app/page.tsx
export default function HomePage() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <div>
      <h1>Users</h1>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

// 2. Backend API (Next.js API Route)
// app/api/users/route.ts
export async function GET() {
  const users = await db.users.findMany();
  return Response.json(users);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const user = await db.users.create({
    data: { name, email }
  });
  return Response.json(user);
}

// 3. Database Schema (Prisma)
// prisma/schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}

// 4. RESTful API Structure
// GET    /api/users      - Бүх хэрэглэгч
// GET    /api/users/:id  - Нэг хэрэглэгч
// POST   /api/users      - Шинэ хэрэглэгч
// PUT    /api/users/:id  - Хэрэглэгч шинэчлэх
// DELETE /api/users/:id  - Хэрэглэгч устгах

// 5. MVC Pattern Example
// Model (models/User.js)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  save() {
    // Database-д хадгалах
  }
}

// View (components/UserView.jsx)
function UserView({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Controller (controllers/userController.js)
export function getUser(req, res) {
  const user = User.findById(req.params.id);
  res.json(user);
}

// 6. Microservices Architecture
// User Service
app.get('/api/users', getUserHandler);

// Product Service  
app.get('/api/products', getProductHandler);

// Order Service
app.post('/api/orders', createOrderHandler);

// 7. Environment Configuration
// .env
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL=https://api.example.com
JWT_SECRET=your-secret-key

// 8. Docker Configuration
// Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Full-stack app бүтэц үүсгэх (Frontend + Backend)",
          "RESTful API endpoint-ууд үүсгэх",
          "Database schema дизайн хийх",
          "Environment variables тохируулах",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "MVC pattern ашиглан app хийх",
          "API authentication (JWT) нэмэх",
          "Database migration хийх",
          "Error handling болон validation",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Microservices architecture дизайн хийх",
          "Docker containerization",
          "CI/CD pipeline тохируулах",
          "Performance optimization (caching, CDN)",
        ],
      },
    ],
    quiz: [
      {
        question: "Full-stack app гэж юу вэ?",
        options: [
          "Зөвхөн frontend",
          "Frontend болон backend аль алиныг хөгжүүлэх",
          "Зөвхөн backend",
          "Database",
        ],
        correctAnswer: 1,
        explanation: "Full-stack app нь frontend (хэрэглэгчийн интерфейс) болон backend (серверийн логик) аль алиныг хөгжүүлдэг апликейшн юм.",
      },
      {
        question: "RESTful API гэж юу вэ?",
        options: [
          "REST protocol",
          "HTTP method-ууд (GET, POST, PUT, DELETE) ашиглах стандарт",
          "GraphQL",
          "WebSocket",
        ],
        correctAnswer: 1,
        explanation: "RESTful API нь HTTP method-ууд (GET, POST, PUT, DELETE) ашиглан өгөгдөл солилцох стандарт архитектур юм.",
      },
      {
        question: "MVC pattern гэж юу вэ?",
        options: [
          "Model-View-Component",
          "Model-View-Controller - код зохион байгуулах загвар",
          "Main-View-Controller",
          "Module-View-Controller",
        ],
        correctAnswer: 1,
        explanation: "MVC (Model-View-Controller) нь апликейшний кодыг Model (өгөгдөл), View (интерфейс), Controller (логик) гэж хуваах design pattern юм.",
      },
      {
        question: "Microservices architecture-ийн давуу тал юу вэ?",
        options: [
          "Хурдан ажиллах",
          "Scalable, maintainable, бие даасан сервисүүд",
          "Бага санах ой",
          "Хялбар код",
        ],
        correctAnswer: 1,
        explanation: "Microservices architecture нь апликейшнийг жижиг, бие даасан сервисүүдэд хувааж, scalable, maintainable болгодог.",
      },
      {
        question: "CI/CD гэж юу вэ?",
        options: [
          "Code Integration",
          "Continuous Integration / Continuous Deployment - автомат тест, deploy",
          "Code Development",
          "Code Deployment",
        ],
        correctAnswer: 1,
        explanation: "CI/CD (Continuous Integration / Continuous Deployment) нь код өөрчлөлт хийх бүрд автоматаар тест хийж, deploy хийх процесс юм.",
      },
    ],
  },
  sql: {
    slug: "sql",
    title: "SQL",
    icon: "🗄️",
    description: "Structured Query Language - Өгөгдлийн сан удирдах хэл",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `SQL (Structured Query Language) нь реляцийн өгөгдлийн сантай (relational database) ажиллах стандарт хэл юм. SQL нь 1970-аад онд IBM-ээс гарсан бөгөөд одоо дэлхийн хамгийн түгээмэл өгөгдлийн сан удирдах хэл болоод байна.

SQL-ийн хэрэглээ:
- Өгөгдөл унших, бичих, шинэчлэх, устгах (CRUD)
- Хүснэгт үүсгэх, засварлах
- Өгөгдөл шүүх, эрэмбэлэх
- Хүснэгтүүдийг нэгтгэх (JOIN)
- Өгөгдөл дүгнэх, тооцоолох
- Өгөгдлийн сан удирдах

SQL ашигладаг өгөгдлийн сан:
- MySQL
- PostgreSQL
- SQL Server
- SQLite
- Oracle

SQL нь бүх backend хөгжүүлэлтэд зайлшгүй шаардлагатай ур чадвар юм.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**SQL суралцах шалтгаанууд:**

• Бүх backend хөгжүүлэлтэд хэрэгтэй - Өгөгдөл хадгалах, унших
• Стандарт хэл - Бүх relational database-д ажилладаг
• Өндөр эрэлт - Backend developer-үүд SQL мэдэх ёстой
• Data analysis - Өгөгдөл шинжилгээ хийх
• Database administration - Өгөгдлийн сан удирдах
• Job opportunities - Data analyst, backend developer
• Хялбар сурахад - Ойлгомжтой синтакс
• Олон салбарт хэрэглэгдэнэ - Банк, эрүүл мэнд, худалдаа`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**CRUD Operations:**
- CREATE: Өгөгдөл нэмэх (INSERT)
- READ: Өгөгдөл унших (SELECT)
- UPDATE: Өгөгдөл шинэчлэх (UPDATE)
- DELETE: Өгөгдөл устгах (DELETE)

**Database Objects:**
- Table: Хүснэгт
- Column: Багана
- Row: Мөр
- Primary Key: Үндсэн түлхүүр
- Foreign Key: Гадаад түлхүүр

**SQL Commands:**
- SELECT: Өгөгдөл сонгох
- FROM: Хүснэгт заах
- WHERE: Нөхцөл заах
- JOIN: Хүснэгт нэгтгэх
- GROUP BY: Бүлэглэх
- ORDER BY: Эрэмбэлэх
- HAVING: Бүлгийн нөхцөл

**Data Types:**
- INT, VARCHAR, TEXT, DATE, DATETIME, BOOLEAN

**Constraints:**
- NOT NULL: Хоосон байхгүй
- UNIQUE: Давтагдахгүй
- PRIMARY KEY: Үндсэн түлхүүр
- FOREIGN KEY: Гадаад түлхүүр`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `-- Хүснэгт үүсгэх
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Өгөгдөл нэмэх (INSERT)
INSERT INTO students (name, age, email)
VALUES 
    ('Болд', 17, 'bold@example.com'),
    ('Дорж', 16, 'dorj@example.com'),
    ('Сүх', 18, 'sukh@example.com');

-- Өгөгдөл унших (SELECT)
-- Бүх өгөгдөл
SELECT * FROM students;

-- Тодорхой багана
SELECT name, age FROM students;

-- Нөхцөлтэй (WHERE)
SELECT * FROM students WHERE age > 16;
SELECT * FROM students WHERE name LIKE 'Б%';

-- Эрэмбэлэх (ORDER BY)
SELECT * FROM students ORDER BY age DESC;
SELECT * FROM students ORDER BY name ASC;

-- Тооцоолол
SELECT COUNT(*) FROM students;
SELECT AVG(age) FROM students;
SELECT MAX(age), MIN(age) FROM students;

-- Бүлэглэх (GROUP BY)
SELECT age, COUNT(*) as count 
FROM students 
GROUP BY age;

-- Хүснэгт нэгтгэх (JOIN)
-- INNER JOIN
SELECT s.name, c.course_name
FROM students s
INNER JOIN courses c ON s.id = c.student_id;

-- LEFT JOIN
SELECT s.name, c.course_name
FROM students s
LEFT JOIN courses c ON s.id = c.student_id;

-- Өгөгдөл шинэчлэх (UPDATE)
UPDATE students 
SET age = 18 
WHERE name = 'Болд';

-- Өгөгдөл устгах (DELETE)
DELETE FROM students WHERE id = 1;

-- Хүснэгт засварлах (ALTER)
ALTER TABLE students ADD COLUMN phone VARCHAR(20);
ALTER TABLE students MODIFY COLUMN age INT NOT NULL;

-- Хүснэгт устгах (DROP)
DROP TABLE students;

-- Subquery
SELECT * FROM students 
WHERE age > (SELECT AVG(age) FROM students);

-- Index үүсгэх (хурдан хайлт)
CREATE INDEX idx_email ON students(email);`,
      language: "sql",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "Хүснэгт үүсгэх (CREATE TABLE)",
          "Өгөгдөл нэмэх, унших (INSERT, SELECT)",
          "WHERE clause ашиглан шүүх",
          "ORDER BY ашиглан эрэмбэлэх",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "JOIN ашиглан хүснэгт нэгтгэх",
          "GROUP BY, HAVING ашиглах",
          "Aggregate functions (COUNT, SUM, AVG)",
          "Subquery ашиглах",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Complex queries үүсгэх",
          "Stored procedures үүсгэх",
          "Triggers үүсгэх",
          "Database optimization (indexes, normalization)",
        ],
      },
    ],
    quiz: [
      {
        question: "SQL гэж юу вэ?",
        options: [
          "Simple Query Language",
          "Structured Query Language - өгөгдлийн сан удирдах хэл",
          "Standard Query Language",
          "System Query Language",
        ],
        correctAnswer: 1,
        explanation: "SQL (Structured Query Language) нь реляцийн өгөгдлийн сантай ажиллах стандарт хэл юм.",
      },
      {
        question: "CRUD гэж юу вэ?",
        options: [
          "Create, Read, Update, Delete - өгөгдөлтэй ажиллах үндсэн үйлдлүүд",
          "Code, Run, Update, Delete",
          "Create, Remove, Update, Delete",
          "Copy, Read, Update, Delete",
        ],
        correctAnswer: 0,
        explanation: "CRUD нь Create (INSERT), Read (SELECT), Update (UPDATE), Delete (DELETE) гэсэн өгөгдөлтэй ажиллах үндсэн үйлдлүүд юм.",
      },
      {
        question: "JOIN гэж юу вэ?",
        options: [
          "Хүснэгт нэмэх",
          "Хүснэгтүүдийг нэгтгэх, холбох",
          "Хүснэгт устгах",
          "Хүснэгт засварлах",
        ],
        correctAnswer: 1,
        explanation: "JOIN нь хоёр буюу түүнээс дээш хүснэгтийг нэгтгэж, холбох SQL командууд юм.",
      },
      {
        question: "PRIMARY KEY гэж юу вэ?",
        options: [
          "Хүснэгтийн нэр",
          "Мөрийг өвөрмөц таних түлхүүр",
          "Баганы нэр",
          "Өгөгдлийн төрөл",
        ],
        correctAnswer: 1,
        explanation: "PRIMARY KEY нь хүснэгтийн мөр бүрийг өвөрмөц таних түлхүүр бөгөөд NULL байж болохгүй.",
      },
      {
        question: "GROUP BY-ийн зорилго юу вэ?",
        options: [
          "Өгөгдөл эрэмбэлэх",
          "Өгөгдөл бүлэглэх, дүгнэх",
          "Өгөгдөл шүүх",
          "Өгөгдөл нэмэх",
        ],
        correctAnswer: 1,
        explanation: "GROUP BY нь ижил утгатай мөрүүдийг бүлэглэж, aggregate functions (COUNT, SUM, AVG) ашиглах боломжийг олгодог.",
      },
    ],
  },
  mongodb: {
    slug: "mongodb",
    title: "MongoDB (NoSQL)",
    icon: "🍃",
    description: "NoSQL документ-суурилсан өгөгдлийн сан",
    sections: [
      {
        id: "introduction",
        title: "Танилцуулга",
        icon: <BookOpen className="h-5 w-5" />,
        content: `MongoDB нь NoSQL документ-суурилсан өгөгдлийн сан юм. MongoDB нь 2009 онд гарсан бөгөөд одоо хамгийн алдартай NoSQL database болоод байна. MongoDB нь JSON-тэй төстэй BSON формат ашиглан өгөгдөл хадгалдаг.

MongoDB-ийн онцлог:
- Document-based: Хүснэгт биш, документ хэлбэрээр
- Schema-less: Бүтэц тодорхойлох шаардлагагүй
- Flexible: Өгөгдлийн бүтэц хялбар өөрчлөгддөг
- Scalable: Хэмжээтэй өсөхөд тохиромжтой
- Fast: Хурдан унших, бичих

MongoDB-ийн хэрэглээ:
- Real-time applications
- Content management systems
- Mobile applications
- Big data
- IoT applications

MongoDB нь Node.js, Python, Java зэрэг олон хэлтэй ажилладаг.`,
      },
      {
        id: "why",
        title: "Яагаад хэрэгтэй вэ",
        icon: <Target className="h-5 w-5" />,
        content: `**MongoDB суралцах шалтгаанууд:**

• NoSQL стандарт - Хамгийн алдартай NoSQL database
• Flexible schema - Өгөгдлийн бүтэц хялбар өөрчлөгддөг
• JSON-like format - JavaScript-тэй сайн ажилладаг
• Scalable - Хэмжээтэй өсөхөд тохиромжтой
• Fast - Хурдан унших, бичих
• Node.js-тэй сайн ажилладаг - MERN stack
• Real-time applications - Chat, gaming
• Олон компани ашигладаг - eBay, Adobe, Forbes`,
      },
      {
        id: "concepts",
        title: "Үндсэн ойлголтууд",
        icon: <Lightbulb className="h-5 w-5" />,
        content: `**MongoDB Structure:**
- Database: Өгөгдлийн сан
- Collection: Хүснэгттэй төстэй (document-уудын цуглуулга)
- Document: Мөртэй төстэй (BSON формат)
- Field: Баганатай төстэй

**CRUD Operations:**
- Create: insertOne(), insertMany()
- Read: find(), findOne()
- Update: updateOne(), updateMany()
- Delete: deleteOne(), deleteMany()

**Query Operators:**
- $eq: Тэнцүү
- $gt, $lt: Их, бага
- $in: Массив доторх
- $and, $or: Логик оператор
- $regex: Текст хайлт

**Aggregation:**
- $match: Шүүх
- $group: Бүлэглэх
- $sort: Эрэмбэлэх
- $project: Багана сонгох

**Indexes:**
- Хурдан хайлт хийх
- createIndex()

**Relationships:**
- Embedded documents
- References`,
      },
    ],
    codeExample: {
      title: "Жишээ код",
      icon: <Code className="h-5 w-5" />,
      code: `// MongoDB with Node.js (Mongoose)

// 1. Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/amjilt-school');

// 2. Schema үүсгэх
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, max: 100 },
  email: { type: String, unique: true },
  subjects: [String],
  createdAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

// 3. Create (Өгөгдөл нэмэх)
// insertOne
const student1 = new Student({
  name: 'Болд',
  age: 17,
  email: 'bold@example.com',
  subjects: ['Python', 'JavaScript']
});
await student1.save();

// insertMany
await Student.insertMany([
  { name: 'Дорж', age: 16, email: 'dorj@example.com' },
  { name: 'Сүх', age: 18, email: 'sukh@example.com' }
]);

// 4. Read (Өгөгдөл унших)
// Бүх документ
const allStudents = await Student.find();

// Нэг документ
const student = await Student.findOne({ name: 'Болд' });

// Нөхцөлтэй
const adults = await Student.find({ age: { $gte: 18 } });
const pythonStudents = await Student.find({ subjects: 'Python' });

// Эрэмбэлэх
const sorted = await Student.find().sort({ age: -1 });

// Тооцоолол
const count = await Student.countDocuments();
const avgAge = await Student.aggregate([
  { $group: { _id: null, avgAge: { $avg: '$age' } } }
]);

// 5. Update (Өгөгдөл шинэчлэх)
// updateOne
await Student.updateOne(
  { name: 'Болд' },
  { $set: { age: 18 } }
);

// updateMany
await Student.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: 'minor' } }
);

// findByIdAndUpdate
await Student.findByIdAndUpdate(
  studentId,
  { $push: { subjects: 'React' } },
  { new: true }
);

// 6. Delete (Өгөгдөл устгах)
// deleteOne
await Student.deleteOne({ name: 'Болд' });

// deleteMany
await Student.deleteMany({ age: { $lt: 18 } });

// findByIdAndDelete
await Student.findByIdAndDelete(studentId);

// 7. Query Operators
// $gt, $lt, $gte, $lte
const adults = await Student.find({ age: { $gte: 18 } });

// $in
const selected = await Student.find({ 
  name: { $in: ['Болд', 'Дорж'] } 
});

// $and, $or
const result = await Student.find({
  $and: [
    { age: { $gte: 16 } },
    { age: { $lte: 18 } }
  ]
});

// $regex (текст хайлт)
const search = await Student.find({
  name: { $regex: 'Бол', $options: 'i' }
});

// 8. Aggregation
const result = await Student.aggregate([
  { $match: { age: { $gte: 16 } } },
  { $group: { 
      _id: '$age', 
      count: { $sum: 1 },
      names: { $push: '$name' }
    }
  },
  { $sort: { _id: 1 } }
]);

// 9. Index үүсгэх
await Student.createIndex({ email: 1 });
await Student.createIndex({ name: 1, age: -1 });

// 10. Relationships
// Embedded
const courseSchema = new mongoose.Schema({
  title: String,
  students: [studentSchema] // Embedded
});

// Reference
const courseSchema = new mongoose.Schema({
  title: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});`,
      language: "javascript",
    },
    exercises: [
      {
        title: "Анхан шатны дасгал",
        tasks: [
          "MongoDB connection хийх",
          "Collection үүсгэх, документ нэмэх",
          "find(), findOne() ашиглан унших",
          "updateOne(), deleteOne() ашиглах",
        ],
      },
      {
        title: "Дунд шатны дасгал",
        tasks: [
          "Query operators ($gt, $in, $regex) ашиглах",
          "Aggregation pipeline хийх",
          "Index үүсгэх",
          "Relationships (embedded, references) хийх",
        ],
      },
      {
        title: "Дэвшилтэт дасгал",
        tasks: [
          "Complex aggregation queries",
          "Transaction ашиглах",
          "MongoDB Atlas (cloud) ашиглах",
          "Performance optimization",
        ],
      },
    ],
    quiz: [
      {
        question: "MongoDB гэж юу вэ?",
        options: [
          "SQL database",
          "NoSQL документ-суурилсан өгөгдлийн сан",
          "Programming language",
          "Framework",
        ],
        correctAnswer: 1,
        explanation: "MongoDB нь NoSQL документ-суурилсан өгөгдлийн сан бөгөөд JSON-тэй төстэй BSON формат ашигладаг.",
      },
      {
        question: "MongoDB-д хүснэгттэй төстэй зүйл юу вэ?",
        options: [
          "Database",
          "Collection",
          "Document",
          "Field",
        ],
        correctAnswer: 1,
        explanation: "MongoDB-д Collection нь SQL-ийн хүснэгттэй төстэй. Collection нь document-уудын цуглуулга юм.",
      },
      {
        question: "MongoDB-д документ нэмэхэд ямар функц хэрэглэдэг вэ?",
        options: [
          "insertOne(), insertMany()",
          "addOne(), addMany()",
          "createOne(), createMany()",
          "saveOne(), saveMany()",
        ],
        correctAnswer: 0,
        explanation: "MongoDB-д документ нэмэхэд insertOne() (нэг документ) эсвэл insertMany() (олон документ) хэрэглэдэг.",
      },
      {
        question: "MongoDB-ийн давуу тал юу вэ?",
        options: [
          "Хурдан ажиллах",
          "Flexible schema, JSON-like format, scalable",
          "Бага санах ой",
          "Хялбар код",
        ],
        correctAnswer: 1,
        explanation: "MongoDB-ийн давуу тал нь flexible schema (бүтэц хялбар өөрчлөгддөг), JSON-like format, scalable (хэмжээтэй өсөхөд тохиромжтой) юм.",
      },
      {
        question: "MongoDB aggregation pipeline-ийн зорилго юу вэ?",
        options: [
          "Өгөгдөл нэмэх",
          "Өгөгдөл боловсруулах, дүгнэх, шинжилгээ хийх",
          "Өгөгдөл устгах",
          "Өгөгдөл засварлах",
        ],
        correctAnswer: 1,
        explanation: "MongoDB aggregation pipeline нь өгөгдөл боловсруулах, дүгнэх, шинжилгээ хийхэд ашиглагдана. $match, $group, $sort зэрэг stage-ууд агуулна.",
      },
    ],
  },
}

// Export subjectsData for use in other pages (like test page)
export { subjectsData }

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function SubjectPage({ params }: PageProps) {
  const { slug } = await params
  const subject = subjectsData[slug]

  if (!subject) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <div className="w-full px-4 md:px-8 py-8 md:py-12 max-w-4xl">
            {/* Header */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{subject.icon}</span>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight">{subject.title}</h1>
                  <p className="text-lg text-muted-foreground mt-2">{subject.description}</p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {subject.sections.map((section: any) => (
                <Card key={section.id}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {section.icon}
                      <CardTitle>{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                    <div className="whitespace-pre-line">{section.content}</div>
                  </CardContent>
                </Card>
              ))}

              {/* Code Example */}
              {subject.codeExample && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {subject.codeExample.icon}
                      <CardTitle>{subject.codeExample.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock code={subject.codeExample.code} language={subject.codeExample.language} />
                  </CardContent>
                </Card>
              )}

              {/* Exercises */}
              {subject.exercises && subject.exercises.length > 0 && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      <CardTitle>Дасгал ажлууд</CardTitle>
                    </div>
                    <CardDescription>
                      Эдгээр дасгалуудыг хийснээр танд суралцсан зүйлээ дадлага хийх боломж олгоно
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {subject.exercises.map((exercise: any, index: number) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-semibold text-lg">{exercise.title}</h3>
                        <ul className="space-y-2">
                          {exercise.tasks.map((task: string, taskIndex: number) => (
                            <li key={taskIndex} className="flex items-start gap-2">
                              <Badge variant="outline" className="mt-0.5">
                                {taskIndex + 1}
                              </Badge>
                              <span className="text-muted-foreground">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Quiz */}
              {(() => {
                // Collect all quiz questions from sections and direct quiz array
                const allQuizQuestions: any[] = []
                
                // Collect from sections
                if (subject.sections && Array.isArray(subject.sections)) {
                  subject.sections.forEach((section: any) => {
                    if (section.quiz && Array.isArray(section.quiz)) {
                      section.quiz.forEach((quiz: any) => {
                        allQuizQuestions.push({
                          question: quiz.question,
                          options: quiz.options || [],
                          correctAnswer: quiz.correctAnswer || quiz.answer || 0,
                          explanation: quiz.explanation,
                        })
                      })
                    }
                  })
                }
                
                // Collect from direct quiz array (backward compatibility)
                if (subject.quiz && Array.isArray(subject.quiz)) {
                  subject.quiz.forEach((quiz: any) => {
                    allQuizQuestions.push({
                      question: quiz.question,
                      options: quiz.options || [],
                      correctAnswer: quiz.correctAnswer || quiz.answer || 0,
                      explanation: quiz.explanation,
                    })
                  })
                }
                
                return allQuizQuestions.length > 0 ? (
                <div className="space-y-4">
                  <Alert>
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>Багахан тест</AlertTitle>
                    <AlertDescription>
                        Суралцсан зүйлээ шалгаж үзэхийн тулд доорх асуултуудад хариулна уу. 
                        Асуултууд random-р солигдож байрлал өөрчлөгдөнө.
                    </AlertDescription>
                  </Alert>
                    <Quiz questions={allQuizQuestions} randomize={true} maxQuestions={20} />
                </div>
                ) : null
              })()}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
