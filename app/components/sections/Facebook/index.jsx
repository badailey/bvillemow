import { Layout } from "../layout";
import { SectionTitle } from "~/components/SectionTitle";

export function Facebook({ facebookTitle, facebookScriptSmall, facebookScriptLarge }) {
  return (
    <Layout>
      <div className="mx-auto block md:hidden">
        {facebookTitle && <SectionTitle title={facebookTitle} />}
        <div className=""
          dangerouslySetInnerHTML={{
            __html: facebookScriptSmall,
          }}
        ></div>
      </div>
      <div className="mx-auto hidden md:block ">
        {facebookTitle && <SectionTitle title={facebookTitle} />}
        <div className=""
          dangerouslySetInnerHTML={{
            __html: facebookScriptLarge,
          }}
        ></div>
      </div>
    </Layout>
  );
}