# VibeTZ Final Polish & Build Script

cd "C:\Users\OFFICE\Desktop\VibeTZ"

Write-Host "`n🔐 Finalizing AUTH..."
cd backend
npm install
node ../scripts/fixAuthMiddleware.js
cd ..

Write-Host "`n💬 Chat polish..."
cd mobile
npm install socket.io-client react-native-gifted-chat
node ../scripts/setupChatEnhancements.js
cd ..

Write-Host "`n🎨 Updating UI assets..."
cd mobile
mkdir assets -Force
cd assets
curl -O https://your-server.com/vibetz-icon.png
curl -O https://your-server.com/splash.png
cd ..
npx expo install expo-splash-screen expo-font react-native-vector-icons
node ../scripts/updateAppJson.js
cd ..

Write-Host "`n📲 Building APK..."
cd mobile
eas build -p android --profile preview
cd ..

Write-Host "`n🧠 Installing Translate + TTS..."
cd mobile
npm install expo-speech google-translate-open-api
node ../scripts/addAutoTranslate.js
cd ..

Write-Host "`n⚽ Polishing Arena Football Game..."
cd mobile/games/arenaFootball
node ../../../scripts/polishGame.js
cd ../../../

Write-Host "`n🌐 Web App Build & Polish..."
cd web
npm install
npm run build
cd ..

Write-Host "`n✅ VibeTZ Final MVP Polish Complete! Launch Ready 🚀"
