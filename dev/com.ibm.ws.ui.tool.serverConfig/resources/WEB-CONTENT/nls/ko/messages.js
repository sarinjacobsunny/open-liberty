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
"VALUE": "값",
"SELECT": "선택",
"ADD": "추가",
"OK": "확인",
"CANCEL": "취소",
"ADD_CHILD": "하위 추가",
"REMOVE": "제거",
"TEST" : "테스트",
"TEST_CONNECTION": "연결 테스트",
"DESCRIPTION": "설명",
"PREVIOUS": "이전",
"NEXT": "다음",
"REMOVE_ELEMENT_CONFIRMATION": "요소를 제거하시겠습니까?",
"YES": "예",
"NO": "아니오",
"LOADING": "로드 중...",
"SERVER_CONFIGURATION_EDITOR": "서버 구성 도구",
"CONFIGURATION_FILES": "구성 파일",
"TOGGLE_NAVIGATION": "탐색 토글",
"CLOSE": "닫기",
"ERROR_ACCESSING_SERVER_CONFIGURATION_FILE": "서버 구성 파일 {0}에 액세스할 수 없습니다.",
"ERROR_ACCESSING_SERVER_SCHEMA_FILE": "스키마 파일 {0}에 액세스할 수 없습니다.",
"NO_MATCHES_FOUND": "항목을 찾을 수 없습니다.",
"DEFAULT_VALUE_PLACEHOLDER": "{0}(기본값)",
"DEFAULT_VALUE_PLACEHOLDER_WITH_VARIABLE": "{0}(기본값) 또는 ${{1}}(정의된 경우)",
"VARIABLE_VALUE_PLACEHOLDER": "{0}(정의된 경우)",
"DEFAULT_SUFFIX": "(기본값)",
"SAVE": "저장",
"DISCARD": "버리기",
"ENHANCED_LABELS": "향상된 레이블",
"FIELD_DESCRIPTIONS": "필드 설명",
"MALFORMED_XML": "XML 컨텐츠의 형식이 잘못된 것 같습니다. 편집하려면 {0}(으)로 전환하십시오.",
"DESIGN": "디자인",
"SOURCE": "소스",
"SOURCE_PANE": "소스 분할창",
"LINE_NUMBERS": "행 번호",
"DOCUMENTATION_DEFAULT": "기본값:{0}",
"REQUIRED_SUFFIX": "(필수)",
"USER_NAME": "사용자 이름",
"USER_NAME_OPTIONAL": "사용자 이름(선택사항)",
"PASSWORD": "비밀번호",
"PASSWORD_OPTIONAL": "비밀번호(선택사항)",
"SIGN_IN": "로그인",
"ONE_MOMENT_PLEASE": "잠깐 기다리십시오...",
"LOGIN_FAIL": "로그인에 실패했습니다. 다시 시도하십시오.",
"FAILED" : "실패했습니다.",
"FAILED_HTTP_CODE" : "요청이 HTTP 상태 코드 {0}(으)로 실패했습니다.",
"SUCCESS" : "성공했습니다.",
"RESPONSE": "응답",
"PARAMETERS": "매개변수",
"MISSING_USER_NAME": "사용자 이름을 지정하십시오.", 
"SIGN_OUT": "로그아웃",
"SIGN_OUT_ERROR": "로그아웃하려는 중에 오류가 발생했습니다.",
"SIGN_OUT_PROMPT": "로그아웃하시겠습니까?",
"CHANGES_SAVED": "변경사항이 저장됨",
"FILE_ACCESS_ERROR_MESSAGE": "서버 구성 파일에 액세스하려는 중에 오류가 발생했습니다.",
"ERROR_SAVING_FILE_MESSAGE": "변경사항이 저장되지 않았습니다. 서버가 작동 중지될 수 있거나, 파일이 읽기 전용일 수 있거나, 사용자에게 구성을 변경할 수 있는 권한이 없을 수 있습니다.",
"ERROR": "오류",
"UNSAVED_CHANGES_MESSAGE": "저장되지 않은 변경사항이 있습니다.",
"READ_ONLY": "읽기 전용",
"RESTRICTED_OR_UNAVAILABLE": "제한 또는 사용 불가능",
"EXPLORE_INCLUDES": "탐색 포함",
"OPEN": "열기",
"READ_ONLY_WARNING_MESSAGE": "이 서버에는 원격 파일 액세스가 구성되지 않았습니다. 파일은 읽기 전용 모드로 사용할 수 있습니다. 쓰기 액세스를 사용으로 설정하려면 다음 요소를 server.xml 파일에 추가하십시오.",
"SAVE_BEFORE_CLOSING_DIALOG_TITLE": "닫기",
"SAVE_BEFORE_CLOSING_DIALOG_MESSAGE": "닫기 전에 {0}에 변경사항을 저장하시겠습니까?",
"DONT_SAVE": "저장 안함",
"RETURN_TO_EDITOR": "편집기로 돌아가기",
"THE_VALUE_SHOULD_BE_A_BOOLEAN": "값은 true 또는 false여야 합니다.",
"THE_VALUE_SHOULD_BE_A_NUMBER": "값은 숫자여야 합니다.",
"THE_VALUE_SHOULD_BE_AMONG_THE_POSSIBLE_OPTIONS": "값은 가능한 옵션({0}) 중 하나여야 합니다.",
"UNRECOGNIZED_ELEMENT": "\"{0}\" 요소는 서버에서 인식되지 않습니다. 컨텐츠를 편집하려면 {1}(으)로 전환하십시오.",
"SERVER_NOT_FOUND": "호스트가 \"{1}\"이고 서버 디렉토리가 \"{2}\"인 \"{0}\" 서버를 찾을 수 없습니다.",
"FILE_NOT_FOUND_REPLACE": "\"{0}\" 파일을 찾을 수 없습니다.",
"ERROR_ACCESSING_SERVER_LIST": "집합체의 서버 목록에 액세스할 수 없습니다.",
"ERROR_NOT_IN_COLLECTIVE_ENVIRONMENT": "URL의 원격 서버 참조가 집합체 환경의 외부에서는 올바르지 않습니다. 로컬 서버의 구성 파일에 액세스하려면 {0}을(를) 클릭하십시오.",
"ERROR_ACCESSING_INCLUDE_FILES": "포함 파일에 액세스할 수 없습니다.",
"PATH_NOT_AVAILABLE": "경로를 사용할 수 없음",
"HERE": "여기",
"CHANGE_SERVER": "서버 변경",
"ERROR_RETRIEVING_SERVER_INFORMATION": "서버 정보를 검색할 수 없습니다.",
"SELECT_SERVER": "서버 선택",
"SERVER_DESCRIPTION": "왼쪽의 트리에 있는 요소를 선택하여 해당 구성을 봅니다.",
"SELECT_ELEMENT_TO_VIEW_DESCRIPTION": "요소를 선택하여 해당 설명을 봅니다.",
"SAVING": "저장 중...",
"SERVER_NAME": "서버 이름",
"CLUSTER": "클러스터",
"HOST": "호스트",
"USER_DIRECTORY_PATH": "사용자 디렉토리 경로",
"SERVERS": "{0}개 서버",
"ONE_SERVER": "1개의 서버",
"SHOWING_FIRST_N_SERVERS": "(처음 500개의 서버 표시)",
"COULD_NOT_RETRIEVE_SERVER_IDENTIFICATION": "서버 식별 정보를 검색할 수 없습니다.",
"CONTENT_ASSIST_AVAILABLE": "컨텐츠 지원을 원하면 Ctrl+space를 누르십시오.",
"OPEN_FILE": "파일 열기",
"CREATE_FILE": "파일 작성",
"FILE_NOT_FOUND": "파일을 찾을 수 없음",
"CANNOT_ACCESS_FILE": "파일에 액세스할 수 없음",
"CREATING_FILE": "파일 작성 중...",
"SUCCESSFULLY_CREATED_FILE": "파일 작성 완료",
"COULD_NOT_CREATE_FILE": "파일을 작성할 수 없음",
"FILE_CHANGED_DURING_EDITING_DIALOG_TITLE": "저장 충돌",
"OVERWRITE": "겹쳐쓰기",
"FILE_CHANGED_DURING_EDITING_DIALOG_MESSAGE": "{0} 파일은 열린 후 다른 사용자 또는 프로세스에 의해 변경되었습니다.",
"OVERWRITING": "겹쳐쓰기 중...",
"SEARCH": "검색",
"SETTINGS": "설정",
"LOCATION": "위치",
"EXPAND": "펼치기",
"COLLAPSE": "접기",
"CLEAR": "지우기",
"EXPAND_COLLAPSE": "펼치기/접기",
"ELEMENT_INFORMATION_FORM": "요소 정보 양식",
"SOURCE_EDITOR": "소스 편집기",
"SOURCE_EDITOR_CONTENT": "소스 편집기 컨텐츠",
"SOURCE_EDITOR_MENU" : "메뉴 컨텐츠",
"ELEMENT_DESCRIPTION": "요소 설명",
"ELEMENT_SEARCH": "요소 검색",
"ADD_CHILD_ELEMENT_DIALOG": "하위 요소 추가 대화 상자",
"REMOVE_ELEMENT_DIALOG": "하위 요소 제거 대화 상자",
"ENUMERATION_SELECTION_DIALOG": "열거 선택 대화상자",
"SAVE_BEFORE_CLOSING_DIALOG": "닫기 전에 저장 대화 상자",
"ERROR_SAVING_FILE_DIALOG": "파일 저장 중 오류 대화 상자",
"FILE_CHANGED_DURING_EDITING_DIALOG": "편집 중 파일이 변경됨 대화 상자",
"SERVER_TABLE_CELL_FOR_SCREEN_READER": "클러스터 {0}, 호스트 {1}, 사용자 디렉토리 경로 {2}",
"WARNING": "경고",
"EMPTY_STRING_ATTRIBUTE_VALUE": "(비어 있는 문자열) 속성을 제거하려면 지우기 단추 클릭",
"EMPTY_STRING_ELEMENT_VALUE": "(비어 있는 문자열)",
"NO_VALUE": "(값 없음)",
"DEFAULTS": "기본값",
"PRIMARY": "기본",
"AUTH_ALIAS_OPTIONAL": "인증 별명(선택사항)",
"AUTH_ALIAS": "인증 별명",
"CONTAINER_AUTHENTICATION": "컨테이너 인증",
"APPLICATION_AUTHENTICATION": "애플리케이션 인증",
"CUSTOM_LOGIN_MODULE": "사용자 정의 로그인 모듈(선택사항)",
"LOGIN_PROPERTIES": "로그인 특성(선택사항)",
"TEST_RESULTS": "데이터 소스 테스트 결과",
"OVERRIDES": "대체",
"SELECT_FEATURE_DIALOG": "기능 선택 대화 상자",
"SELECT_FEATURE": "기능 선택",
"FEATURE_DESCRIPTION": "기능 설명",
"SELECT_FEATURE_TO_VIEW_DESCRIPTION": "기능을 선택하여 해당 설명을 봅니다.",
"SUPPORT_MESSAGE" : "서버 구성은 집합체 제어기를 통해 액세스되는 Docker 컨테이너의 서버와 Node.js 서버에 사용할 수 없습니다.",
"NO_ROLE_MESSAGE": "사용자가 구성을 변경할 수 있는 권한이 있는 역할에 없습니다. 파일은 읽기 전용 모드에서 사용할 수 있습니다.",
	
// Messages for Collective Debugging
"REQUIRED_ACTIONS" : "집합체 멤버에 필요한 조치:",
"RUN_UPDATE_HOST" : "rpcUser에 쓰기 권한이 있는 경로를 지정하는 '--hostWritePath'를 사용하여 'collective updateHost' 또는 'collective registerHost'를 실행하십시오. 올바른 호스트 신임 정보도 제공되어야 합니다.",
"REGISTERING_HOST_LINK" : "Liberty 집합체로 호스트 컴퓨터 등록",
"CONIFGURED_SSH_RXA" : "멤버 서버는 구성에서 SSH 또는 hostAuthInfo를 올바르게 구성해야 합니다.",
"CONFIGURING_COLLECTIVE_LINK" : "Liberty 집합체 구성",
"CONFIGURING_RXA_LINK" : "RXA 구성",
"TWO_LINKS" : "{0} 및 {1}", //Hyperlink 1 (CONFIGURING_COLLECTIVE_LINK) and hyperlink 2 (CONFIGURING_RXA_LINK)
"CONFIGRUED_READ_DIR" : "멤버의 구성이 remoteFileAccess readDir 액세스를 서버 구성을 통해 액세스되어야 하는 구성 파일에 지정하는지 확인하십시오.",
"DEFAULT_READ_DIR" : "참고: 기본적으로(그리고 구성에서 지정된 remoteFileAccess가 없는 경우) ${wlp.install.dir}, ${wlp.user.dir} 및 ${server.output.dir} readDirs가 사용 가능합니다. 기본적으로 writeDir은 사용 불가능합니다.",
"PUBLISHED_READ_DIR" : "멤버 서버는 실행되어야 하거나 이전에 시작된 상태이며, remoteFileAccess readDir을 공개했습니다.",
"JAVA_AVAILABLE" : "JAVA가 경로에 설정되었는지 확인하십시오. 다음과 같은 세 가지 방법으로 JAVA를 설정할 수 있습니다.",
"HOST_JAVA_HOME" : "집합체 updateHost 명령(예: ./collective updateHost --host=[hostName] --user=[user] --password=[password] --port=[httpsPort] --hostJAVAHome=[pathToJAVA])에서 --hostJAVAHome 매개변수 지정",
"LINK_JAVA" : "/usr/bin에서 JAVA에 대한 링크 작성(예/: /usr/bin/java -> [pathToJAVA])",
"JAVA_ON_PATH" : "JAVA를 PATH 환경 변수에 추가. Linux의 .bashrc에서 PATH 내보내기를 수행해야 합니다.", 
"MORE_INFORMATION" : "자세한 정보는 다음을 참조하십시오. "

};
