import { Layout } from "../layout";
import { SectionTitle } from "~/components/SectionTitle";

export function Donation({ donationPartner, donationScript }) {
  return (
    <Layout>
      <div className="mx-auto block max-w-xs">
        {donationPartner && <SectionTitle title={donationPartner} />}
        <div
          dangerouslySetInnerHTML={{
            __html: donationScript,
          }}
        ></div>
      </div>
    </Layout>
  );
}
