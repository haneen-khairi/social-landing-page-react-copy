import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import {
  BusinessShip,
  Campaign,
  Congnition,
  FamilyHome,
  Globe,
  PartnerExchange,
  Storage,
  SubTitle,
} from "../../assets/icons";

function Goals() {
  const goals = [
    {
      description:
        "لكي يفهم العالم كله معنى: يكفي استهتار بنا..! نحن شعوب تستحق الاحترام والاحترام لا يُستجدى بل يُكتسب وهذه هي الخطوة الأولى لإعادة المجد العربي الذي كان منبعاً ومنارة لكافة شعوب الأرض.",
      icon: <Campaign />,
    },
    {
      description:
        "لتكون البيت الأصيل للمحتوى العربي المفيد والثري حيث الثراء الثقافي واللغوي والإبداعي. ",
      icon: <FamilyHome />,
    },
    {
      description:
        "لنتخلص من هيمنة الخوارزميات، التي لم توجد الا بفضل الله - سبحانه وتعالى - وفضل العالم المسلم محمد بن موسى الخوارزمي المتوفى في بغداد، والتي باتت تستخدم من قبلهم لطمس صوت الحق وترويج التفاهة بينما ستعمل منظومتنا العربية وخوارزمياتنا على تعزيز الثقافة العربية والارتقاء بالإنسان العربي.",
      icon: <PartnerExchange />,
    },
    {
      description:
        "لحماية البيانات والخصوصية والحد من التدخلات وجمع البيانات من قبل شركات أجنبية قد تستخدمها لأغراضها الخاصة.",
      icon: <SubTitle />,
    },
    {
      description:
        "لتوظيف القوة الشبابية العربية في بناء وتطوير هذه المنظومة العربية المميزة.",
      icon: <Storage />,
    },
    {
      description:
        "لتعزيز الفهم والتسامح وتشجيع فهم أعمق للتنوع الثقافي والاحترام المتبادل، وتعزيز قيم التسامح في المجتمع العربي واحترام الرأي والرأي الآخر.",
      icon: <BusinessShip />,
    },
    {
      description:
        "لننفتح على العالم الخارجي ولكن من منظور عربي، حيث سيتاح التواصل مع العالم بعدة لغات. نحن نفتح أيدينا للعالم وسيجدون منصتنا منصة حرة. ",
      icon: <Congnition />,
    },
    {
      description:
        "لتعزيز وحدة النبض العربي بين مختلف أبناء الدول العربية، مما يعزز بشكل كبير الروابط الثقافية والاقتصادية بين شعوب العالم العربي. كما ستحافظ هذه المنظومة العربية على المال العربي في الوطن العربي بدلاً من إنفاقه على منصات أجنبية ليس لها أي علاقة بنا. ",
      icon: <Globe />,
    },
  ];
  return (
    <Box px={{ base: "40px", lg: "80px" }} py="30px" id="goals">
      <SectionTitle title="أهداف الإستطلاع" />
      <VStack spacing={{ base: "50px", lg: "24px" }} align="stretch">
        {goals.map((item, index) => (
          <HStack
          className="stack-hover"
            spacing="24px"
            key={index}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              bg="primary"
              w="120px"
              h="120px"
              rounded="4px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              className="icon-hover"
            >
              {item.icon}
            </Box>
            <Box
              bg="#F3F3F3"
              p="24px"
              h={{ base: "100%", lg: "120px" }}
              display="flex"
              justifyContent="start"
              alignItems="center"
              rounded="4px"
              w="100%"
            >
              <Text fontSize="20px" fontWeight="400" fontFamily="Readex Pro">
                {item.description}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default Goals;
