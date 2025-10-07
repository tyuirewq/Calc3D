# Building Your 3D Calculator APK

Your React calculator app has been configured with Ionic Capacitor and is ready to be built as an Android APK!

## ✅ What's Already Done

- ✓ Capacitor installed and configured
- ✓ Android platform added
- ✓ App built and synced
- ✓ Project structure ready
- ✓ **GitHub Actions workflows configured for cloud builds** ☁️

---

## 🌟 **RECOMMENDED: Build in the Cloud (No Android Studio Needed!)**

**👉 See [CLOUD_BUILD_GUIDE.md](./CLOUD_BUILD_GUIDE.md) for complete cloud build instructions**

### Quick Summary:
1. Push your code to GitHub
2. GitHub Actions automatically builds the APK
3. Download the APK from the Actions tab
4. **No Android Studio installation required!**

**This is the easiest method and works on any computer!**

---

## 🖥️ Alternative: Build Locally with Android Studio

If you prefer to build locally or need more control, follow these instructions:

## 📋 Prerequisites

You'll need to install:

1. **Java Development Kit (JDK) 17 or higher**
   - Download from: https://adoptium.net/
   - Verify: `java -version`

2. **Android Studio**
   - Download from: https://developer.android.com/studio
   - During installation, make sure to install:
     - Android SDK
     - Android SDK Platform
     - Android Virtual Device

3. **Gradle** (usually comes with Android Studio)

## 🚀 Building the APK

### Option 1: Using Android Studio (Recommended)

1. **Download this project** to your local machine

2. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```

3. **Open Android Studio**

4. **Import the project**:
   - Click "Open an Existing Project"
   - Navigate to your project folder
   - Select the `android` folder
   - Click "OK"

5. **Wait for Gradle sync** to complete (this may take a few minutes the first time)

6. **Build the APK**:
   - Go to: `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`
   - Wait for the build to complete
   - Click "locate" in the notification to find your APK

7. **Find your APK**:
   - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
   - This is your installable APK file!

### Option 2: Using Command Line

1. **Download this project** to your local machine

2. **Install dependencies** (if you haven't already):
   ```bash
   npm install
   ```

3. **Navigate to the android folder**:
   ```bash
   cd android
   ```

4. **Build the debug APK**:
   ```bash
   ./gradlew assembleDebug
   ```
   
   On Windows:
   ```bash
   gradlew.bat assembleDebug
   ```

5. **Find your APK**:
   - Location: `android/app/build/outputs/apk/debug/app-debug.apk`

### Option 3: Building a Release APK (For Production)

For a production-ready APK that you can publish:

1. **Generate a keystore** (first time only):
   ```bash
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Create `android/key.properties`**:
   ```properties
   storePassword=your-keystore-password
   keyPassword=your-key-password
   keyAlias=my-key-alias
   storeFile=../my-release-key.keystore
   ```

3. **Build release APK**:
   - In Android Studio: `Build` → `Generate Signed Bundle / APK`
   - Or via command line: `./gradlew assembleRelease`

4. **Find your release APK**:
   - Location: `android/app/build/outputs/apk/release/app-release.apk`

## 🔄 Making Changes to Your App

If you make changes to your React code:

1. **Rebuild the web app**:
   ```bash
   npm run build
   ```

2. **Sync with Capacitor**:
   ```bash
   npx cap sync
   ```

3. **Rebuild the APK** using one of the methods above

## 📱 Installing the APK

### On Your Phone:

1. Transfer the APK to your Android device
2. Enable "Install from Unknown Sources" in settings
3. Tap the APK file to install

### On Emulator:

1. Open Android Studio
2. Create/start an Android Virtual Device (AVD)
3. Drag and drop the APK onto the emulator

## 🎨 Customizing Your App

### Change App Icon

Replace these files with your custom icons:
- `android/app/src/main/res/mipmap-hdpi/ic_launcher.png` (72x72)
- `android/app/src/main/res/mipmap-mdpi/ic_launcher.png` (48x48)
- `android/app/src/main/res/mipmap-xhdpi/ic_launcher.png` (96x96)
- `android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png` (144x144)
- `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png` (192x192)

### Change App Name

Edit `android/app/src/main/res/values/strings.xml`:
```xml
<string name="app_name">Your App Name</string>
```

### Change Package Name

Edit `capacitor.config.ts` and change the `appId`:
```typescript
appId: 'com.yourcompany.yourapp'
```

Then sync: `npx cap sync`

## 🐛 Troubleshooting

### "SDK location not found"
- Open Android Studio
- Go to File → Project Structure → SDK Location
- Set the Android SDK location

### Build fails with Gradle errors
- Update Gradle wrapper: `./gradlew wrapper --gradle-version=8.0`
- Sync project: `npx cap sync`

### App crashes on startup
- Check that web assets are in: `android/app/src/main/assets/public`
- Run: `npx cap sync`

## 📚 Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guide](https://developer.android.com/guide)
- [Publishing on Google Play](https://support.google.com/googleplay/android-developer/answer/9859152)

## ✨ Your App Details

- **App Name**: 3D Calculator
- **Package ID**: com.calculator.threed
- **Platform**: Android
- **Type**: Hybrid (Web + Native)

Happy building! 🎉
