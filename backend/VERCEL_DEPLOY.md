# Vercel дээр Deploy хийх заавар

Энэхүү заавар нь Amjilt Cyber School backend-ийг Vercel дээр deploy хийхэд туслах болно.

## 📋 Бэлтгэл

### 1. Vercel Account үүсгэх

1. [vercel.com](https://vercel.com) дээр бүртгүүлэх
2. GitHub/GitLab/Bitbucket account-оо холбох

### 2. Environment Variables бэлтгэх

Vercel dashboard дээр дараах environment variables-уудыг нэмэх:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/amjilt-cyber-school?retryWrites=true&w=majority
JWT_SECRET=<your-generated-secret>
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=https://your-frontend-domain.vercel.app
NODE_ENV=production
```

**Жич:** `JWT_SECRET`-ийг үүсгэхийн тулд:
```bash
npm run generate-secret
```

## 🚀 Deploy хийх арга замууд

### Арга 1: Vercel CLI ашиглах (Зөвлөмж)

1. **Vercel CLI суулгах:**
   ```bash
   npm i -g vercel
   ```

2. **Login хийх:**
   ```bash
   vercel login
   ```

3. **Backend folder руу шилжих:**
   ```bash
   cd backend
   ```

4. **Deploy хийх:**
   ```bash
   vercel
   ```
   
   Эхний удаа асуух асуултуудад:
   - Set up and deploy? **Yes**
   - Which scope? (өөрийн account сонгох)
   - Link to existing project? **No**
   - Project name? `amjilt-cyber-school-backend`
   - Directory? `./`
   - Override settings? **No**

5. **Production deploy:**
   ```bash
   vercel --prod
   ```

### Арга 2: GitHub Integration (Автомат Deploy)

1. **GitHub repository үүсгэх:**
   - Backend code-оо GitHub руу push хийх

2. **Vercel Dashboard дээр:**
   - "Add New Project" дарна
   - GitHub repository-оо сонгоно
   - Root Directory: `backend` гэж тохируулна
   - Framework Preset: **Other**
   - Build Command: (хоосон үлдээнэ)
   - Output Directory: (хоосон үлдээнэ)
   - Install Command: `npm install`

3. **Environment Variables нэмэх:**
   - Settings → Environment Variables
   - Дээрх бүх variables-уудыг нэмнэ

4. **Deploy:**
   - "Deploy" товч дарна

## ✅ Deploy хийсний дараа

### API Endpoints шалгах:

1. **Health Check:**
   ```
   https://your-backend.vercel.app/api/health
   ```

2. **Subjects API:**
   ```
   https://your-backend.vercel.app/api/subjects
   ```

3. **Single Subject:**
   ```
   https://your-backend.vercel.app/api/subjects/html
   ```

### Frontend-д холбох:

Next.js app-ийн `.env.local` файлд:

```env
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app
```

Эсвэл API route-ууд дээр:

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-backend.vercel.app'
```

## 🔧 Troubleshooting

### MongoDB Connection Issue

- MongoDB Atlas дээр IP whitelist-д `0.0.0.0/0` нэмэх (бүх IP зөвшөөрөх)
- Network Access → Add IP Address → `0.0.0.0/0`

### CORS Error

- `CLIENT_ORIGIN` environment variable-д frontend URL-аа зөв оруулах
- Жишээ: `https://amjilt-cyber-school.vercel.app`

### Environment Variables харагдахгүй

- Vercel Dashboard → Settings → Environment Variables
- Production, Preview, Development гэсэн бүх орчинд нэмэх
- Deploy дахин хийх

## 📊 Monitoring

Vercel Dashboard дээр:
- **Deployments** - Deploy түүх
- **Analytics** - API usage
- **Logs** - Real-time logs

## 🔄 Update хийх

Code өөрчлөлт хийсний дараа:

```bash
cd backend
vercel --prod
```

Эсвэл GitHub integration ашиглавал автоматаар deploy хийгдэнэ.

## 📝 Notes

- Vercel serverless functions нь "cold start" байж болно (анхны request удаан)
- MongoDB connection-ийг cache хийсэн тул дараагийн request-ууд хурдан байна
- Free tier дээр function execution time хязгаартай (10 секунд)

## 🆘 Тусламж

Асуудал гарвал:
1. Vercel Dashboard → Logs шалгах
2. Local дээр тест хийх: `npm run dev`
3. [Vercel Documentation](https://vercel.com/docs) үзэх

