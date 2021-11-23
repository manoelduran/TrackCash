import Loader from "react-loader-spinner";
import { useTheme } from "styled-components";
import {Container} from './styles';
export function Loading() {
    const theme = useTheme()
    return (
        <Container>
            <Loader
                type="TailSpin"
                color={theme.orange}
                height={20}
                width={20}
            />
        </Container>
    );
}