import {useState} from 'react';

import {currentPlan, sampleInvoices} from '../../api/billing';
import {
    BannerText,
    Card,
    CardLabel,
    Columns,
    DownloadLink,
    Feature,
    FeatureList,
    OutlineButton,
    Page,
    PlanName,
    StatusPill,
    Table,
    TableHeader,
    Title,
    UnlockLink,
    UpgradeBanner,
    UpsellButton,
    Usage,
    UsageFill,
    UsageTrack,
    UsageWarning,
} from './styles';

const statusLabels = {paid: 'Paid', due: 'Due', overdue: 'Overdue'};

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'});

export function PlanAndBilling() {
    const [notice, setNotice] = useState<string | null>(null);
    const usedPercent = Math.round((currentPlan.childrenEnrolled / currentPlan.childLimit) * 100);
    const demoOnly = (what: string) => setNotice(`${what} is turned off in this demo.`);

    return (
        <Page>
            <Title>Plan and billing</Title>

            <UpgradeBanner>
                <BannerText>
                    <h2>Get more with Famly Plus</h2>
                    <p>Add the parent app, learning journals and up to 60 children.</p>
                </BannerText>
                <UpsellButton $outlined onClick={() => demoOnly('Comparing plans')}>
                    Compare plans
                </UpsellButton>
                <UpsellButton onClick={() => demoOnly('Upgrading')}>Upgrade to Plus</UpsellButton>
            </UpgradeBanner>

            {notice && <p style={{margin: 0, fontSize: 14, color: '#71718a'}}>{notice}</p>}

            <Columns>
                <Card>
                    <CardLabel>Current plan</CardLabel>
                    <PlanName>
                        {currentPlan.name}
                        <span>£{currentPlan.price} a month</span>
                    </PlanName>
                    <Usage>
                        {currentPlan.childrenEnrolled} of {currentPlan.childLimit} children
                        <UsageTrack>
                            <UsageFill $percent={usedPercent} />
                        </UsageTrack>
                        {usedPercent >= 85 && <UsageWarning>You're close to your plan's limit.</UsageWarning>}
                    </Usage>
                </Card>

                <Card>
                    <CardLabel>What's included</CardLabel>
                    <FeatureList>
                        {currentPlan.included.map(feature => (
                            <Feature key={feature}>{feature}</Feature>
                        ))}
                        {currentPlan.locked.map(feature => (
                            <Feature key={feature} $locked>
                                {feature}
                                <UnlockLink onClick={() => demoOnly('Upgrading')}>Unlock</UnlockLink>
                            </Feature>
                        ))}
                    </FeatureList>
                </Card>
            </Columns>

            <Card>
                <TableHeader>
                    <CardLabel as="h2" style={{margin: 0}}>
                        Invoices
                    </CardLabel>
                    <OutlineButton onClick={() => demoOnly('Downloading invoices')}>Download all</OutlineButton>
                </TableHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>Period</th>
                            <th>Issued</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>
                                <span style={{position: 'absolute', left: -9999}}>Download</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleInvoices.map(invoice => (
                            <tr key={invoice.invoiceId}>
                                <td>{invoice.period}</td>
                                <td>{formatDate(invoice.issued)}</td>
                                <td>£{invoice.amount.toFixed(2)}</td>
                                <td>
                                    <StatusPill $status={invoice.status}>{statusLabels[invoice.status]}</StatusPill>
                                </td>
                                <td style={{textAlign: 'right'}}>
                                    <DownloadLink
                                        href="#"
                                        onClick={event => {
                                            event.preventDefault();
                                            demoOnly('Downloading invoices');
                                        }}
                                    >
                                        Download
                                    </DownloadLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </Page>
    );
}
