package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.jelly.entity.Member;
import my.jelly.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class JellyTestService {

    // 회원의 MBTI Type에 맞는 젤리 결과 저장하기
    public void callJellyResult(String mJelly, Member member) {
        if (mJelly.equals("ENTJ") || mJelly.equals("ESTP") || mJelly.equals("INTJ"))
            member.setMJelly(1);
        else if (mJelly.equals("ESTJ") || mJelly.equals("ESFP") || mJelly.equals("ISFP"))
            member.setMJelly(2);
        else if (mJelly.equals("ESFJ") || mJelly.equals("ENFP") || mJelly.equals("INTP"))
            member.setMJelly(3);
        else if (mJelly.equals("ENTP") || mJelly.equals("ENFJ") || mJelly.equals("INFP"))
            member.setMJelly(4);
        else if (mJelly.equals("ISTP") || mJelly.equals("INFJ") || mJelly.equals("ISFJ") || mJelly.equals("ISTJ"))
            member.setMJelly(5);
    }

    // 젤리 결과 값 내려주기
    public Map<String, String> backJellyResult(Member member) {
        Map<String, String> result = new HashMap<>();
        int type = member.getMJelly();

        if (type == 1) {
            result.put("title", "빨간곰 젤리");
            result.put("content", "열정적인 빨간곰 젤리와 같은 당신은 도전을 즐기고 목표를 달성하기 위해 끊임없이 노력합니다.\n" +
                    "어려운 상황에서도 타협하지 않고 목표를 위해 결정을 내리며, 실행에 적극적으로 나서는 특징을 가지고 있습니다.\n" +
                    "이러한 특징으로 당신은 새로운 젤리를 도전함에 있어 거리낌이 없고 고민 없이 젤리를 구매할 수 있는 성격의 소유자입니다.\n" +
                    "오늘만큼은 평소 먹어보지 않았던 젤리를 드셔보는 것은 어떨까요?");
        } else if (type == 2) {
            result.put("title", "주황곰 젤리");
            result.put("content", "현실적인 주황 곰 젤리와 같은 당신은 강한 책임감을 갖고 있습니다.\n" +
                    "현재 상황을 중요시하며 사실에 기반한 판단을 통해 문제를 해결하고 실제적인 결과를 추구합니다.\n" +
                    "또한 일 처리에서도 실용적인 방법과 해결책을 적극적으로 찾아냅니다.\n" +
                    "이러한 특징으로 젤리를 구매할 때 꼼꼼히 살펴보는 성격의 소유자입니다.\n" +
                    "가끔은 젤리를 따지기보다는 현재의 기분에 따라 젤리를 구매해 보시는 것은 어떨까요??");
        } else if (type == 3) {
            result.put("title", "노란곰 젤리");
            result.put("content", "사교적인 노랑 곰 젤리와 같은 당신은 새로운 경험과 아이디어에 대해 호기심이 많고 사교적인 성격을 갖고 있습니다.\n" +
                    "창의성과 상상력이 뛰어난 당신은 새로운 아이디어를 탐구하는 데 관심이 많습니다.\n" +
                    "이러한 특징으로 젤리 같은 말랑함으로 주변의 사람들과도 친밀한 관계를 형성하고, 다양한 상황에서 유연하게 대처합니다.\n" +
                    "오늘은 친구들을 만나기 전 젤리를 구매해 함께 나누어 먹는 것은 어떨까요?");
        } else if (type == 4) {
            result.put("title", "초록곰 젤리");
            result.put("content", "도덕적인 초록 곰 젤리와 같은 당신은 개인의 가치관을 중요시하는 성격을 갖고 있습니다.\n" +
                    "타인과의 협력, 소통, 이해에 주안점을 두며 도덕성을 기반으로 행동하고 결정을 내리는 경향이 있습니다.\n" +
                    "또한 아이디어를 발전시키는 데에 있어서 창의적이고 비례적인 사고를 가지고 있습니다.\n" +
                    "이러한 특징으로 젤리를 먹으면 새로운 아이디어가 떠오를 수 있을 것 같습니다.\n" +
                    "오늘은 젤리를 먹으면서 새로운 아이디어를 떠올려 보는 것은 어떨까요??");
        } else {
            result.put("title", "투명곰 젤리");
            result.put("content", "신뢰성이 뛰어난 투명한 곰 젤리와 같은 당신은 타인과의 관계를 중요시하는 성격을 갖고 있습니다.\n" +
                    "맡은 일을 성실하게 처리하며 다른 사람에게 신뢰와 안정감을 제공하는 특징이 있습니다.\n" +
                    "또한 조직적인 성격으로 어느 집단에 속하더라도 일을 해결해 나아갈 수 있습니다.\n" +
                    "이러한 특징으로 사람들과 젤리를 먹으며 대화하고 안정과 조화를 유지하기 위해 노력합니다.\n" +
                    "오늘은 젤리를 먹으면서 생각을 정리하며 안정감을 느끼는 하루를 보내는 것은 어떨까요?");
        }
        return result;
    }
}
