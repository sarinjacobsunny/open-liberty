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
package io.openliberty.security.oidcclientcore.client;

/**
 *
 */
public interface OidcProviderMetadata {

    String getAuthorizationEndpoint();

    String getTokenEndpoint();

    String getUserinfoEndpoint();

    String getEndSessionEndpoint();

    String getJwksURI();

    String getIssuer();

    String getSubjectTypeSupported();

    String getIdTokenSigningAlgorithmsSupported();

    String getResponseTypeSupported();

}