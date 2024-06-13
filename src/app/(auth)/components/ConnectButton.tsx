import { Button } from '@/app/dashboard/components/Button';
import { ConnectButton as WalletConnectButton } from '@rainbow-me/rainbowkit'


interface ConnectButtonProps {
    handleSignInWithWallet: () => void
}
export function ConnectButton({ handleSignInWithWallet }: ConnectButtonProps) {
    return (
        <WalletConnectButton.Custom>
            {({
                account,
                chain,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button onClick={openConnectModal} type="button" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 8, borderRadius: '.8rem', backgroundColor: '#8b5cf6' }}>
                                        Connect Wallet
                                    </button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button">
                                        Wrong network
                                    </button>
                                );
                            }

                            return (
                                <Button onClick={handleSignInWithWallet} className='w-full truncate'>
                                    Click to Sign In: {account.address}
                                </Button>
                            );
                        })()}
                    </div>
                );
            }}
        </WalletConnectButton.Custom>
    )
}