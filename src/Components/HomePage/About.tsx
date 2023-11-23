import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <Box
      p={{ base: "20px", lg: "80px" }}
      id="about"
      textAlign={{ base: "center", lg: "right" }}
    >
      <SectionTitle title="عن الإستطلاع" />
      <HStack
        mt="40px"
        fontSize="22px"
        fontFamily="Readex Pro"
        fontWeight="400"
        spacing="40px"
        lineHeight="48.4px"
        alignItems="start"
        flexDir={{ base: "column", lg: "row" }}
      >
        <VStack align="stretch" flex="1">
          <Text>
            إن ما فرضته الظروف الحالية في المنطقة العربية والعالم يعتبر بداية
            لمرحلة جديدة يسعى من خلالها كل العالم بقادتها وشعوبه ومؤسساته لإعادة
            النظر بما هو مطلوب وممكن وصحيح للمرحلة القادمة وعلى كافة الصعد، من
            هنا فقد ارتئينا في شركة المنصة الرقمية لتطوير ريادة الأعمال وبعد
            التشاور مع عدة جهات ذات علاقة بالشأن الريادي والتقني والاعلامي أن
            نبادر بطرح استطلاع رأي عربي بهدف التأكد من رغبتنا الجماعية كأمة
            عربية للبدء بتطوير منظومة متكاملة من مواقع التواصل الاجتماعي
            والمهني.{" "}
          </Text>
          <Text>
            وقد برزت الحاجة لهذه المنظومة بعدما اكتشفنا وعلى مدار أكثر من 20
            عاماً أن غالبية مواقع التواصل العالمية تقمع حرية الرأي وحرية التعبير
            عن الأفكار وتحد من حرية إبداء الرأي وتقبل الرأي الآخر.
          </Text>
          <Text>
            ومنذ بدء العدوان الإسرائيلي على أهلنا في فلسطين وخصوصاً في قطاع غزة،
            بدأنا بالمعاناة وفي مختلف أنحاء العالم من حصار رهيب وتقييد غير مبرر
            من قبل عدد كبير من منصات التواصل الاجتماعي العالمية هدفه تضييق
            الخناق على المحتوى الذي يبين الجرائم التي ترتكب بحق الأطفال والنساء
            والمدنيين العزل. كما تبين لنا أن أغلب هذه المنصات تشجع وتدعم المحتوى
            الذي يشيد برواية المعتدي مما يجعل هذه المنصات منحازة وبكل وضوح
            للعدوان الجائر على فلسطين.
          </Text>
        </VStack>
        <VStack align="stretch" flex="1">
          <Text>
            كما أنه وفي ظل التطورات الهائلة في عالم التكنولوجيا والتواصل، تبرز
            حاجة ملحة لإقامة منظومة تواصل اجتماعي عربية تكون متوافقة مع ثقافتنا
            ولغتنا العربية الأصيلة. كما أن إنشاء منصات تواصل اجتماعي عربية تعزز
            التفاعل الثقافي والاجتماعي والاقتصادي العربي بشكل فعّال، مما يثري
            التواصل ما بين أفراد المجتمع العربي ويقوي الروابط الاجتماعية.
          </Text>
          <Text>
            وفي حال انطلقت هذه المنظومة الإعلامية العربية فإنها ستشكل مساحة آمنة
            وعادلة تسمح للمستخدمين بتبادل الآراء والمعلومات بطريقة تعكس قيم
            وتقاليد المنطقة وتعبر عن قضاياها المصيرية المشتركة. إضافة لذلك،
            سيسهم وجود منصات تواصل اجتماعي عربية في تعزيز الابتكار وريادة
            الأعمال على امتداد وطننا العربي وهذا من شأنه أن يعكس أهمية تكامل
            التقنيات الحديثة مع الهوية الثقافية العربية.
          </Text>
        </VStack>
      </HStack>
      <Text
        fontSize="22px"
        fontWeight="400"
        fontFamily="Readex Pro"
        mt="40px"
        lineHeight="48.4px"
        border="1px solid #5AA48A"
        p="5"
        rounded="10px"
      >
        هذا الاستطلاع متاح لكل عربي مهتم بالانضمام لهذه المنظومة عند إطلاقها ،
        وأيضا ستكون متاحة لكل من يجد لديه القدرة على المساهمة في تطويرها بشكل
        تطوعي. ليكن هذا المشروع أكبر مشروع تطوعي تقني في تاريخ العالم العربي
        ليرى العالم أننا قادرون على دعم كافة قضايانا العربية وأن ما بعد العدوان
        على غزة لن يكون أبداً كما سبقه. نحن لا نريد أن نعادي أحداً ولكننا نريد
        أن ندافع عن أنفسنا وبوسائلهم. من يدري ربما تكون هذه بداية لنهضة
        تكنولوجية عربية تضعنا في المكانة التي نستحق كـأمة لها تاريخ مجيد وتمتلك
        من قدرات ابنائها ما يمكن أن يصنع المستحيل.
      </Text>
    </Box>
  );
};

export default About;
