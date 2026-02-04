"use client";

import { signIn } from "next-auth/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-slate-soft flex items-center justify-center p-4">
            <Card className="w-full max-w-md space-y-8 animate-in zoom-in duration-500">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-display font-bold text-navy">Installer Login</h1>
                    <p className="text-slate-500 text-sm">Access your leads and project dashboard</p>
                </div>

                <div className="space-y-4">
                    <Button
                        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                        variant="primary"
                        className="w-full py-4 text-lg bg-white !text-navy border-2 border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-3"
                    >
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                        Sign in with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-slate-500 tracking-widest">Enterprise Access</span>
                        </div>
                    </div>

                    <p className="text-xs text-center text-slate-400 px-4">
                        Secure access for authorized Musstech installers and administrators only.
                    </p>
                </div>

                <div className="text-center pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-500">
                        Need access?{" "}
                        <a href="mailto:support@musstech.com" className="text-navy font-bold hover:text-green transition-colors">Contact Support</a>
                    </p>
                </div>
            </Card>
        </div>
    );
}
