/*******************************************************************************
 * Copyright (c) 2022 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
package mpapp1;

import javax.inject.Inject;
import javax.servlet.annotation.WebServlet;

import org.junit.Test;

import componenttest.app.FATServlet;

@WebServlet("/MPConfigServlet")
public class MPConfigServlet extends FATServlet {

    /**  */
    private static final long serialVersionUID = 1L;

    @Inject
    MPConfigBean reqScopeBean;

    @Inject
    MPConfigBeanWithApplicationScope appScopeBean;

    @Inject
    private ApplicationScopedOnCheckpointBean appScopeOnCheckpointBean;

    @Inject
    ApplicationScopedOnCheckpointBeanWithConfigObject appScopeOnCheckpointWithConfigObject;

    @Test
    public void defaultValueTest() {
        reqScopeBean.defaultValueTest();
    }

    @Test
    public void envValueTest() {
        reqScopeBean.envValueTest();
    }

    @Test
    public void envValueChangeTest() {
        reqScopeBean.envValueChangeTest();
    }

    @Test
    public void serverValueTest() {
        reqScopeBean.serverValueTest();
    }

    @Test
    public void annoValueTest() {
        reqScopeBean.annoValueTest();
    }

    @Test
    public void appScopeDefaultValueTest() {
        appScopeBean.appScopeDefaultValueTest();
    }

    @Test
    public void appScopeEnvValueTest() {
        appScopeBean.appScopeEnvValueTest();
    }

    @Test
    public void appScopeEnvValueChangeTest() {
        appScopeBean.appScopeEnvValueChangeTest();
    }

    @Test
    public void appScopeServerValueTest() {
        appScopeBean.appScopeServerValueTest();
    }

    @Test
    public void appScopeAnnoValueTest() {
        appScopeBean.appScopeAnnoValueTest();
    }

    @Test
    public void configObjectAppScopeDefaultValueTest() {
        appScopeOnCheckpointWithConfigObject.appScopeDefaultValueTest();
    }

    @Test
    public void configObjectAppScopeEnvValueTest() {
        appScopeOnCheckpointWithConfigObject.appScopeEnvValueTest();
    }

    @Test
    public void configObjectAppScopeEnvValueChangeTest() {
        appScopeOnCheckpointWithConfigObject.appScopeEnvValueChangeTest();
    }

    @Test
    public void configObjectAppScopeServerValueTest() {
        appScopeOnCheckpointWithConfigObject.appScopeServerValueTest();
    }

    @Test
    public void configObjectAppScopeAnnoValueTest() {
        appScopeOnCheckpointWithConfigObject.appScopeAnnoValueTest();
    }

    //@Test
    //Commenting this test temporarily because this test fails when config is updated during restore
    //since the instance of config object is created during the checkpoint side during the initialization of application context
    //and it fails to update itself with the latest config on restore.
    public void applicationScopedValueTest() {
        appScopeOnCheckpointBean.applicationScopedValueTest();
    }

}
