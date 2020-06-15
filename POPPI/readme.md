마이페이지를 담당한 POPPI 입니다.

1. Assets/Images
    - 추가 항목
      -calendar.png
      -location.png
      -restaurant.png
     
2. Components

    2-1) IconButton (none ~ 6)
      -추가된 코드 설명
            interface Props {
              // 이부분 label이 추가되었습니다 
      label?: string;
      iconName:
        | 'camera'
        | 'live'
        | 'next'
        // 'prod', 'meet', 'space' 추가되었습니다.
        | 'prod'
        | 'meet'
        | 'space'
        | 'send'
        | 'dotMenu'
        | 'favorite'
        | 'comment'
        | 'bookmark'
        | 'menu';
      style?: object;
      onPress?: () => void;
    }
    // label 추가되었습니다.
    const IconButton2 = ({ iconName, style, label, onPress }: Props) => {
      const imageSource = {

    // prod, meet, space 추가되었습니다.
    prod: require('~/Assets/Images/restaurant.png'),
    meet: require('~/Assets/Images/location.png'),
    space: require('~/Assets/Images/calendar.png'),

      // IconButton2 ~ 6 까지 똑같습니다.
      // 주의사항! IconButton2~6 까지 Icon의 size가 다릅니다. 각 화면에 쓰이기 위해 사이즈 조정을 하였습니다. 참고 부탁드릴게요 :)
                  Container 를 이용하면 됐을 것을,,, 이를 몰랐던 과거의 나는 웁니다,,,

      IconButton2/index.tsx
      const Icon = Styled.Image`
          width: 30px;
          height: 30px;
          margin-right: 110px;
          margin-top: -5px;
        `;

      IconButton3/index.tsx
      const Icon = Styled.Image`
          width: 20px;
          height: 20px;
        `;

      IconButton4/index.tsx
      const Icon = Styled.Image`
          width: 20px;
          height: 20px;
          margin-top: 15px;
        `;

      IconButton5/index.tsx
      const Icon = Styled.Image`
          width: 20px;
          height: 20px;
          margin-top: 15px;
          marginRight: 48px;
        `;

      IconButton6/index.tsx
      const Icon = Styled.Image`
          width: 20px;
          height: 20px;
          opacity: 0.3;
          top: -10px;
        `;
       
     2-2) TextInput 생성
     // 기존의 '~/Components/Input' 과는 다른 TextInput 이 새로 추가되었습니다.

3. Screens

  3-1) @types/index.d.ts
      // 많은 항목이 추가되었습니다. Navigation에 필요한 항목들 입니다.
  
  3-2) EditProfile/index.tsx
      // 프로필 수정입니다.
      
  3-3) **MyFeed/index.tsx
      **// 제가 손을 댄 것은 아니나, MyFeed가 있어야 프론트가 돌아갑니다 !꼭 넣어주세요 :)
    
  3-4) MyMeet/index.tsx
      // 나의 모이자 공간 입니다. 아직 서버와의 연결은 하지 않은 상태입니다.
      
  3-5) MyProd, MySpace /index.tsx
      // 구현하지 못한 서비스입니다. 일단 카테고리와 빈 화면을 만들어두었습니다.
      
  3-6) Notification/index.tsx
      // 공지사항 입니다. 기존 예제의 Notification 과는 다릅니다.
      <LabelContainer>
        <Label>06/11(목) 클라이언트 v.2.5.0 업데이트 안내</Label>
      </LabelContainer>
      <LabelContainer>
        <Label>06/05(금) 악의적인 사용자 제재 안내</Label>
      </LabelContainer>
      // (대충 이렇다는 내용.)
      
  3-7) **Profile/index.tsx**
      // 가장 중요합니다. 마이페이지의 꽃입니다. 마이페이지의 모든 것들이 모여있는 곳 입니다.
      // IconButton은 2부터 5까지 사용하였습니다.
      // *조금 난잡할 지도 모릅니다*
      3-7-1) ProfileBody/index.tsx
              // 예제의 내용과 동일합니다.
              
  3-8) PushPage/index.tsx
      // PushList에서 정보를 전달받아 알람을 띄우는 페이지 입니다.
      3-8-1) PushList
              // 알람 리스트 입니다. 가볍게 8개만 띄웠습니다.
              
  3-9) QuestionPage/index.tsx
      // 문의하기 페이지 입니다. LoginInfo에서 호출해온 {nickname}을 받아 POPPI 라는 nickname이 뜹니다.
      // Picker를 사용했습니다.
      // 문의에 대한 답변은 E-mail로 전달 할 계획입니다.
      // 등록하기 버튼 클릭 시, Profile (마이페이지 메인화면) 으로 이동하게 됩니다.
      3-9-1) LoginInfo/index.tsx
              // 로그인 정보입니다. QuestionPage에서 {nickname}을 호출하기 위한 페이지 입니다.

  3-10) SettignPage/index.tsx
        // SettingPage의 모든 정보가 들어있는 페이지 입니다. 
        
   3-10-1) LocationPrivacy/index.tsx
            // 위치기반서비스 이용약관입니다. 내용은 다른 Application을 참고하였습니다.
  
   3-10-2) LoginInfo/index.tsx
            // 위의 QuestionPage/LoginInfo 와 동일합니다. UI 상의 로그인 정보에서 {nickname} 호출을 위해 사용되는 파일입니다.
  
   3-10-3) LoginStatus/index.tsx
            // 현재 로그인 상태를 확인하는 페이지 입니다. LoginInfo를 받아와 {nickname}을 호출합니다.
            // **로그아웃이 가능한 페이지 입니다.**
  
   3-10-4) OpensourceLicense/index.tsx
            // 오픈소스 라이선스 입니다. 내용은 다른 Application을 참고하였습니다.
   
   3-10-5) PrivacyPolicy/index.tsx
            // 개인정보처리방침 입니다. 내용은 다른 Application을 참고하였습니다.
  
   3-10-6) ProfileDetail/index.tsx/index.tsx
            // 계정 설정/상세 설정 페이지 입니다. 전화번호, 이메일, 비밀번호 변경, 회원탈퇴 기능이 있습니다.
   
   ***하위 디렉터리 목록***
       - ChangePassword          (비밀번호 변경)
         - SetNewPw              (새 비밀번호 입력)
           -ReLogin              (재로그인)
       - Email                   (이메일 변경)
         - CheckEmail            (이메일 인증요청)
           -SuccessEmail         (이메일 변경 성공)
       - PhoneNum                (전화번호 변경, 인증 요청이 한 페이지에서 이루어짐.)
         - SuccessPn             (전화번호 변경 성공)
       - Withdrawal              (회원 탈퇴)
         - DetailWd              (회원 탈퇴 상세 페이지)
                
   3-10-7) SetAuth/index.tsx/index.tsx
            // 권한 설정 페이지 입니다. 권한을 설정할 수 있게 설명이 적혀있습니다. 
            // *디바이스 환경설정의 권한 으로 넘어가는 방법을 찾지 못해서 글로 설명함*
              
   3-10-8) TOS/index.tsx
            // 이용약관 입니다. 내용은 다른 Application을 참고하였습니다.
  
  3-11) Navigator.tsx
        // 마이페이지의 모든 페이지가 연결된 네비게이션입니다. 내용 굉장히 많습니다. 하다가 궁금한 게 있으시면 언제든 저를 찾아주세요.
