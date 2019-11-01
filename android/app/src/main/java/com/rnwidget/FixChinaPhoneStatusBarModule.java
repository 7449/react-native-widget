package com.rnwidget;

import android.app.Activity;
import android.os.Build;

import androidx.annotation.NonNull;

import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.ReactConstants;

/**
 * by y.
 * <p>
 * Description:
 */
public class FixChinaPhoneStatusBarModule extends ReactContextBaseJavaModule {

    private static final String DEFAULT = "default";
    private static final String LIGHT_CONTENT = "light-content";
    private static final String DARK_CONTENT = "dark-content";

    FixChinaPhoneStatusBarModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "StatusBarUtil";
    }

    @ReactMethod
    public void fixStatusBar(final String style) {
        final Activity activity = getCurrentActivity();
        if (activity == null) {
            FLog.w(ReactConstants.TAG, "FixChinaPhoneStatusBarModule: Ignored status bar change, current activity is null.");
            return;
        }
        if (StatusBarUtils.isEmulator()) {
            FLog.w(ReactConstants.TAG, "FixChinaPhoneStatusBarModule: Platform == Emulator");
            return;
        }
        if (!StatusBarUtils.isMiUI()) {
            FLog.w(ReactConstants.TAG, "FixChinaPhoneStatusBarModule: Platform != miui");
            return;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            UiThreadUtil.runOnUiThread(
                    () -> {
                        switch (style) {
                            case DEFAULT:
                            case LIGHT_CONTENT:
                                StatusBarUtils.miUIStatusBar(activity, false);
                                break;
                            case DARK_CONTENT:
                                StatusBarUtils.miUIStatusBar(activity, true);
                                break;
                        }
                    }
            );
        }
    }
}
