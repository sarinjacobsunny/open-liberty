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

import static org.junit.Assert.assertEquals;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Initialized;
import javax.enterprise.event.Observes;
import javax.inject.Inject;

import org.eclipse.microprofile.config.inject.ConfigProperty;

@ApplicationScoped
public class ApplicationScopedOnCheckpointBean {

    @Inject
    @ConfigProperty(name = "test_key", defaultValue = "annoValue")
    String testKey;

    public void applicationScopedValueTest() {
        check("applicationScopedValue");
    }

    //@Initialized(ApplicationScoped.class) is seen before any request. Accessing the bean in the early startup code of application.
    public void observeInit(@Observes @Initialized(ApplicationScoped.class) Object event) {
        System.out.println(getClass() + ": " + "Initializing application context");
        check("defaultValue");
    }

    private void check(String expected) {
        assertEquals("Wrong value for test key.", expected, testKey);
    }
}
