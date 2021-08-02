/*******************************************************************************
 * Copyright (c) 2016, 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

 var editorMessages = {
    "VALUE": "Value",
    "SELECT": "Select",
    "ADD": "Add",
    "OK": "OK",
    "CANCEL": "Cancel",
    "ADD_CHILD": "Add child",
    "REMOVE": "Remove",
    "TEST" : "Test",
    "TEST_CONNECTION": "Test Connection",
    "DESCRIPTION": "Description",
    "PREVIOUS": "Previous",
    "NEXT": "Next",
    "REMOVE_ELEMENT_CONFIRMATION": "Are you sure you want to remove the element?",
    "YES": "Yes",
    "NO": "No",
    "LOADING": "Loading...",
    "SERVER_CONFIGURATION_EDITOR": "Server Config Tool",
    "CONFIGURATION_FILES": "Configuration Files",
    "TOGGLE_NAVIGATION": "Toggle navigation",
    "CLOSE": "Close",
    "ERROR_ACCESSING_SERVER_CONFIGURATION_FILE": "The server configuration file {0} could not be accessed.",
    "ERROR_ACCESSING_SERVER_SCHEMA_FILE": "The schema file {0} could not be accessed.",
    "NO_MATCHES_FOUND": "No matches found.",
    "DEFAULT_VALUE_PLACEHOLDER": "{0} (default)",
    "DEFAULT_VALUE_PLACEHOLDER_WITH_VARIABLE": "{0} (default) or ${{1}} (if defined)",
    "VARIABLE_VALUE_PLACEHOLDER": "{0} (if defined)",
    "DEFAULT_SUFFIX": "(default)",
    "SAVE": "Save",
    "DISCARD": "Discard",
    "ENHANCED_LABELS": "Enhanced labels",
    "FIELD_DESCRIPTIONS": "Field descriptions",
    "MALFORMED_XML": "The XML content appears to be malformed, switch to the {0} for editing.",
    "DESIGN": "Design",
    "SOURCE": "Source",
    "SOURCE_PANE": "source pane",
    "LINE_NUMBERS": "Line numbers",
    "DOCUMENTATION_DEFAULT": "Default: {0}",
    "REQUIRED_SUFFIX": "(required)",
    "USER_NAME": "Username",
    "USER_NAME_LABEL": "User name",
    "USER_NAME_OPTIONAL": "Username (Optional)",
    "PASSWORD": "Password",
    "PASSWORD_OPTIONAL": "Password (Optional)",
    "SIGN_IN": "Sign in",
    "ONE_MOMENT_PLEASE": "One moment please...",
    "LOGIN_FAIL": "Login failed, please try again",
    "FAILED" : "Failed.",
    "FAILED_HTTP_CODE" : "Request failed with HTTP status code {0}.",
    "SUCCESS" : "Success.",
    "RESPONSE": "Response",
    "PARAMETERS": "Parameters",
    "MISSING_USER_NAME": "Please specify your user name", 
    "SIGN_OUT": "Sign out",
    "SIGN_OUT_ERROR": "An error occurred while attempting to sign out",
    "SIGN_OUT_PROMPT": "Sign out?",
    "CHANGES_SAVED": "Changes saved",
    "FILE_ACCESS_ERROR_MESSAGE": "An error occurred while trying to access the server configuration files",
    "ERROR_SAVING_FILE_MESSAGE": "The changes were not saved. The server might be down, the file might be read-only, or you might be in a role that does not have permission to make configuration changes.",
    "ERROR": "Error",
    "UNSAVED_CHANGES_MESSAGE": "There are unsaved changes.",
    "READ_ONLY": "Read only",
    "RESTRICTED_OR_UNAVAILABLE": "Restricted or unavailable",
    "EXPLORE_INCLUDES": "Explore includes",
    "OPEN": "Open",
    "READ_ONLY_WARNING_MESSAGE": "Remote file access is not configured on this server. Files are available in read-only mode. To enable write access, add the following element to the server.xml file:",
    "SAVE_BEFORE_CLOSING_DIALOG_TITLE": "Close",
    "SAVE_BEFORE_CLOSING_DIALOG_MESSAGE": "Save changes to {0} before closing?",
    "DONT_SAVE": "Don't Save",
    "RETURN_TO_EDITOR": "Return to editor",
    "THE_VALUE_SHOULD_BE_A_BOOLEAN": "The value should be true or false.",
    "THE_VALUE_SHOULD_BE_A_NUMBER": "The value should be a number.",
    "THE_VALUE_SHOULD_BE_AMONG_THE_POSSIBLE_OPTIONS": "The value should be among the possible options: {0}.",
    "UNRECOGNIZED_ELEMENT": "The element \"{0}\" is not recognized by the server. Please switch to the {1} to edit its content.",
    "SERVER_NOT_FOUND": "The server \"{0}\" with host \"{1}\" and user directory \"{2}\" was not found.",
    "FILE_NOT_FOUND_REPLACE": "The file \"{0}\" was not found.",
    "ERROR_ACCESSING_SERVER_LIST": "The list of servers in the collective could not be accessed.",
    "ERROR_NOT_IN_COLLECTIVE_ENVIRONMENT": "The remote server reference in the URL is not valid outside of a collective environment. Click {0} to access the configuration files on the local server.",
    "ERROR_ACCESSING_INCLUDE_FILES": "The include files could not be accessed.",
    "PATH_NOT_AVAILABLE": "Path not available",
    "HERE": "here",
    "CHANGE_SERVER": "Change Server",
    "ERROR_RETRIEVING_SERVER_INFORMATION": "Server information could not be retrieved.",
    "SELECT_SERVER": "Select Server",
    "SERVER_DESCRIPTION": "Select an element on the left hand side tree to view its configuration.",
    "SELECT_ELEMENT_TO_VIEW_DESCRIPTION": "Select an element to view its description.",
    "SAVING": "Saving...",
    "SERVER_NAME": "Server Name",
    "CLUSTER": "Cluster",
    "HOST": "Host",
    "USER_DIRECTORY_PATH": "User Directory Path",
    "SERVERS": "{0} Servers",
    "ONE_SERVER": "1 Server",
    "SHOWING_FIRST_N_SERVERS": "(Showing first 500 servers)",
    "COULD_NOT_RETRIEVE_SERVER_IDENTIFICATION": "Could not retrieve server identification information.",
    "CONTENT_ASSIST_AVAILABLE": "Press Ctrl+space for content assist.",
    "OPEN_FILE": "Open file",
    "CREATE_FILE": "Create file",
    "FILE_NOT_FOUND": "File not found",
    "CANNOT_ACCESS_FILE": "Cannot access file",
    "CREATING_FILE": "Creating file...",
    "SUCCESSFULLY_CREATED_FILE": "Successfully created file",
    "COULD_NOT_CREATE_FILE": "Could not create file",
    "FILE_CHANGED_DURING_EDITING_DIALOG_TITLE": "Save Conflict",
    "OVERWRITE": "Overwrite",
    "FILE_CHANGED_DURING_EDITING_DIALOG_MESSAGE": "The file {0} was changed by a different user or process after it was opened.",
    "OVERWRITING": "Overwriting...",
    "SEARCH": "Search",
    "SETTINGS": "Settings",
    "LOCATION": "Location",
    "EXPAND": "Expand",
    "COLLAPSE": "Collapse",
    "CLEAR": "Clear",
    "EXPAND_COLLAPSE": "Expand/collapse",
    "ELEMENT_INFORMATION_FORM": "Element information form",
    "SOURCE_EDITOR": "Source editor",
    "SOURCE_EDITOR_CONTENT": "Source editor content",
    "SOURCE_EDITOR_MENU" : "Menu content",
    "ELEMENT_DESCRIPTION": "Element description",
    "ELEMENT_SEARCH": "Element search",
    "ADD_CHILD_ELEMENT_DIALOG": "Add child element dialog",
    "REMOVE_ELEMENT_DIALOG": "Remove element dialog",
    
    // Messages for test/validate connection dialog
    "VALIDATE_CONNECTION_DIALOG":"Validate connection dialog",
    "VALIDATE_CONNECTION":"Test connection",

    "DEFAULT_AUTHENTICATION_ALIAS":"Default authentication",
    "SPECIFY_AUTHENTICATION_ALIAS":"Specify authentication alias",
    "LOGIN_CONFIG":"Login config",
    "LOGIN_CONFIG_ID":"Login config id",
    "LOGIN_CONFIG_PROPERTIES":"Login config properties",
    "KEY":"Key",
    "CHOOSE_AN_OPTION":"Choose an option",
    
    "ENUMERATION_SELECTION_DIALOG": "Enumeration selection dialog",
    "SAVE_BEFORE_CLOSING_DIALOG": "Save before closing dialog",
    "ERROR_SAVING_FILE_DIALOG": "Error saving file dialog",
    "FILE_CHANGED_DURING_EDITING_DIALOG": "File changed during editing dialog",
    "SERVER_TABLE_CELL_FOR_SCREEN_READER": "Cluster {0}, Host {1}, User directory path {2}",
    "WARNING": "Warning",
    "EMPTY_STRING_ATTRIBUTE_VALUE": "(empty string) click the clear button to remove the attribute",
    "EMPTY_STRING_ELEMENT_VALUE": "(empty string)",
    "NO_VALUE": "(no value)",
    "DEFAULTS": "Defaults",
    "PRIMARY": "Primary",
    "AUTH_ALIAS_OPTIONAL": "Authentication alias (Optional)",
    "AUTH_ALIAS": "Authentication alias",
    "CONTAINER_AUTHENTICATION": "Container authentication",
    "RESOURCE_REFERENCE": "Resource reference",
    "APPLICATION_AUTHENTICATION": "Application authentication",
    "CUSTOM_LOGIN_MODULE": "Custom login module (Optional)",
    "LOGIN_PROPERTIES": "Login properties (Optional)",
    "TEST_RESULTS": "Datasource test results",
    "OVERRIDES": "Overrides",
    "SELECT_FEATURE_DIALOG": "Select feature dialog",
    "SELECT_FEATURE": "Select feature",
    "FEATURE_DESCRIPTION": "Feature description",
    "SELECT_FEATURE_TO_VIEW_DESCRIPTION": "Select a feature to view its description.",
    "SUPPORT_MESSAGE" : "Server Config is not available for Node.js servers nor servers in a Docker container accessed through the collective controller.",
    "NO_ROLE_MESSAGE": "The user is not in a role that has permission to make configuration changes. Files are available in read-only mode.",
        
    // Messages for Collective Debugging
    "REQUIRED_ACTIONS" : "REQUIRED ACTIONS FOR COLLECTIVE MEMBERS:",
    "RUN_UPDATE_HOST" : "Run 'collective updateHost' or 'collective registerHost' with '--hostWritePath' specifying a path to which the rpcUser has write permissions to.  Valid host credentials must be provided as well.",
    "REGISTERING_HOST_LINK" : "Registering host computers with a Liberty collective",
    "CONIFGURED_SSH_RXA" : "The member server must have properly configured SSH or hostAuthInfo in its configuration.",
    "CONFIGURING_COLLECTIVE_LINK" : "Configuring Liberty Collective",
    "CONFIGURING_RXA_LINK" : "Configuring RXA",
    "TWO_LINKS" : "{0} and {1}", //Hyperlink 1 (CONFIGURING_COLLECTIVE_LINK) and hyperlink 2 (CONFIGURING_RXA_LINK)
    "CONFIGRUED_READ_DIR" : "Ensure that the member's configuration specifies remoteFileAccess readDir access to the configuration files that should be accessible through Server Config.",
    "DEFAULT_READ_DIR" : "Note: By default (and in the absence of remoteFileAccess specified in the configuration), the following readDirs are available: ${wlp.install.dir}, ${wlp.user.dir} and ${server.output.dir}.  No writeDir(s) are available by default.",
    "PUBLISHED_READ_DIR" : "The member server must be running or have previously been started, and have successfully published its remoteFileAccess readDir(s).",
    "JAVA_AVAILABLE" : "Ensure that JAVA is set on the path. There are 3 ways to set JAVA:",
    "HOST_JAVA_HOME" : "Specifying the --hostJAVAHome parameter in collective updateHost command. e.g. ./collective updateHost --host=[hostName] --user=[user] --password=[password] --port=[httpsPort] --hostJAVAHome=[pathToJAVA]",
    "LINK_JAVA" : "Create a link to JAVA in /usr/bin. e.g. /usr/bin/java -> [pathToJAVA]",
    "JAVA_ON_PATH" : "Add JAVA to the PATH environment variable.  Exporting the PATH should be done in .bashrc on Linux.", 
    "MORE_INFORMATION" : "For more information see: "
    };