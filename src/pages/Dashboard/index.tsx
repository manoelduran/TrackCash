import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LeftCard } from "../../components/LeftCard";
import { RightCard } from "../../components/RightCard";
import { AuthContext } from "../../contexts/AuthContext";
import {
    Container,
    CardDiv,
    FooterDiv,
} from './styles';

export function Dashboard() {
    const navigate = useNavigate();
    const {
        currentUser,
        payments,
        fetchMarketTotalizer,
        marketTotalizer,
        fetchPayments
    } = useContext(AuthContext);
    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [navigate, currentUser]);
    useEffect(() => {
        try {
            fetchMarketTotalizer();
            fetchPayments();
        } catch (err) {
            alert(err);
        }
    }, [])
    return (
        <Container>
            <Header />
            <CardDiv>
                <LeftCard />
                {payments &&
                    <>
                        {marketTotalizer &&
                            <>
                                <RightCard
                                    name2={marketTotalizer?.balances_marketplaces["KaBuM!"].mkp_name}
                                    value2={marketTotalizer?.balances_marketplaces["KaBuM!"].mkp_total}
                                    key={marketTotalizer?.balances_marketplaces["Carrefour"].mkp_name}
                                    name1={marketTotalizer?.balances_marketplaces["Carrefour"].mkp_name}
                                    anticipations={payments?.data[0].Total.anticipations}
                                    comissions={payments?.data[0].Total.comissions}
                                    payments_total={payments?.data[0].Total.current_balance}
                                    refundeds={payments?.data[0].Total.refundeds}
                                    shipping={payments?.data[0].Total.shipping}
                                    total={payments?.data[0].Total.total}
                                    value1={marketTotalizer?.balances_marketplaces["Carrefour"].mkp_total}
                                    withdrawals={payments?.data[0].Total.withdrawals} />
                            </>
                        }
                    </>
                }
            </CardDiv>
            <FooterDiv>
                <Footer />
            </FooterDiv>
        </Container>
    );
}