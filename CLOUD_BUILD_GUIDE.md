# ☁️ Build APK in the Cloud (No Android Studio Needed!)

Since you don't have Android Studio, you can build your APK **completely in the cloud** using GitHub Actions. The APK will be built automatically and ready to download!

## 🚀 Quick Setup (5 Minutes)

### Step 1: Push to GitHub

1. **Create a new repository** on GitHub (public or private)

2. **Initialize git** in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - 3D Calculator"
   ```

3. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: GitHub Actions Will Automatically Build

Once you push to GitHub, the workflow will automatically:
- ✅ Install dependencies
- ✅ Build your React app
- ✅ Sync with Capacitor
- ✅ Build the Android APK
- ✅ Upload the APK for download

### Step 3: Download Your APK

1. Go to your GitHub repository
2. Click on **"Actions"** tab
3. Click on the latest workflow run
4. Scroll down to **"Artifacts"**
5. Download **"app-debug"**
6. Extract the ZIP to get `app-debug.apk`

**That's it!** 🎉 You now have your APK without installing Android Studio!

---

## 📱 Option: Auto-Distribute with Firebase (Recommended)

Want to automatically send the APK to testers? Set up Firebase App Distribution:

### Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click **"Add project"**
3. Enter project name (e.g., "3D Calculator")
4. Follow the setup wizard

### Step 2: Add Android App to Firebase

1. In Firebase Console, click **"Add app"** → Android
2. **Android package name**: `com.calculator.threed`
3. Download `google-services.json` (save for later, not needed immediately)
4. Click **"Continue"** through the rest

### Step 3: Get Firebase Credentials

1. In Firebase Console → **Project Settings** (gear icon)
2. Go to **"Service accounts"** tab
3. Click **"Generate new private key"**
4. Save the JSON file (this is your `FIREBASE_SERVICE_ACCOUNT`)
5. Go to **"General"** tab, copy your **"App ID"** (format: `1:123456789:android:abc123...`)

### Step 4: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these two secrets:

   **Secret 1:**
   - Name: `FIREBASE_APP_ID`
   - Value: Your Firebase App ID (from Step 3)

   **Secret 2:**
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: Entire contents of the JSON file (from Step 3)

### Step 5: Enable Firebase Workflow

The workflow is already created! Just:

1. Go to **Actions** tab in your GitHub repo
2. Click **"Build & Distribute to Firebase"** workflow
3. Click **"Enable workflow"** if prompted
4. Click **"Run workflow"** → **"Run workflow"**

### Step 6: Invite Testers

1. In Firebase Console → **App Distribution**
2. Click **"Testers & Groups"**
3. Add tester email addresses
4. Testers will receive an email with download link!

---

## 🔄 Workflows Explained

### Workflow 1: `build-apk.yml` (Basic Build)

**Triggers:**
- Every push to `main` or `master` branch
- Every pull request
- Manual trigger (Run workflow button)

**What it does:**
- Builds debug APK
- Uploads as GitHub artifact
- Creates a GitHub Release with APK attached

**Download APK:**
- **Option A:** Actions tab → Artifacts
- **Option B:** Releases page → Latest release

### Workflow 2: `build-and-distribute-firebase.yml` (Firebase Distribution)

**Triggers:**
- Push to `main` or `master` branch
- Manual trigger

**What it does:**
- Builds debug APK (already signed and installable)
- Uploads to Firebase App Distribution
- Notifies testers automatically
- Also saves as GitHub artifact (backup)

**Note:** Debug APK is used for testing. For production/Play Store, you'll need to set up proper app signing.

**Requires:**
- Firebase project setup
- GitHub secrets configured

---

## 🛠️ Advanced: Customize Workflows

### Change When Build Happens

Edit `.github/workflows/build-apk.yml`:

```yaml
# Build only on tagged releases
on:
  push:
    tags:
      - 'v*'

# Build daily at midnight
on:
  schedule:
    - cron: '0 0 * * *'

# Build manually only
on:
  workflow_dispatch:
```

### Build Release APK (Not Debug)

In `build-apk.yml`, change:
```yaml
- name: Build Release APK
  run: cd android && ./gradlew assembleRelease
```

Then update the path:
```yaml
path: android/app/build/outputs/apk/release/app-release-unsigned.apk
```

### Add App Signing

For production apps, you'll need to sign the APK. Add to GitHub secrets:
- `KEYSTORE_FILE` (base64 encoded keystore)
- `KEYSTORE_PASSWORD`
- `KEY_ALIAS`
- `KEY_PASSWORD`

Then update workflow to sign the APK.

---

## 💰 Pricing

### GitHub Actions
- **Free tier**: 2,000 minutes/month (private repos)
- **Public repos**: Unlimited free
- Each build takes ~5-10 minutes
- **Cost**: FREE for most users!

### Firebase App Distribution
- **Free tier**: Unlimited apps, unlimited testers
- 150-day APK retention
- **Cost**: FREE!

---

## 🔍 Troubleshooting

### Build Failed?

1. **Check the logs**: Actions tab → Click workflow run → Click "build" job
2. **Common issues**:
   - **Node version**: Workflow uses Node 20 (matches your setup)
   - **Gradle errors**: Usually means a dependency issue
   - **Capacitor sync failed**: Check `capacitor.config.ts`

### Firebase Upload Failed?

1. **Check secrets are set**: Settings → Secrets → Actions
2. **Verify Firebase App ID format**: Should be `1:number:android:hash`
3. **Check service account JSON**: Must be valid JSON, entire file content

### APK Not Installing?

1. **Enable "Unknown Sources"** on Android device
2. **Debug APK vs Release**: Debug APKs work everywhere, Release need signing
3. **Check package name**: Must be unique on device

---

## 🎯 Quick Command Reference

```bash
# Push code to trigger build
git add .
git commit -m "Update calculator"
git push

# Create a release tag (triggers build)
git tag v1.0.0
git push --tags

# Check build status
# Go to: https://github.com/YOUR_USERNAME/YOUR_REPO/actions
```

---

## 📚 What You've Got

✅ **Two automated workflows**:
1. Basic APK build with GitHub download
2. Firebase distribution to testers

✅ **No local setup needed**:
- No Android Studio
- No Java/Gradle installation
- Everything runs in the cloud

✅ **Automatic updates**:
- Push code → New APK built
- Testers notified automatically (if using Firebase)

✅ **Free forever**:
- GitHub Actions free tier
- Firebase free tier
- No credit card required

---

## 🚀 Next Steps

1. **Push to GitHub** (if not already done)
2. **Wait 5-10 minutes** for first build
3. **Download APK** from Actions → Artifacts
4. **Optional**: Set up Firebase for automatic distribution
5. **Install on your phone** and enjoy your 3D calculator!

Need help? Check the workflow logs in the Actions tab for detailed error messages.

Happy building! 🎉
