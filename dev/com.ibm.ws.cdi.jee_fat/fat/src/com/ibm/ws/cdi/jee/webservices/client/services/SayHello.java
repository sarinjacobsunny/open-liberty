/*******************************************************************************
 * Copyright (c) 2016 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
//
// Generated By:JAX-WS RI IBM 2.1.6 in JDK 6 (JAXB RI IBM JAXB 2.1.10 in JDK 6)
//

package com.ibm.ws.cdi.jee.webservices.client.services;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

@WebService(name = "SayHello", targetNamespace = "http://ibm.com/ws/jaxws/cdi/")
public interface SayHello {

    /**
     *
     * @param arg0
     * @return
     *         returns java.lang.String
     */
    @WebMethod
    @WebResult(targetNamespace = "")
    @RequestWrapper(localName = "sayHello", targetNamespace = "http://ibm.com/ws/jaxws/cdi/", className = "com.ibm.ws.cdi.jee.webservices.client.services.SayHello_Type")
    @ResponseWrapper(localName = "sayHelloResponse", targetNamespace = "http://ibm.com/ws/jaxws/cdi/",
                    className = "com.ibm.ws.cdi.jee.webservices.client.services.SayHelloResponse")
    public String sayHello(
                           @WebParam(name = "arg0", targetNamespace = "") String arg0);

}
