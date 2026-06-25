# Deployment

## Railway

1. Create a Railway project from this GitHub repository.
2. Add the environment variables listed in `.env.example`.
3. Deploy using the included Dockerfile and Railway configuration.
4. Confirm the health endpoint at `/api/health`.
5. Add the final custom domain.
6. Update the public site URL variable to the final HTTPS origin.

## Contact email

Create a Resend account, verify the final sending domain, and configure the sender and destination addresses. Until these variables are present, the form returns a safe message asking visitors to use direct email.

## Release checklist

- Run the type checker and production build.
- Test navigation at mobile and desktop widths.
- Submit valid, invalid, and bot-trap contact requests.
- Confirm canonical URL, Open Graph preview, sitemap, and robots output.
- Add verified social and project links when available.
