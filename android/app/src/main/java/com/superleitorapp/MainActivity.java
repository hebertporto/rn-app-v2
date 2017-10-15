package com.superleitorapp;

import android.os.Bundle;
import com.reactnativenavigation.controllers.SplashActivity;
import com.cboy.rn.splashscreen.SplashScreen;

public class MainActivity extends SplashActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    protected String getMainComponentName() {
        return "superleitorapp";
    }
}
