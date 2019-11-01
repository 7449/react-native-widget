package com.rnwidget;

import android.annotation.TargetApi;
import android.app.Activity;
import android.os.Build;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;
import android.view.Window;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Properties;

/**
 * by y on 2017/4/26.
 */

@TargetApi(Build.VERSION_CODES.KITKAT)
public class StatusBarUtils {

    private static final String TAG = "StatusBarUtils";

    public static boolean isEmulator() {
        return Utils.checkEmulator();
    }

    public static boolean isMiUI() {
        return Utils.isMiUI();
    }

    public static void miUIStatusBar(Activity activity, boolean dark) {
        try {
            Window window = activity.getWindow();
            int darkModeFlag;
            Class layoutParams = Class.forName("android.view.MiuiWindowManager$LayoutParams");
            Field field = layoutParams.getField("EXTRA_FLAG_STATUS_BAR_DARK_MODE");
            darkModeFlag = field.getInt(layoutParams);
            Method method = window.getClass().getMethod("setExtraFlags", int.class, int.class);
            if (dark) {
                method.invoke(window, darkModeFlag, darkModeFlag);
            } else {
                method.invoke(window, 0, darkModeFlag);
            }
        } catch (Exception e) {
            Log.i(TAG, e.toString());
        }
    }


    private static class Utils {

        private static final String SYS_EMUI = "sys_emui";
        private static final String SYS_MIUI = "sys_miui";
        private static final String SYS_FLYME = "sys_flyme";
        private static final String KEY_MIUI_VERSION_CODE = "ro.miui.ui.version.code";
        private static final String KEY_MIUI_VERSION_NAME = "ro.miui.ui.version.name";
        private static final String KEY_MIUI_INTERNAL_STORAGE = "ro.miui.internal.storage";
        private static final String KEY_EMUI_API_LEVEL = "ro.build.hw_emui_api_level";
        private static final String KEY_EMUI_VERSION = "ro.build.version.emui";
        private static final String KEY_EMUI_CONFIG_HW_SYS_VERSION = "ro.confg.hw_systemversion";

        static boolean isBlackColor(int color, int level) {
            int grey = toGrey(color);
            return grey < level;
        }

        static int toGrey(int rgb) {
            int blue = rgb & 0x000000FF;
            int green = (rgb & 0x0000FF00) >> 8;
            int red = (rgb & 0x00FF0000) >> 16;
            return (red * 38 + green * 75 + blue * 15) >> 7;
        }


        static boolean isLollipop_Mr1() {
            return Build.VERSION.SDK_INT > Build.VERSION_CODES.LOLLIPOP_MR1;
        }

        static boolean isM() {
            return Build.VERSION.SDK_INT >= Build.VERSION_CODES.M;
        }

        static boolean isMiUI() {
            return TextUtils.equals(getSystem(), SYS_MIUI);
        }

        static String getSystem() {
            String SYS = null;
            try {
                Properties prop = new Properties();
                prop.load(new FileInputStream(new File(Environment.getRootDirectory(), "build.prop")));
                if (prop.getProperty(KEY_MIUI_VERSION_CODE, null) != null
                        || prop.getProperty(KEY_MIUI_VERSION_NAME, null) != null
                        || prop.getProperty(KEY_MIUI_INTERNAL_STORAGE, null) != null) {
                    SYS = SYS_MIUI;
                } else if (prop.getProperty(KEY_EMUI_API_LEVEL, null) != null
                        || prop.getProperty(KEY_EMUI_VERSION, null) != null
                        || prop.getProperty(KEY_EMUI_CONFIG_HW_SYS_VERSION, null) != null) {
                    SYS = SYS_EMUI;
                } else if (getSystemProperty().toLowerCase().contains("flyme")) {
                    SYS = SYS_FLYME;
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            return SYS;
        }

        static String getSystemProperty() {
            try {
                Class<?> clz = Class.forName("android.os.SystemProperties");
                Method get = clz.getMethod("get", String.class, String.class);
                return (String) get.invoke(clz, "ro.build.display.id", "");
            } catch (Exception ignored) {
            }
            return "";
        }

        static Boolean checkEmulator() {
            String BOARD = Build.BOARD;
            String BOOTLOADER = Build.BOOTLOADER;
            String BRAND = Build.BRAND;
            String DEVICE = Build.DEVICE;
            String HARDWARE = Build.HARDWARE;
            String MODEL = Build.MODEL;
            String PRODUCT = Build.PRODUCT;
            return BOARD.equals("unknown") || BOOTLOADER.equals("unknown")
                    || BRAND.equals("generic") || DEVICE.equals("generic")
                    || MODEL.equals("sdk") || PRODUCT.equals("sdk")
                    || HARDWARE.equals("goldfish");
        }
    }
}
